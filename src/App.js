import './App.css';
import Blogs from './components/Blogs';
import Home from './components/Home';
import OpenBLog from './components/OpenBlog';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogState from './context/blogs/BlogState';
import { useContext } from 'react';
import blogContext from './context/blogs/blogcontext';
import AddBlog from './components/AddBlog';


function App() {

  return (
    <div className="App">

      <BlogState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/addblog' element={<AddBlog/> } />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/openblog' element={<OpenBLog/> } />
            <Route exact path='/blogs' element={<Blogs category='all'/>} />
          </Routes>
        </Router>
      </BlogState>
    </div>
  );
}

export default App;
