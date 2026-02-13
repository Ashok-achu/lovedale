import { motion } from "framer-motion";
import bgImage from "../asset/nisho/n11.jpg"; // IMPORTANT: adjust path correctly

export default function Home() {
  return (
    <div style={styles.hero}>
      {/* Background Image */}
      <img src={bgImage} alt="us" style={styles.bgImage} />

      {/* Soft Dark Overlay (light only for text visibility) */}
      <div style={styles.overlay}></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={styles.content}
      >
        <h1 style={styles.title}>Our Love Universe 💖</h1>

        <h2 style={styles.love}>I LOVE YOU</h2>

        <p style={styles.quote}>
          "Every moment with you feels like magic ✨"
        </p>

        <div style={styles.tags}>
          <span style={styles.tag}>#ForeverUs</span>
          <span style={styles.tag}>#MyQueen</span>
          <span style={styles.tag}>#EndlessLove</span>
          <span style={styles.tag}>#Soulmate</span>
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },

  bgImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: -2,
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.25)", // LIGHT overlay only
    zIndex: -1,
  },

  content: {
    backdropFilter: "blur(8px)",
    background: "rgba(0,0,0,0.35)",
    padding: "40px",
    borderRadius: "25px",
    maxWidth: "90%",
  },

  title: {
    fontSize: "clamp(28px,5vw,50px)",
    marginBottom: "10px",
  },

  love: {
    fontSize: "clamp(40px,8vw,70px)",
    fontWeight: "900",
    background: "linear-gradient(45deg,#ff4b5c,#ff99ac)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
  },

  quote: {
    fontSize: "clamp(16px,3vw,22px)",
    marginBottom: "25px",
  },

  tags: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  },

  tag: {
    padding: "8px 15px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.2)",
    fontSize: "14px",
  },
};
