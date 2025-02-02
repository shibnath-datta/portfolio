import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./components/layout/layout";
import AboutPage from "./page/AboutPage";
import BlogPage from "./page/BlogPage";
import ServicePage from "./page/ServicePage";
import ContactPage from "./page/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          exact
          path="/blog"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />
        <Route
          exact
          path="/service"
          element={
            <Layout>
              <ServicePage />
            </Layout>
          }
        />
        <Route
          exact
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
