import React, { useEffect } from "react";
import BlogSection from "../components/BlogSection";
import BlogStore from "../store/BlogStore";

const BlogPage = () => {
  const { BlogListRequest } = BlogStore();

  useEffect(() => {
    (async () => {
      await BlogListRequest();
    })();
  }, []);
  return (
    <>
      {/*Blog Page*/}
      <BlogSection />
    </>
  );
};

export default BlogPage;
