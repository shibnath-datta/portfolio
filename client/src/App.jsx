import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./components/layout/layout";
import AboutPage from "./page/AboutPage";
import BlogPage from "./page/BlogPage";
import ServicePage from "./page/ServicePage";
import ContactPage from "./page/ContactPage";
import LoginPage from "./page/LoginPage";
import DasLayout from "./components/dashboard/dasLayout/DasLayout";
import DashboardPage from "./page/DashboardPage";
import BlogListPage from "./page/BlogListPage";
import TeamListPage from "./page/TeamListPage";
import ServiceListPage from "./page/ServiceListPage";
import BlogAddPage from "./page/BlogAddPage";
import BlogUpdate from "./components/dashboard/blog/BlogUpdate";

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
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          exact
          path="/dashboard"
          element={
            <DasLayout>
              <DashboardPage />
            </DasLayout>
          }
        />
        <Route
          exact
          path="/blog-list"
          element={
            <DasLayout>
              <BlogListPage />
            </DasLayout>
          }
        />
        <Route
          exact
          path="/team-list"
          element={
            <DasLayout>
              <TeamListPage />
            </DasLayout>
          }
        />
        <Route
          exact
          path="/service-list"
          element={
            <DasLayout>
              <ServiceListPage />
            </DasLayout>
          }
        />
        <Route
          exact
          path="/blog-add"
          element={
            <DasLayout>
              <BlogAddPage />
            </DasLayout>
          }
        />
        <Route
          exact
          path="/blog-update/:id"
          element={
            <DasLayout>
              <BlogUpdate />
            </DasLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
