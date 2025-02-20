import { Routes, Route } from "react-router-dom";
import HomePageComponent from "./components/homePage/HomePage";
import UserProfilePage from "./components/profilePage/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePageComponent} />
        <Route path="/profile" Component={UserProfilePage} />
      </Routes>
    </>
  );
}

export default App;
