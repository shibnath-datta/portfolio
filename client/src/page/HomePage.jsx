import React, { useEffect } from "react";
import HeroSection from "./../components/HeroSection";
import BlogStore from "../store/BlogStore.js";
import BlogSectionHome from "../components/BlogSectionHome.jsx";

const HomePage = () => {
  const { BlogListRequest } = BlogStore();

  useEffect(() => {
    (async () => {
      await BlogListRequest();
    })();
  }, []);

  return (
    <>
      {/*Hero Section*/}
      <HeroSection />
      {/*Blog Section Home*/}
      <BlogSectionHome />
    </>
  );
};

export default HomePage;
