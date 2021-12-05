import { useEffect, useRef } from "react";


const containerStyle = {
  backgroundColor: "rgba(150, 150, 150, 0.6)",
  height: "6px",
  width: "100%",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "9999999"
}

const barStyle = {
  backgroundColor: "#34568B",
  position: "fixed",
  top: "0",
  left: "0",
  height: "6px",
  width: "0%"
}
const ProgressBar = () => {

  const bar = useRef(null);

  useEffect(() => {
    // window.onscroll = function () {
    //   progressBarScroll();
    // };

    window.addEventListener("scroll", progressBarScroll);

    return () => {
      window.removeEventListener("scroll", progressBarScroll);
    }

  }, [])

  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    bar.current.style.width = scrolled + "%";
  }

  return (
    <div className="progressbar-container" style={containerStyle}>
      <div className="progressbar" ref={bar} style={barStyle}></div>
    </div>
  );
};

export default ProgressBar;
