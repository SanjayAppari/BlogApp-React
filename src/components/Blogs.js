import React, { useContext, useEffect } from 'react'
import blogContext from '../context/blogs/blogcontext'
import BlogItem from './BlogItem';

function Blogs(props) {

  const category = props.category;
  const {blogs}  = useContext(blogContext);
  const {getallblogs}  = useContext(blogContext);
  
  useEffect(()=>{
    getallblogs();
  },[]);

  
  return (
    <div className='row d-flex align-items-center justify-content-center mx-4' style={{marginTop:'150px'}}>
        <h3>{category.charAt(0).toUpperCase() + category.slice(1)} Blogs</h3>
        {
          
            blogs.map((ele)=>{
              // return <BlogItem key={ele._id} blog={ele} />
               if(category==='all') 
               return <BlogItem key={ele._id} blog={ele} />
               else if( ele.category===category) 
               return <BlogItem key={ele._id} blog={ele} />
            })
        }
    </div>
  )
}

export default Blogs
