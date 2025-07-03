import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
