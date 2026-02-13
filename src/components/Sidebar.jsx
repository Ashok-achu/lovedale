import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .sidebar-container {
  width: 240px;
  min-height: 100vh;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(20px);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

        .sidebar-title {
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          text-align: center;
          margin-bottom: 20px;
        }

        .nav-link {
          text-decoration: none;
          color: #f8d9ff;
          padding: 12px 18px;
          border-radius: 12px;
          transition: 0.3s;
          font-size: 16px;
        }

        .nav-link:hover {
          background: linear-gradient(45deg,#ff4b5c,#ff99ac);
          color: white;
          box-shadow: 0 0 15px #ff4b5c;
        }

        .active-link {
          background: linear-gradient(45deg,#ff4b5c,#ff99ac);
          color: white;
          box-shadow: 0 0 15px #ff4b5c;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          position: fixed;
          top: 15px;
          left: 15px;
          font-size: 26px;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 8px 12px;
          border-radius: 10px;
          cursor: pointer;
          z-index: 1100;
        }

        /* Mobile */
        @media(max-width:768px){
          .sidebar-container {
            transform: translateX(-100%);
          }

          .sidebar-container.open {
            transform: translateX(0);
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Sidebar */}
      <motion.div
        className={`sidebar-container ${open ? "open" : ""}`}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
      >
        <div className="sidebar-title">💖 Our World</div>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/memories"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={() => setOpen(false)}
        >
          Images
        </NavLink>

        

        <NavLink
          to="/convo"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={() => setOpen(false)}
        >
          Our Convo
        </NavLink>

        <NavLink
          to="/proposal"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={() => setOpen(false)}
        >
          Proposal
        </NavLink>

        <NavLink
          to="/song"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={() => setOpen(false)}
        >
          Song
        </NavLink>
      </motion.div>
    </>
  );
}
