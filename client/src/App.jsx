import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./components/layout/Layout";
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
import PrivateRouter from "./components/PrivateRouter";
import ContactListPage from "./page/ContactListPage";

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
            <PrivateRouter>
              <DasLayout>
                <DashboardPage />
              </DasLayout>
            </PrivateRouter>
          }
        />
        <Route
          exact
          path="/blog-list"
          element={
            <PrivateRouter>
              <DasLayout>
                <BlogListPage />
              </DasLayout>
            </PrivateRouter>
          }
        />
        <Route
          exact
          path="/team-list"
          element={
            <PrivateRouter>
              <DasLayout>
                <TeamListPage />
              </DasLayout>
            </PrivateRouter>
          }
        />

        <Route
          exact
          path="/service-list"
          element={
            <PrivateRouter>
              <DasLayout>
                <ServiceListPage />
              </DasLayout>
            </PrivateRouter>
          }
        />
        <Route
          exact
          path="/contact-list"
          element={
            <PrivateRouter>
              <DasLayout>
                <ContactListPage />
              </DasLayout>
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
