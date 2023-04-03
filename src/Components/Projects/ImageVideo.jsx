import { useState } from "react";

export default function ImageVideo({ video, defaultImage, title }) {
  const [hovered, isHovered] = useState(false);
  return (
    <div
      onMouseEnter={(e) => isHovered(true)}
      onMouseLeave={(e) => isHovered(false)}
    >
      {/* slight lag and delay for video to start */}
      {/* {hovered ? <video src={video} autoPlay loop muted playsInline/> : <img src={defaultImage} alt={title}/>} */}
      {/* Plays video faster and retains where the video left off */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        style={{
          //   display: hovered ? "block" : "none",
          opacity: hovered ? "1" : "0",
          position: hovered ? "relative" : "fixed",
        }}
      />
      <img
        src={defaultImage}
        alt={title}
        style={{
          //   display: !hovered ? "block" : "none",
          opacity: !hovered ? "1" : "0",
          position: !hovered ? "relative" : "fixed",
        }}
      />
    </div>
  );
}
