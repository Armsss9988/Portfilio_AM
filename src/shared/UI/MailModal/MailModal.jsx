"use client";
import React, { useState } from "react";
import { Github, Linkedin, Mail, X } from "lucide-react";

const MailModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-700 text-green-700 rounded-xl font-semibold hover:bg-green-700 hover:text-white transition-all duration-300"
      >
        <Mail size={18} /> Contact Me
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 border-2 border-green-200 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-green-800 mb-4 text-center">
              Let's Connect
            </h2>

            <p className="text-sm text-brown-600 text-center mb-6">
              Reach out to me via any of the platforms below!
            </p>

            <div className="flex justify-center space-x-8 pt-2">
              <a
                href="mailto:leanhminh098@gmail.com"
                className="text-green-700 hover:text-green-500 transition transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://github.com/Armsss9988"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-500 transition transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/l%C3%AA-anh-minh-lamlamlam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-500 transition transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MailModal;
