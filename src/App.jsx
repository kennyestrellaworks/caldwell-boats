import "./App.css";
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
import { Booking } from "./pages/booking/Booking";
import { Toaster } from "react-hot-toast";
import { ProfileDetails } from "./pages/profile/ProfileDetails";
import { ProfileLayout } from "./layout/ProfileLayout";
import { BookingHistoryLayout } from "./layout/BookingHistoryLayout";
import { BookingActive } from "./pages/booking/BookingActive";
import { BookingCompleted } from "./pages/booking/BookingCompleted";
import { BookingCancelled } from "./pages/booking/BookingCancelled";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="speedboats" element={<Speedboats />} />
        <Route path="speedboats/:id" element={<Speedboat />} />
        <Route path="speedboats/:id/booking" element={<Booking />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<ProfileLayout />}>
          <Route index element={<ProfileDetails />} />
          <Route path="booking-history" element={<BookingHistoryLayout />}>
            <Route index element={<BookingActive />} />
            <Route path="completed" element={<BookingCompleted />} />
            <Route path="cancelled" element={<BookingCancelled />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
};
