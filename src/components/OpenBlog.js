import React, { useContext, useEffect, useState } from 'react'
import blogContext from '../context/blogs/blogcontext'

function OpenBLog() {

  const imageStyle = {
    width: '100%',
    height: '300px'
  }
  const commentStyle = {
    width: '90%',
    // height: '90px',
    backgroundColor: '#CC8899',
    borderRadius: '10px',
  }


  const { presents, getblogbyid, bloguser, getuserbyid } = useContext(blogContext);

  useEffect(() => {
    const id = localStorage.getItem("blogId");
    const userid = localStorage.getItem("userId");
    getblogbyid(id);
    getuserbyid(userid);
    console.log('hi');
  },[]);

 let p;
  const arr = JSON.parse(localStorage.getItem("commentarr") || "[]");

  return (
    <div style={{ marginTop: '135px' }}>
      <div className="container border p-0">
        <div className="col-12">
          <img src={presents.image} style={imageStyle} alt="" />
        </div>
        <div className="col-12 pt-2 pb-2 d-flex align-items-center justify-content-center border-bottom" >
          <center>
            <h4 style={{ color: '#880ED4', fontWeight: '600' }}>{presents.title}</h4>
            <b>Author</b> : {bloguser.name} <br />
            <b>Email</b> : {bloguser.email} <br />
            <button className="btn btn-primary my-2 mx-2 border-0" style={{ backgroundColor: '#880ED4', color: 'white' }}>
              <i className="fa-solid fa-pen"></i> Update
            </button>
            <button className="btn btn-primary my-2 mx-2 border-0" style={{ backgroundColor: '#880ED4', color: 'white' }}>
              <i className="fa-solid fa-trash"></i> Delete
            </button>
          </center>
        </div>
        <div className="description col-12 px-4 py-2 border-bottom">
          <h4>{presents.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: presents.description }} ></p>
        </div>
        <div className="comment col-12 px-4 py-3">
          <h5 style={{ color: '#880ED4' }}>Comment</h5>
          <div className="col-12 d-flex align-items-center justify-content-center" style={{flexDirection:'column'}}>
            
              {
                arr.length==0? <h4>No Comments</h4>:
                arr.map((ele)=>{
                  return <div className="comment my-3 p-3" key={ele._id} style={commentStyle}> 
                            <i className="fa-solid fa-trash" style={{float:'right',fontSize:'20px'}}></i>
                            <h6><b>UserName</b>: {ele.postedby}</h6> 
                            <h6><b>Comment</b> : {ele.text}</h6>
                         </div>
                      // (<div className="comment" style={commentStyle}>
                      //   <h1 key={ele._id}>{ele.text}</h1>
                      // </div>)
                })
               }
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenBLog
