"use client";

import React, { useState } from "react";

const NotificationPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      user: "Terry Franci",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      message: "requests permission to change Project - Nganter App",
      project: "Project",
      time: "5 min ago",
      isOnline: true,
    },
    {
      id: 2,
      user: "Alena Franci",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      message: "requests permission to change Project - Nganter App",
      project: "Project",
      time: "8 min ago",
      isOnline: true,
    },
    {
      id: 3,
      user: "Jocelyn Kenter",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b630?w=40&h=40&fit=crop&crop=face",
      message: "requests permission to change Project - Nganter App",
      project: "Project",
      time: "15 min ago",
      isOnline: true,
    },
    {
      id: 4,
      user: "Brandon Philips",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      message: "requests permission to change Project - Nganter App",
      project: "Project",
      time: "1 hr ago",
      isOnline: false,
    },
  ];

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex justify-center items-center text-gray-600 hover:text-gray-800 rounded-full transition-colors"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
            fill="white"
          />
          <path
            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
            stroke="#E4E7EC"
          />
          <circle
            cx="37"
            cy="7"
            r="5"
            fill="#FD853A"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M21.861 13.8758V15.1258M21.861 15.1258C24.9676 15.1258 27.486 17.6442 27.486 20.7508V26.7925H16.236V20.7508C16.236 17.6442 18.7544 15.1258 21.861 15.1258ZM20.611 29.2919H23.111M15.1943 26.7925H28.5277"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Notification Badge */}
        {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {notifications.length}
        </span> */}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 mt-2 w-90.25 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-in fade-in-0 zoom-in-95 duration-100">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">
                Notifications
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 hover:bg-gray-50 border-b border-gray-50 last:border-b-0"
                >
                  <div className="flex items-start space-x-3">
                    {/* Avatar with online status */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={notification.avatar}
                        alt={notification.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {notification.isOnline && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">
                          <span className="font-medium text-gray-900">
                            {notification.user}
                          </span>
                          <span className="text-gray-600 ml-1">
                            {notification.message}
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          {notification.project}
                        </span>
                        <span className="text-xs text-gray-500">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100">
              <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
                View All Notification
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationPanel;
