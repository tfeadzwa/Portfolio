{
  /* <ReactTyped
        strings={[
          "I'm a Full Stack Web Developer",
          "I'm a Software Developer ",
          "I'm a Mobile Developer",
        ]}
        typeSpeed={100}
        loop
        backSpeed={20}
        cursorChar="_"
        showCursor={true}
        backDelay={2000}
        style={{ fontSize: "2em", color: "blue" }}
      /> */
}

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setcurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setcurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setCurrentIndex("");
      setCurrentIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, infinite]);

  return <span>{currentText}</span>;
};

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  infinite: PropTypes.bool.isRequired,
};

export default Typewriter;
