// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
// import About from "../components/About";
// import Footer from "../components/Footer";
// import Terms from "../pages/Terms";
// import ResidenceConfiguration from "../components/ResidenceConfiguration";
// // import PopupForm from "../components/PopupForm";
// import Expectations from "../components/Expectations";
// function AppRoute() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/home" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/footer" element={<Footer />} />

//         <Route path="/terms" element={<Terms />} />

//         <Route
//           path="/residence-configuration"
//           element={<ResidenceConfiguration />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default AppRoute;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../components/About";
import Footer from "../components/Footer";
import Terms from "../pages/Terms";
import ResidenceConfiguration from "../components/ResidenceConfiguration";
import Expectations from "../components/Expectations";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/footer" element={<Footer />} />

        <Route path="/terms" element={<Terms />} />

        <Route
          path="/residence-configuration"
          element={<ResidenceConfiguration />}
        />

        <Route
          path="/expectations"
          element={<Expectations />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;