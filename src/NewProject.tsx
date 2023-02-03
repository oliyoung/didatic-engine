export default function Example() {
  return (
    <form className="box">
      <div className="space-y-8 divide-y divide-slate-300 p-8">
        <div>
          <h3>Project</h3>

          <div className="sm:col-span-3">
            <label htmlFor="country">Location</label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 ">
            <div>
              <label htmlFor="name">Name</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue={""}
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
}
