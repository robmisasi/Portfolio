import { useRef, useEffect } from "react";
import { mount } from "about/AboutApp";

const AboutApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, {});
  });

  return <div ref={ref} />;
};

export default AboutApp;
