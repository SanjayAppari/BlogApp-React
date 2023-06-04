import React, { useContext, useEffect, useState } from 'react'
import blogContext from '../context/blogs/blogcontext';
import { useNavigate } from 'react-router-dom';

function Comments(props) {
    const host = "http://localhost:1708";
    const [arr,setArr] = useState([]);
    const handlecomments= async ()=>{
        const id= localStorage.getItem('blogId');
        console.log(id);
        try {
            const response = await fetch(`${host}/api/blog/getblog/${id}`,{
              method:'GET',
            });
            const json = await response.json();
            const arr1 = JSON.stringify(json.comment);
            const arr2 = JSON.parse(arr1 || "[]");
            setArr(arr2);
            console.log(arr);
        }
        catch(err){
            console.error(err.message);
        }
    }

    const {addcomment} = useContext(blogContext);
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("jo")
        handlecomments();
    },[]);
    const commentStyle = {
        width: '90%',
        // height: '90px',
        backgroundColor: '#CC8899',
        borderRadius: '10px',
      
    }
    const [comment , setComment] = useState();
    const onChange = (e)=>{
    setComment({...comment,[e.target.name]:e.target.value});
   }
  const handleComment = async (e)=>{
        addcomment(comment.text,localStorage.getItem("blogId"));
        setComment({text:""});
        navigate('/openblog');
  }

    return (

        <div>
            {JSON.stringify(comment)}
            <div className="col-12 py-4">
                <form action="">
              <div className="mb-3">
                <label htmlFor="text" className="form-label">Add Comment</label>
                <input type="text" className="form-control" id="text" onChange={onChange}  name='text' aria-describedby="emailHelp"/>
              </div>
              <button onClick={handleComment} type="submit" className="btn border-0" style={{backgroundColor:'#880ED4',color:'white'}}>Submit</button>
            </form>
          </div>
            
            <div className="col-12 d-flex align-items-center justify-content-center" style={{ flexDirection: 'column' }}>

                {
                    arr.length === 0 ? <h4>No Comments</h4>
                    :
                    arr.reverse().map((ele)=>{
                        return <div key={ele._id} className="comment my-3 p-3" style={commentStyle}>
                        { props.bloguser.name === localStorage.getItem('username')  &&
                        <i className="fa-solid fa-trash" style={{ float: 'right', fontSize: '20px' }}></i>
                        }
                        <h6><b>UserName</b>: {ele.postedby}</h6>
                        <h6><b>Comment</b> : {ele.text}</h6>
                    </div>
                    })
                }
                
            </div>
        </div>
    )
}

export default Comments
