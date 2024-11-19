/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlogItem = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();
  const param = useParams();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/blog.json");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const matched = blogs.find((item) => item.id === param.id);
      if (matched) {
        setBlog(matched);
      } else {
        console.error("Blog not found");
      }
    }
  }, [blogs, param]);

  return (
    <div className="mx-20 mt-20">
      <Helmet>
        <title>Blogs</title>
      </Helmet>{" "}
      {blog ? (
        <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>
            <div className="text-sm text-gray-500 mb-6">
              <span>By {blog.author}</span> |{" "}
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>
            <div className="text-gray-700 space-y-6">
              {blog.content.map((item, index) =>
                typeof item === "string" ? (
                  <p key={index} className="leading-relaxed">
                    {item}
                  </p>
                ) : (
                  <div key={index} className="my-6">
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="rounded-lg mx-auto shadow-md"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="p-6 border-t">
            <button
              onClick={() => navigate("/blog")}
              className="px-6 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600 text-lg">Loading blog...</p>
        </div>
      )}
    </div>
  );
};

export default BlogItem;
