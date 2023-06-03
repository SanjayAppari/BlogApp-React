import React, { useContext, useRef, useState } from 'react'
import JoditEditor , { Jodit } from 'jodit-react'
import blogContext from '../context/blogs/blogcontext';
import { useNavigate } from 'react-router-dom';

function AddBlog() {


    const navigate = useNavigate();

    const {addBlog} = useContext(blogContext);
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [newblog , setNewblog] = useState({title:"",description:"",category:"General",image:""});

    const onChange = (e)=>{
        setNewblog({...newblog, [e.target.name]:e.target.value}); 
    }

    const handleClick = (e)=>{
        e.preventDefault();
        addBlog(newblog.title,newblog.description,newblog.category,newblog.image);
        setNewblog({title:"",description:"",category:"General",image:""});
        navigate('/blogs')
    }

    return ( 
        <div className='container p-5' style={{ marginTop: '135px' }}>
            {/* {JSON.stringify(newblog)} */}
            <div className="border p-4">
                <center><h4>Write Your Blog</h4></center>
                <form> 
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title Of the Blog :</label>
                        <input type="email" className="form-control" id="title" name='title' value={newblog.title} onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <JoditEditor className='mb-3'
                        ref={editor}
                        value={content}
                        // Jodit.modules.Helpers.stripTags
                        onChange={newContent => setNewblog({...newblog,'description':(newContent)})}  
                    />

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Category :</label>
                        <select className="form-select" name='category' value={newblog.category} onChange={onChange} aria-label="Default select example">
                            <option defaultValue="General">General</option>
                            <option value="Art">Art</option>
                            <option value="Science">Science</option>
                            <option value="Technology">Technology</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Food">Food</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Enter Poster URL :</label>
                        <input type="text" className="form-control" id="image" name='image' value={newblog.image} onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {content}
        </div>
    )
}

export default AddBlog
