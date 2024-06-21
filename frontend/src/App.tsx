import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Home } from "./pages/Home";
import { NewStory } from "./pages/NewStory";
import { UserBlogs } from "./pages/UserBlogs";
import { BlogScreen } from "./pages/[id]";
import { Profile } from "./pages/Profile";
import { BlogUpdate } from "./pages/[updateId]";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-story" element={<NewStory />} />
          <Route path="/me" element={<UserBlogs />} />
          <Route path="/blog/:id" element={<BlogScreen />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update/:id" element={<BlogUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
