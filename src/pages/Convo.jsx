import { useState } from "react";
import { motion } from "framer-motion";

export default function Convo() {
  const conversations = [
    { sender: "You", text: "I love you ❤️" },
    { sender: "Her", text: "I love you more 💖" },
    { sender: "You", text: "Forever?" },
    { sender: "Her", text: "Forever and always 💍" },
    { sender: "You", text: "Promise me you'll never leave." },
    { sender: "Her", text: "Never. You are my forever person ❤️" },
  ];

  const [step, setStep] = useState(0);

  const nextMessage = () => {
    if (step < conversations.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <style>{`
        .convo-page {
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

        .convo-page::before {
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

        .convo-card {
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

        .convo-title {
          font-size: clamp(22px,5vw,38px);
          color: white;
          margin-bottom: 30px;
        }

        .chat-bubble {
          font-size: clamp(16px,4vw,20px);
          padding: 15px 20px;
          border-radius: 20px;
          margin-bottom: 25px;
          max-width: 100%;
          line-height: 1.6;
        }

        .you {
          background: linear-gradient(45deg,#ff4b5c,#ff99ac);
          color: white;
        }

        .her {
          background: white;
          color: #ff4b5c;
        }

        .next-btn {
          padding: 12px 30px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          background: linear-gradient(45deg,#ff4b5c,#ff99ac);
          color: white;
          font-size: 16px;
          transition: 0.3s;
        }

        .next-btn:hover {
          transform: scale(1.08);
        }

        .heart {
          position: absolute;
          font-size: 18px;
          animation: floatUp linear infinite;
          opacity: 0.6;
        }

        @keyframes floatUp {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-10vh); }
        }

        @media(max-width:480px){
          .convo-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="convo-page">
        {/* Floating hearts */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 6 + Math.random() * 6 + "s",
            }}
          >
            💖
          </div>
        ))}

        <motion.div
          className="convo-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="convo-title">
            Our Beautiful Conversations 💬
          </h2>

          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`chat-bubble ${
              conversations[step].sender === "You"
                ? "you"
                : "her"
            }`}
          >
            <b>{conversations[step].sender}:</b>{" "}
            {conversations[step].text}
          </motion.div>

          {step < conversations.length - 1 && (
            <button className="next-btn" onClick={nextMessage}>
              Next 💕
            </button>
          )}

          {step === conversations.length - 1 && (
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "white", marginTop: "20px" }}
            >
              Every conversation with you is my favorite memory 💖✨
            </motion.h3>
          )}
        </motion.div>
      </div>
    </>
  );
}
