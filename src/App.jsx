import BlogPost from "./Pages/BlogPost";
import Blog from "./Pages/Blog";
import NavBar from "./Components/Navbar";
import Login from "./Pages/LogIn";
import Admin from "./Pages/Admin";

import { Route, Routes, BrowserRouter } from 'react-router-dom';

export default function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}