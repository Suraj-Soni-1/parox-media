// src/components/Hero.jsx
import React, { useEffect, useState } from "react";

const words = ["Noticed", "Trusted", "Paid"];
const imageCount = 16;
const logos = Array.from({ length: imageCount }, (_, i) => `/${i + 1}.png`);

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-gray-900 text-white flex flex-col items-center justify-center overflow-hidden">
      <style>{`
        :root {
          --logo-width: 360px;
          --logo-height: 180px;
          --gap: 0px; /* no gap for continuous look */
          --scroll-duration: 30s;
          --fade-width: 100px;
        }
        @media (max-width: 768px) {
          :root {
            --logo-width: 240px;
            --logo-height: 120px;
            --scroll-duration: 20s;
            --fade-width: 60px;
          }
        }

        /* Logo Strip */
        .logo-strip {
          position: relative;
          width: 100%;
          height: var(--logo-height);
          overflow: hidden;
          margin: 2rem auto;
        }
        .logo-track {
          display: flex;
          align-items: center;
          gap: var(--gap);
          animation: scroll-left var(--scroll-duration) linear infinite;
        }
        .logo-item img {
          width: var(--logo-width);
          height: var(--logo-height);
          object-fit: contain;
        }

        /* Fade masks */
        .fade-left,
        .fade-right {
          position: absolute;
          top: 0;
          width: var(--fade-width);
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }
        .fade-left { left: 0; background: linear-gradient(to right, #0f1720, transparent); }
        .fade-right { right: 0; background: linear-gradient(to left, #0f1720, transparent); }

        /* Animation */
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Hero Content */
        .hero-content {
          position: relative;
          z-index: 20;
          text-align: center;
          max-width: 960px;
          margin: auto;
          padding: 4rem 1rem;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
        }
        @media(min-width:768px){ .hero-title { font-size: 4.5rem; } }
        .hero-sub { margin-top: 1rem; color: #cbd5e1; font-size: 1.2rem; }
        .hero-buttons { margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; }
        .btn-primary, .btn-secondary {
          padding: 0.85rem 1.6rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
        }
        .btn-primary { background: white; color: #0f1720; }
        .btn-secondary { border: 2px solid #cbd5e1; color: #cbd5e1; }
      `}</style>

      {/* Logo Strip */}
      <div className="logo-strip">
        <div className="fade-left" />
        <div className="fade-right" />
        <div className="logo-track">
          {[...logos, ...logos].map((src, idx) => (
            <div key={idx} className="logo-item">
              <img src={src} alt={`logo-${idx % imageCount}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Strategic Content That{" "}
          <span style={{ display: "block" }}>
            Gets You{" "}
            <span style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", color: "transparent" }}>
              {words[i]}
            </span>
          </span>
        </h1>
        <p className="hero-sub">
          Daily thought leadership, strategic storytelling, and consistent output so your brand doesn’t go unnoticed.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Book a Call Now</a>
          <a href="#cases" className="btn-secondary">View Case Studies</a>
        </div>
      </div>
    </section>
  );
}
