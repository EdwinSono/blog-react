/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FC, PropsWithChildren } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { blogdata, IBlogPost, IComment } from '../data/blogData';

interface Props {
  children: any
}

const BlogContext: any = React.createContext(null);

const BlogProvider:FC<PropsWithChildren>  = ({ children }) => {
  const [blogs, setBlogs] = React.useState(blogdata);

  const create = (blog: IBlogPost) => {
    setBlogs((prevState) => [blog, ...prevState]);
  };

  const remove = (slug: string) => {
    const idx = blogs.findIndex((blog) => blog.slug === slug);

    if (idx >= 0) {
      setBlogs((prevState) => {
        const blogsTemp = [...prevState];
        blogsTemp.splice(idx, 1);
        return blogsTemp;
      });
    }
  };

  const commentBlog = (blogSlug: string, comment: IComment) => {
    const idx = blogs.findIndex((blog) => blog.slug === blogSlug);
    if (idx >= 0) {
      setBlogs((prevState) => {
        const blogsTemp = [...prevState];
        const blog = blogsTemp[idx];
        // const newComments = [...blog.comments, comment];
        // blog.comments = newComments;
        blog.comments.push(comment);
        blogsTemp[idx] = blog;
        return blogsTemp;
      });
    }
  };

  const removeComment = (blogSlug: string, position: number) => {
    const idx = blogs.findIndex((blog) => blog.slug === blogSlug);
    if (idx >= 0) {
      const blogsTemp = [...blogs];
      blogsTemp[idx].comments?.splice(position, 1);
      setBlogs(blogsTemp);
    }
  };

  const value = {
    blogs,
    create,
    remove,
    commentBlog,
    removeComment,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

const useBlog = () => {
  return React.useContext(BlogContext);
};

function BlogRoute(props: Props) {
  const { blogs }: any = React.useContext(BlogContext);
  const { slug } = useParams();

  const blog = blogs.find((post: { slug: string | undefined; }) => post.slug === slug);

  if (!blog) {
    return <Navigate to="/not-found" />;
  }

  return props.children;
}

export { BlogProvider, useBlog, BlogRoute };
