import { useState, useRef } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

export default function Proposal() {
  const [yes, setYes] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const audioRef = useRef(null);

  const handleYes = () => {
    setYes(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPosition({ x, y });
  };

  return (
    <>
      <style>{`
        .proposal-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1a001f, #3a0a3f, #2b0a2e);
        }

        /* Spotlight glow */
        .proposal-page::before {
          content: "";
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,105,180,0.35), transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(120px);
          z-index: 0;
        }

        .proposal-card {
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(25px);
          padding: 45px 30px;
          border-radius: 30px;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(255, 20, 147, 0.3);
          position: relative;
          z-index: 2;
        }

        .proposal-title {
          font-size: clamp(24px,5vw,40px);
          color: #fff;
          margin-bottom: 20px;
        }

        .proposal-message {
          font-size: clamp(16px,4vw,20px);
          color: #ffd9f5;
          margin-bottom: 30px;
          line-height: 1.7;
        }

        .btn-group {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          position: relative;
        }

        .yes-btn {
          padding: 14px 35px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          background: linear-gradient(45deg,#ff4b5c,#ff99ac);
          color: white;
          font-size: 18px;
          animation: heartbeat 1.5s infinite;
          box-shadow: 0 0 20px #ff4b5c;
        }

        .yes-btn:hover {
          transform: scale(1.1);
        }

        .no-btn {
          padding: 12px 30px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          background: white;
          color: #ff4b5c;
          font-size: 16px;
        }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.07); }
          50% { transform: scale(1); }
          75% { transform: scale(1.07); }
          100% { transform: scale(1); }
        }

        /* Pink flash */
        .flash {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: pink;
          opacity: 0.4;
          animation: flashAnim 0.6s ease forwards;
          pointer-events: none;
          z-index: 5;
        }

        @keyframes flashAnim {
          0% { opacity: 0.6; }
          100% { opacity: 0; }
        }

        /* Rose petals */
        .petal {
          position: absolute;
          width: 12px;
          height: 12px;
          background: pink;
          border-radius: 50%;
          animation: fall linear infinite;
          opacity: 0.7;
        }

        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }

        @media(max-width:480px){
          .proposal-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="proposal-page">
        {yes && <Confetti />}
        {yes && <div className="flash"></div>}

        {/* Rose petals explosion */}
        {yes &&
          Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="petal"
              style={{
                left: Math.random() * 100 + "%",
                animationDuration: 4 + Math.random() * 4 + "s",
              }}
            ></div>
          ))}

        <motion.div
          className="proposal-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="proposal-title">
            Will You Be Mine Forever? 💍
          </h2>

          <p className="proposal-message">
            I don’t want just moments with you…  
            I want a lifetime.  
            Every sunrise. Every laugh. Every dream.  
            My heart belongs to you.  
            Will you stay with me forever? ❤️
          </p>

          {!yes && (
            <div className="btn-group">
              <button className="yes-btn" onClick={handleYes}>
                YES ❤️
              </button>

              <motion.button
                className="no-btn"
                animate={{ x: noPosition.x, y: noPosition.y }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
              >
                No 😅
              </motion.button>
            </div>
          )}

          {yes && (
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "white", marginTop: "20px" }}
            >
              You just made my world complete 💖✨
            </motion.h3>
          )}
        </motion.div>

        {/* Romantic Music */}
        <audio ref={audioRef} src="/src/asset/nisho/Unnaivida.mp3" preload="auto" />
      </div>
    </>
  );
}
