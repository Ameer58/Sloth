import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Generate fake chart data, ensuring final price is higher
const fakeChartData = Array.from({ length: 10 }, (_, i) => ({
  name: `Day ${i + 1}`,
  price: Math.floor(Math.random() * 50) + 50, // Generate random prices
}));

// Ensure last price is higher than the previous one
fakeChartData[fakeChartData.length - 1].price =
  fakeChartData[fakeChartData.length - 2].price + Math.floor(Math.random() * 10) + 5;

export default function SlothLandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000); // Slow loading effect
  }, []);

  return (
    <div className="landing-page-container">
      {loading ? (
        <div className="loading-animation">
          <motion.div
            className="flex flex-col items-center text-[20rem]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
          >
            🦥 Loading... Taking it slow...
          </motion.div>
        </div>
      ) : (
        <div className="content">
          {/* Title with jungle-like theme */}
          <div className="title-container">
            <h1 className="sloth-title">
              $SLOTH
              <GiCash className="money-icon" />
            </h1>
          </div>

          {/* Market Moves Chart with Jungle Theme */}
          <div className="market-moves">
            <h2 className="jungle-text">📈 Market Moves</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={fakeChartData}>
                <XAxis dataKey="name" stroke="#4B6E28" />
                <YAxis stroke="#4B6E28" />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8B4513" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Contract Address Section with Jungle Style */}
          <div className="contract-address">
            <strong className="jungle-text">Contract Address:</strong>
            <span className="coming-soon jungle-text">Coming Soon</span>
          </div>

          {/* Action Buttons */}
          <div className="buttons">
            <button className="btn-twitter jungle-btn">
              <a href="https://x.com/SLOTH_SOLCoin" target="_blank">
                <FaTwitter className="mr-2" /> Twitter
              </a>
            </button>
            <button className="btn-telegram jungle-btn">
              <a href="https://t.me/coinSlothh" target="_blank">
                <FaTelegram className="mr-2" /> Telegram
              </a>
            </button>
            <button className="btn-buy jungle-btn">
              <a href="https://dexscreener.com/YOUR_TOKEN" target="_blank">
                🚀 Buy $SLOTH
              </a>
            </button>
          </div>

          {/* Fun Section */}
          <div className="content">
            <p className="jungle-text">🔥 No taxes, no rug, just vibes.</p>
            <p className="jungle-text">💤 Slow and steady wins the crypto race.</p>
            <p className="jungle-text">😂 Why did the sloth invest in crypto? … He had all the time in the world.</p>
          </div>
        </div>
      )}
    </div>
  );
}
