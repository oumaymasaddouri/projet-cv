import { Route, Routes } from "react-router-dom";
import "./index.css";
// import AddEdit from "./components/AddEdit";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
// import ContactList from "./components/ContactList";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/add" element={<AddEdit></AddEdit>}></Route> */}
        {/* <Route path="/edit/:id" element={<AddEdit></AddEdit>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;