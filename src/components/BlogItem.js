import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BlogItem(props) {
  const host = "http://localhost:1708";
  const navigate = useNavigate();

  const { blog } = props


  const handleId = async (id)=>{
    localStorage.setItem("blogId",id);

    try {
      const response = await fetch(`${host}/api/blog/getblog/${id}`,{
        method:'GET',
      });
      const json = await response.json();
      localStorage.setItem('userId',json.user);
      const arr = JSON.stringify(json.comment);
      
      localStorage.setItem('commentarr',arr);
      navigate("/openblog");

    } catch (err) {
      console.error(err.message);
    }
  }

  
  return (
    <div className='col-md-6 my-3' >
      <div className="card">
        <img src={blog.image} height={'400px'} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text"  dangerouslySetInnerHTML={{ __html: blog.description.slice(0,200)+"............" }}></p>
            <Link onClick={()=>{handleId(blog._id)}}  className="btn btn-primary">Read More</Link>
          </div>
      </div>
    </div>
  )
}

export default BlogItem
