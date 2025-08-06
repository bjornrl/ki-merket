import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div>
      <Nav />

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
