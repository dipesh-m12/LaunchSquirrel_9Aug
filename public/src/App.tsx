import "@elastic/eui/dist/eui_theme_light.css";
import { Route, Routes } from "react-router";
import GlobalStyle from "./GlobalStyle";
import Landing from "./pages/Landing";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import { EuiProvider } from "@elastic/eui";
function App() {
  return (
    <EuiProvider colorMode="light">
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <GlobalStyle />
    </EuiProvider>
  );
}

export default App;
