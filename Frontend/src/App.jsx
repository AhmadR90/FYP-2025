import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignupForm from "./Components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="contact" element={<Contact/>}></Route> */}
          <Route path="/" element={<SignupForm />}></Route>
          <Route path="/home" element={<div><Header/><Home /> <Footer/></div>}></Route>
          <Route path="/about" element={<div><Header/><About /> <Footer/></div>}></Route>
          <Route path="login" element={<Login/>}></Route>

          {/* <Route path="register" element={<SignupForm />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
