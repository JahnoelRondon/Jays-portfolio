import "./banner.css";

function Banner() {
  return (
    <section className="bannerContainer">
      <div
        style={{
          width: "100%",
          height: "100%",
          /* items */
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#00000032",
        }}
      >
        <h1>Jahnoel Rondon</h1>
        <p className="position">Full Stack Developer</p>
        <p className="badge">Open to work!</p>
      </div>
    </section>
  );
}

export default Banner;
