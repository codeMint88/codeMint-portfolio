import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";

function RippleButton({ children, bgColour, colour }) {
  const rippleBtn = useRef(null);

  useEffect(() => {
    const button = rippleBtn.current;

    const handleClick = (e) => {
      // This gives the distance of where you clicked on the button from the top and left of the window
      const x = e.clientX;
      const y = e.clientY;
      // console.log(x, y);

      // This gives the location of the button in the window
      const btnCoordinate = button.getBoundingClientRect();
      const buttonTop = btnCoordinate.top;
      const buttonLeft = btnCoordinate.left;

      // console.log(btnCoordinate);
      // console.log(buttonTop, buttonLeft);

      const innerTop = y - buttonTop;
      const innerLeft = x - buttonLeft;

      const circle = document.createElement("span");
      circle.classList.add("circle");
      circle.style.top = innerTop + "px";
      circle.style.left = innerLeft + "px";

      button.appendChild(circle);

      setTimeout(() => circle.remove(), 500);
    };

    button.addEventListener("click", handleClick);

    // Cleanup function to remove event listener
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <ButtonWrapper>
      <Button ref={rippleBtn} bgColour={bgColour} colour={colour}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="1.6rem"
          height="1.6rem"
        >
          <path
            fill="#F57C00"
            d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"
          />
          <path fill="#FFF9C4" d="M35 13A3 3 0 1 0 35 19A3 3 0 1 0 35 13Z" />
          <path fill="#942A09" d="M20 16L9 32 31 32z" />
          <path fill="#BF360C" d="M31 22L23 32 39 32z" />
        </svg>

        {children}
      </Button>
    </ButtonWrapper>
  );
}

export default RippleButton;

const scale = keyframes`
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0%;

  @media (width <= 600px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

const Button = styled.button`
  position: relative;
  border: none;
  background-color: ${(p) => p.bgColour};
  padding: 0.5rem 1rem;
  font-weight: 400;
  font-size: clamp(0.8rem, 0.9vw + 0.75rem, 1rem);
  border-radius: 0 0 0.4rem 0.4rem;
  cursor: pointer;
  letter-spacing: 0.025rem;
  color: var(${(p) => p.colour});
  overflow: hidden;
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
    vartical-align: middle;
    margin-bottom: 0.2rem;
  }

  &:focus-visible {
    outline: none;
  }

  &:active {
    scale: 0.98;
  }

  .circle {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ${scale} 0.5s ease-out;
  }

  @media (width <= 600px) {
    padding: 0.39rem 0.8rem;
  }
`;
