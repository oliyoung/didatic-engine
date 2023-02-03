import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./client";

const Root = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const getProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select(
          "id, name, description,due_at, budgeted, cost_cents, location (id, name)"
        );
      setProjects(data as Project[]);
    };
    getProjects();
  }, []);

  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-4"
      >
        {projects.map((project) => (
          <li className="box relative" key={project.id}>
            {project.budgeted && (
              <div className="bg-red-900 rounded-t-lg absolute w-full h-2" />
            )}
            <Link
              to={`/projects/${project.id}`}
              className="flex flex-col divide-y divide-solid "
            >
              <div className="px-6 pt-4 pb-0 flex flex-row">
                <div className="outline-2 flex-1">
                  <div className="text-sm text-slate-500">
                    {project.location.name}
                  </div>
                  <h3 className="mb-2">{project.name}</h3>
                </div>
                <div className="text-2xl font-bold text-slate-900">
                  {project.due_at && `${project.due_at}`}
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="text-slate-900 font-extrabold text-lg">
                  {new Intl.NumberFormat("en-AU", {
                    style: "currency",
                    currency: "AUD",
                  }).format(project.cost_cents / 100)}
                </div>
                <div className="text-slate-700 text-sm">
                  {project.description}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Link className="p-4 rounded bg-fuchsia-500 py-2" to="/projects/new">
        New
      </Link>
    </div>
  );
};

export default Root;
