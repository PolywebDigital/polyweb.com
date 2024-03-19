import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurMethodology from "./pages/OurMethodology";
import OurTeam from "./pages/OurTeam";
import Pricing from "./pages/Pricing";
import Appointment from "./pages/Appointment";
import { paths } from "./constants/Paths";
import * as emailjs from "@emailjs/browser";
import AnimationLayout from "./layouts/AnimationLayout";

const App: React.FC = () => {
  emailjs.init({
    publicKey: "mF12nL6swH1qcE-LA",
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  return (
    <Routes>
      <Route element={<AnimationLayout />}>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.ourMethodology} element={<OurMethodology />} />
        <Route path={paths.ourTeam} element={<OurTeam />} />
        <Route path={paths.pricing} element={<Pricing />} />
        <Route path={paths.appointment} element={<Appointment />} />
        <Route path="*" element={<Navigate to="/accueil" />} />
      </Route>
    </Routes>
  );
};

export default App;
