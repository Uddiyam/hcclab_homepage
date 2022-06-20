import Home from "../pages/Home";
import People from "../pages/People";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Lectures from "../pages/Lectures";
import Publications from "../pages/Publications";
import Introduction from "../pages/Introduction";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Introduction" element={<Introduction />} />
          <Route exact path="/People" element={<People />} />
          <Route exact path="/Lectures" element={<Lectures />} />
          <Route exact path="/Publications" element={<Publications />} />
        </>
      </Routes>
    </Router>
  );
};

export default AppRouter;
