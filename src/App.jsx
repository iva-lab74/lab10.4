import BlogPost from "./Pages/BlogPost";
import Blog from "./Pages/Blog";
import NavBar from "./Components/Navbar";

import { Route, Routes, BrowserRouter } from 'react-router-dom';

export default function App() {

  return (
    <div>

     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

        </Routes>
      </BrowserRouter>
    </div>
  );

}