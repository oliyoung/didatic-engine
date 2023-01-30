/// <reference types="vite/client" />
interface Location {
  id: String;
  name: String;
}
interface Project {
  id: String;
  due_at: String;
  name: String;
  description: String;
  location: Location;
  cost_cents: Number;
  budgeted: Boolean;
}
