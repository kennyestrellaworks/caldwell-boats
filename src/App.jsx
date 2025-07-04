import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { NotFound } from "./components/NotFound";
import { About } from "./pages/about/About";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { Home } from "./pages/home/Home";
import { Speedboats } from "./pages/speedboat/Speedboats";
import { Speedboat } from "./pages/speedboat/Speedboat";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="speedboats" element={<Speedboats />} />
      <Route path="speedboats/:id" element={<Speedboat />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
