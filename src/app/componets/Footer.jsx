import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-inherit border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex justify-between">
        <span className="text-slate-400">
          Built with Next.js, JavaScript & Tailwind
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
