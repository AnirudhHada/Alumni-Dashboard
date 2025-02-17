import { Routes, Route } from "react-router-dom";
import HomePageComponent from "./components/HomePage/HomePage";
import UserProfilePage from "./components/ProfilePage/UserProfile";

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
