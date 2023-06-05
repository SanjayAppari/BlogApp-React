import './App.css';
import Blogs from './components/Blogs';
import Home from './components/Home';
import OpenBLog from './components/OpenBlog';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogState from './context/blogs/BlogState';
import AddBlog from './components/AddBlog';
import Signup from './components/Signup';
import Login from './components/Login';
import UpdateBlog from './components/UpdateBlog';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState("white");
  const [modeReverse, setModeReverse] = useState("dark");

  const handleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setModeReverse("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      setModeReverse("light");
      document.body.style.backgroundColor = "#353935";
      document.body.style.color = "white";
    }
  };
  return (
    
    <div className="App">

      <BlogState>
        <Router>
          <Navbar mode={mode} modeReverse={modeReverse} handleMode={handleMode}/>
          <div style={{height:'120px'}}></div>
          <Routes>
            <Route exact path='/signup' element={<Signup/> } />
            <Route exact path='/login' element={<Login/> } />
            <Route exact path='/addblog' element={<AddBlog/> } />
            <Route exact path='/updateblog' element={ <UpdateBlog /> } />
            <Route exact path='/' element={<Home mode={mode} modeReverse={modeReverse} handleMode={handleMode} />} />
            <Route exact path='/openblog' element={<OpenBLog/> } />
            <Route exact path='/blogs' element={<Blogs mode={mode} modeReverse={modeReverse} handleMode={handleMode} category='all'/>} />
            <Route exact path='/art' element={<Blogs mode={mode} modeReverse={modeReverse} handleMode={handleMode} category='Art'/>} />
            <Route exact path='/entertainment' element={<Blogs mode={mode} modeReverse={modeReverse} handleMode={handleMode} category='Entertainment'/>} />
            <Route exact path='/science' element={<Blogs mode={mode} modeReverse={modeReverse} handleMode={handleMode} category='Science'/>} />
            <Route exact path='/technology' element={<Blogs  mode={mode} modeReverse={modeReverse} handleMode={handleMode} category='Technology'/>} />
            <Route exact path='/food' element={<Blogs mode={mode} modeReverse={modeReverse} handleMode={handleMode} category='Food'/>} />
            <Route exact path='/sports' element={<Blogs mode={mode} modeReverse={modeReverse} handleMode={handleMode} category='Sports'/>} />
          </Routes>
        </Router>
      </BlogState>
    </div>
  );
}

export default App;
