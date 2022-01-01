import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import React from "react";
import Navigation from "./components/nav"
import Home from "./routes/Home"
import SignIn from "./routes/SignIn"
import Input from "./routes/Input"
import MyPage from "./routes/MyPage"
import Logout from "./routes/Logout";
import Quiz from "./routes/Quiz";
import Mindmap from "./routes/Mindmap";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation></Navigation>
          <Routes>
          <Route exact path="/home" element={<Home/>} />
            <Route path="/input" element={<Input/>} />
            <Route path="/my-page" element={<MyPage/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/log-out" element={<Logout/>} />
            <Route path="/quiz" element={<Quiz/>} />
            <Route path="/mindmap" element={<Mindmap/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;