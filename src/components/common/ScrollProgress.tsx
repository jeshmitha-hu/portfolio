import { useEffect, useState } from "react";

const ScrollProgress = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setProgress((scrollTop / height) * 100);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`
      }}
    />

  );

};

export default ScrollProgress;