import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogStore from "../../../store/BlogStore";
import TeamStore from "../../../store/TeamStore";
import ServiceStore from "../../../store/ServiceStore";
import ContactStore from "../../../store/ContactStore";

const DashboardContain = () => {
  // Get data and API functions from your stores
  const { BlogList, BlogListRequest } = BlogStore();
  const { TeamList, TeamListRequest } = TeamStore();
  const { ServiceList, ServiceListRequest } = ServiceStore();
  const { ContactList, ContactListRequest } = ContactStore();

  // Load data on component mount
  useEffect(() => {
    BlogListRequest();
    TeamListRequest();
    ServiceListRequest();
    ContactListRequest();
  }, []);

  // Calculate message stats
  const totalMessages = ContactList ? ContactList.length : 0;
  const readMessages = ContactList
    ? ContactList.filter((msg) => msg.isRead).length
    : 0;
  const unreadMessages = totalMessages - readMessages;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Blogs Summary Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Blogs</h2>
          <p className="text-2xl mb-4">{BlogList ? BlogList.length : 0}</p>
          <Link to="/blog-list" className="text-blue-500 hover:underline">
            View Details
          </Link>
        </div>
        {/* Team Members Summary Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Team Members</h2>
          <p className="text-2xl mb-4">{TeamList ? TeamList.length : 0}</p>
          <Link to="/team-list" className="text-blue-500 hover:underline">
            View Details
          </Link>
        </div>
        {/* Services Summary Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Services</h2>
          <p className="text-2xl mb-4">
            {ServiceList ? ServiceList.length : 0}
          </p>
          <Link to="/service-list" className="text-blue-500 hover:underline">
            View Details
          </Link>
        </div>
        {/* Messages Summary Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p className="text-2xl mb-2">Total: {totalMessages}</p>
          <p className="text-lg text-green-600">Read: {readMessages}</p>
          <p className="text-lg text-red-600">Unread: {unreadMessages}</p>
          <Link to="/contact-list" className="text-blue-500 hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardContain;
