import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpForm from "./components/signup/Signup";
import FormDetails from "./components/form/FormDetails";
import DBCards from "./components/DBCards/DBCards";
import ScannedProfiles from "./components/scanned profile/ScannedProfiles";
import FriendList from "./components/friend list/FriendList";
import UserView from "./components/user view/UserView";
import LoginForm from "./components/signup/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/loginform" element={<LoginForm/>} />
        <Route path="/detailsform" element={<FormDetails />} />
        <Route path="/dbcards" element={<DBCards />} />
        <Route path="/userview" element={<UserView />} />
        <Route path="/scannedprofiles" element={<ScannedProfiles />} />
        <Route path="/friendslist" element={<FriendList />} />
      </Routes>
    </Router>
    // <UserView />
  );
}

export default App;
