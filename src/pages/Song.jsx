import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Song() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  const handleLoveClick = () => {
    setPlay(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <>
      <style>{`
        .song-page {
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

        .song-page::before {
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

        .song-card {
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

        .song-title {
          font-size: clamp(24px,5vw,40px);
          color: #fff;
          margin-bottom: 20px;
        }

        .song-message {
          font-size: clamp(16px,4vw,20px);
          color: #ffd9f5;
          margin-bottom: 30px;
          line-height: 1.7;
        }

        .love-btn {
          padding: 14px 35px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          background: linear-gradient(45deg,#ff4b5c,#ff99ac);
          color: white;
          font-size: 18px;
          animation: glow 1.5s infinite alternate;
          box-shadow: 0 0 20px #ff4b5c;
        }

        @keyframes glow {
          0% { box-shadow: 0 0 15px #ff4b5c; }
          100% { box-shadow: 0 0 30px #ff99ac; }
        }

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

        .heart {
          position: absolute;
          font-size: 20px;
          animation: floatUp linear infinite;
          opacity: 0.7;
        }

        @keyframes floatUp {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-10vh); }
        }

        @media(max-width:480px){
          .song-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="song-page">
        {play && <div className="flash"></div>}

        {/* Floating Hearts when song plays */}
        {play &&
          Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="heart"
              style={{
                left: Math.random() * 100 + "%",
                animationDuration: 5 + Math.random() * 5 + "s",
              }}
            >
              💖
            </div>
          ))}

        <motion.div
          className="song-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="song-title">Our Magical Song 🎵</h2>

          <p className="song-message">
            There’s a magic in your smile…  
            A melody in your voice…  
            Every heartbeat of mine whispers only one thing —  
            I Love You ❤️
          </p>

          {!play && (
            <button className="love-btn" onClick={handleLoveClick}>
              Tap If You Love Me 💖
            </button>
          )}

          {play && (
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "white", marginTop: "20px" }}
            >
              This song will always remind me of you ✨💞
            </motion.h3>
          )}
        </motion.div>

        {/* Romantic Song */}
        <audio
          ref={audioRef}
          src="/src/asset/nisho/Kadhal-Rojave.mp3"
          preload="auto"
        />
      </div>
    </>
  );
}
