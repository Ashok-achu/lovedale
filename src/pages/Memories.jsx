import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../asset/nisho/n2.jpg";
import img2 from "../asset/nisho/n3.jpg";
import img3 from "../asset/nisho/n4.jpg";
import img4 from "../asset/nisho/n5.jpg";
import img5 from "../asset/nisho/n6.jpg";
import img6 from "../asset/nisho/n7.jpg";
import img7 from "../asset/nisho/n8.jpg";
import img8 from "../asset/nisho/B5C5B58B-9D46-4479-B2D6-B35E2D8FFFE6.jpeg";
import img9 from "../asset/nisho/IMG_0492.jpeg";
import img10 from "../asset/nisho/IMG_0555.jpeg";
import img11 from "../asset/nisho/IMG_0556.jpeg";
import img12 from "../asset/nisho/IMG_0557.jpeg";
import img13 from "../asset/nisho/IMG_0584.jpeg";

import img14 from "../asset/nisho/IMG_0591.jpeg";
import img15 from "../asset/nisho/IMG_0592.jpeg";
import img16 from "../asset/nisho/IMG_0685.jpeg";
import img17 from "../asset/nisho/IMG_1031.jpeg";
import img18 from "../asset/nisho/IMG_1032.jpeg";
import img19 from "../asset/nisho/IMG_1033.jpeg";
import img20 from "../asset/nisho/IMG_1034.jpeg";
import img21 from "../asset/nisho/IMG_1035.jpeg";
import img22 from "../asset/nisho/IMG_1036.jpeg";
import img23 from "../asset/nisho/IMG_1037.jpeg";
import img24 from "../asset/nisho/IMG_1039.jpeg";
import img25 from "../asset/nisho/IMG_1041 (1).jpeg";
import img26 from "../asset/nisho/IMG_1042 (2).jpeg";
import img27 from "../asset/nisho/IMG_1043.jpeg";


export default function Memories() {
  const images = [
  { src: img1, caption: "Our First Smile Together" },
  { src: img2, caption: "That Day I Fell For You" },
  { src: img3, caption: "You And Me Forever" },
  { src: img4, caption: "My Heart Is Yours" },
  { src: img5, caption: "Laughing With My Queen" },
  { src: img6, caption: "Our Little Love World" },
  { src: img7, caption: "Every Moment Is Magic" },

  { src: img8, caption: "Captured Happiness" },
  { src: img9, caption: "One Of My Favourite Days" },
  { src: img10, caption: "Smiling With My Whole Heart" },
  { src: img11, caption: "Your Smile Is My Peace" },
  { src: img12, caption: "Memories That Feel Like Magic" },
  { src: img13, caption: "You Make Everything Beautiful" },

  { src: img14, caption: "Just Us" },
  { src: img15, caption: "Laughing Forever Together" },
  { src: img16, caption: "Holding On To You Always" },
  { src: img17, caption: "Every Picture Has A Story" },
  { src: img18, caption: "Moments I Will Never Forget" },
  { src: img19, caption: "My Favorite Person" },
  { src: img20, caption: "Happiness Looks Like You" },
  { src: img21, caption: "Love In Every Frame" },
  { src: img22, caption: "You And Me Against The World" },
  { src: img23, caption: "Pure Love Energy" },
  { src: img24, caption: "Forever Starts With You" },
  { src: img25, caption: "Every Day With You Is Special" },
  { src: img26, caption: "Moments That Mean Everything" },
  { src: img27, caption: "My Always And Forever" },
];


  const [selected, setSelected] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (selected && audioRef.current) {
      audioRef.current.play();
    }
  }, [selected]);

  return (
    <>
      <style>{`
        .love-page {
          min-height: 100vh;
          padding: 60px 30px;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4, #ffdde1);
          overflow: hidden;
          position: relative;
        }

        /* Floating Hearts */
        .heart {
          position: absolute;
          font-size: 20px;
          animation: floatUp linear infinite;
          opacity: 0.7;
        }

        /* Rose Petals */
        .petal {
          position: absolute;
          width: 15px;
          height: 15px;
          background: pink;
          border-radius: 50%;
          animation: fall linear infinite;
          opacity: 0.6;
        }

        @keyframes floatUp {
          0% { transform: translateY(100vh) scale(0.5); }
          100% { transform: translateY(-10vh) scale(1); }
        }

        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }

        .love-heading {
          text-align: center;
          font-size: clamp(28px,4vw,45px);
          margin-bottom: 50px;
          color: white;
        }

        .love-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
          gap: 30px;
        }

        .love-card {
          background: white;
          padding: 15px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
          cursor: pointer;
          transition: 0.4s;
        }

        .love-card img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 15px;
        }

        .love-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .love-modal-content img {
          max-height: 70vh;
          border-radius: 20px;
          box-shadow: 0 0 40px #ff4b5c;
        }
      `}</style>

      <div className="love-page">
        {/* Floating Hearts */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 8 + Math.random() * 10 + "s",
            }}
          >
            💖
          </div>
        ))}

        {/* Rose Petals */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="petal"
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 6 + Math.random() * 6 + "s",
            }}
          ></div>
        ))}

        <h2 className="love-heading">Our Love Memories 💞</h2>

        <div className="love-grid">
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="love-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(item)}
            >
              <img src={item.src} alt="" />
              <p>{item.caption}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="love-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="love-modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                <img src={selected.src} alt="" />
                <h3 style={{ color: "white", marginTop: "15px" }}>
                  {selected.caption}
                </h3>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Romantic Background Music */}
        <audio
          ref={audioRef}
          src="/src/asset/nisho/Un-Vizhigalil.mp3"
          preload="auto"
        />
      </div>
    </>
  );
}
