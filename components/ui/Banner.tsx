import React from "react";

interface BannerProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  speed?: number; // seconds for one full scroll
}

const Banner: React.FC<BannerProps> = ({
  text,
  backgroundColor = "#4f46e5",
  color = "#fff",
  speed = 20,
}) => (
  <div
    style={{
      backgroundColor,
      color,
      padding: "1.5rem",
      fontWeight: "bold",
      fontSize: "1.5rem",
      overflow: "hidden",
      position: "relative",
      height: "5rem",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        display: "flex",
        width: "max-content",
        whiteSpace: "nowrap",
        position: "absolute",
        animation: `marquee ${speed}s linear infinite`,
        alignItems: "center",
      }}
      className="banner-marquee"
    >
      <span style={{ marginRight: "3rem" }}>{text}</span>
      <span>{text}</span>
    </div>
    <style>
      {`
        @keyframes marquee {
          0% {
            transform: translateX(40%);
          }
          100% {
            transform: translateX(-110%);
          }
        }
      `}
    </style>
  </div>
);

export default Banner;