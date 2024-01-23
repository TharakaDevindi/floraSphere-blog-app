import React from "react";
import Blog from "../../../pages/Blog";
import BlogItem from "./BlogItem"
import './styles.css'


const BlogList = ({ blogs }) => {
    return (
      <div className='blogList-wrap'>
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    );
  };
  
  export default BlogList;
  