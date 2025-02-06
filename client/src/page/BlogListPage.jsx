import React, { useEffect } from "react";
import { BlogList } from "../components/dashboard/blog/BlogList";
import BlogStore from "../store/BlogStore";

const BlogListPage = () => {
  const { BlogListRequest } = BlogStore();

  useEffect(() => {
    (async () => {
      await BlogListRequest();
    })();
  }, []);
  return (
    <>
      {/*Blog list Component*/}
      <BlogList />
    </>
  );
};

export default BlogListPage;
