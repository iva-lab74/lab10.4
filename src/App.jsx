import BlogPost from "./Pages/BlogPost";
import Blog from "./Pages/Blog";
import NavBar from "./Components/Navbar";

import { Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <div>

      <BlogPost />
      <Blog />
      <NavBar />

      <Routes>
        <Route path="/" element= {<NavBar />} />
        <Route path="/" element= {<Blog />} />
        <Route path="/" element= {<BlogPost />} />      

      </Routes>

    </div>
  )

}