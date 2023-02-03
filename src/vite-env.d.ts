/// <reference types="vite/client" />
interface Location {
  id: string;
  name: string;
}
interface Project {
  id: string;
  due_at: string;
  name: string;
  description: string;
  location: Location;
  cost_cents: number;
  budgeted: boolean;
}
