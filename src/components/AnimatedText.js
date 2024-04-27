import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import { useInView } from "react-intersection-observer";

function AnimatedText() {
  const fullStackArray = "Full-Stack".split("");
  const reactArray = "React".split("");
  const backEndArray = "Back-End".split("");
  const [items, setItems] = useState(fullStackArray);
  const [count, setCount] = useState(0);
  // const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (count === 0) {
        setItems(reactArray);
        setCount((prevCount) => prevCount + 1);
      } else if (count === 1) {
        setItems(backEndArray);
        setCount((prevCount) => prevCount + 1);
      } else if (count === 2) {
        setItems(fullStackArray);
        setCount(0);
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [count, fullStackArray, backEndArray, reactArray]);

  return (
    <Wrapper>
      {items.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </Wrapper>
  );
}

export default AnimatedText;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-50px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
  25% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
  75% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
  100% { opacity: 0; transform: translateY(-50px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
`;

const Wrapper = styled.span`
  display: inline-block;

  span {
    opacity: 0;
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  span: nth-child(1) {
    animation-delay: 0.1s;
  }
  span: nth-child(2) {
    animation-delay: 0.2s;
  }
  span: nth-child(3) {
    animation-delay: 0.3s;
  }
  span: nth-child(4) {
    animation-delay: 0.4s;
  }
  span: nth-child(5) {
    animation-delay: 0.5s;
  }
  span: nth-child(6) {
    animation-delay: 0.6s;
  }
  span: nth-child(7) {
    animation-delay: 0.7s;
  }
  span: nth-child(8) {
    animation-delay: 0.8s;
  }
  span: nth-child(9) {
    animation-delay: 0.9s;
  }
  span: nth-child(10) {
    animation-delay: 1s;
  }
`;
