import { useState } from 'react';
import BlogContext from './blogcontext';



const BlogState = (props) => {
    const host = "http://localhost:1708";

    const intialBlogs = [];
    const [blogs, setBlogs] = useState(intialBlogs);
    const [presents, setPresents] = useState([]);
    const [bloguser, setBloguser] = useState([]);
    const [blogcomment, setBlogcomment] = useState([]);
    // const [blog, setBlog] = useState(null);

    // getting all blogs 
    const getallblogs = async () => {
        try {
            const response = await fetch(`${host}/api/blog/getallblogs`, {
                method: 'GET',

            });
            const json = await response.json();
            setBlogs(json);
        } catch (err) {
            console.error(err.message);
            // res.status(500).send("Internal Error Occured");
        }
    }
    const getblogbyid = async (id) => {
        const response = await fetch(`${host}/api/blog/getblog/${id}`, {
            method: 'GET',
        });
        const json = await response.json();
        const arr = await json.comment;
        setBlogcomment(arr);
        setPresents(json);
    }

    const getuserbyid = async (id) => {
        const response = await fetch(`${host}/api/auth/getuser/${id}`, {
            method: 'GET',
        });
        const json = await response.json();
        setBloguser(json);
    }


    const addBlog = async (title, description, category, image) => {
        try {
            console.log('entered')
            const response = await fetch(`${host}/api/blog/addblog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3YjY1NzdiMWI1MTY4MGM1Mzk5NWYyIn0sImlhdCI6MTY4NTgwODUwM30.y13e02aXFG8sBXnE5sgD9sWm5AN5n2EbCTzc4sFz6bA'
                },
                body: JSON.stringify({ title, description, category, image })
            });
            const json = await response.json();
            console.log("added");
            console.log(json);
        } catch (err) {
            console.error(err.message);
            // res.status(500).send("Internal Error Occured");
        }


    }
    return (
        <BlogContext.Provider value={{ blogs, getallblogs, presents, getblogbyid, bloguser, getuserbyid, blogcomment, addBlog }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState