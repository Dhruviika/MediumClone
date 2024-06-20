import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { NewStory } from "./pages/NewStory";
import { UserBlogs } from "./pages/UserBlogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Blog />} />
          <Route path="/new-story" element={<NewStory />} />
          <Route path="/me" element={<UserBlogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
