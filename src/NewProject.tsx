import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "./client";

type Inputs = {
  location: number;
  name: string;
  description: string;
  cost_cents: number;
  budgeted: boolean;
};

const NewProject = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [locations, setLocations] = useState<Location[]>([]);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await supabase.from("projects").upsert({
      name: data.name,
      location: data.location,
      description: data.description,
      cost_cents: data.cost_cents * 100,
      budgeted: data.budgeted,
    });
    if (!response.error) {
      navigate("/");
    }
  };

  useEffect(() => {
    const getLocations = async () => {
      const { data } = await supabase.from("locations").select("id, name");
      const locations = data as Location[];
      setLocations(locations);
      reset({ location: parseInt(locations[0].id) });
    };
    getLocations();
  }, []);

  return (
    <form className="box" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8 divide-y divide-slate-300 p-8">
        <div>
          <h3>Project</h3>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 ">
            <div>
              <label htmlFor="location">Location</label>
              <div className="mt-1">
                <select
                  {...register("location")}
                  className="text-slate-900 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  {locations.map((location) => (
                    <option
                      key={location.id}
                      className="text-slate-900"
                      value={location.id}
                    >
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="text-slate-900 block w-full min-w-0 flex-1 rounded-none rounded-r-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name">Cost</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  {...register("cost_cents", { required: true })}
                  type="text"
                  className="text-slate-900 block w-full min-w-0 flex-1 rounded-none rounded-r-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name">Budgeted?</label>
              <div className="mt-1">
                <select
                  {...register("budgeted")}
                  className="text-slate-900 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option
                    key={location.id}
                    className="text-slate-900"
                    value={"1"}
                  >
                    True
                  </option>
                  <option
                    key={location.id}
                    className="text-slate-900"
                    value={"0"}
                  >
                    False
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <div className="mt-1">
                <textarea
                  {...register("description")}
                  rows={3}
                  className="text-slate-900 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-end gap-2">
          <button type="button">Cancel</button>
          <button type="submit" className="">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewProject;
