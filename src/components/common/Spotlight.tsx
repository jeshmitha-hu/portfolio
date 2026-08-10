import { useEffect, useState } from "react";

const Spotlight = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      });

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (

    <div
      className="spotlight"
      style={{
        left: position.x,
        top: position.y
      }}
    />

  );

};

export default Spotlight;