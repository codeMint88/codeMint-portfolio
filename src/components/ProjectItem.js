import { useState } from "react";
import styled from "styled-components";
// import Figure from "./Figure";
import RippleButton from "./RippleButton";
import StackItem from "./StackItem";
import ReactModal from "react-modal";
import { X } from "react-feather";
import VissuallyHidden from "./VissuallyHidden";

const overlay = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(3px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const content = {
  inset: "revert",
  position: "relative",
  width: "70%",
  backgroundColor: "white",
  padding: "6rem",
  borderRadius: "5px",
  boxShadow: "0 3rem 5rem rgba(0, 0, 0, 0.3)",
};

function ProjectItem({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <ItemWrapper>
      <RippleButton
        openModal={openModal}
        bgColour=""
        colour="--project1-ripplebtn-col"
      >
        Preview
      </RippleButton>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Preview Modal"
        style={{
          overlay,
          content,
        }}
      >
        <Header>
          <X onClick={closeModal} />
          <VissuallyHidden title="Close Modal" />
        </Header>
        <ChildWrapper>{children}</ChildWrapper>
      </ReactModal>

      <ProjectDetailsWrapper>
        <Name>Hackathon Project</Name>
        <Description>
          Small acts of compassion have the power to transform lives in profound
          ways. A kind word, a helping hand, or a simple gesture of empathy can
          uplift spirits, restore hope, and instill a sense of belonging.
        </Description>
        <Hr />
        <Stacks>
          <StackItem
            stackImgSrc={`${process.env.PUBLIC_URL}/images/htmlIcon.png`}
          >
            <p>html</p>
          </StackItem>

          <StackItem
            stackImgSrc={`${process.env.PUBLIC_URL}/images/cssIcon.png`}
          >
            <p>css</p>
          </StackItem>

          <StackItem
            stackImgSrc={`${process.env.PUBLIC_URL}/images/htmlIcon.png`}
          >
            <p>html</p>
          </StackItem>

          <StackItem
            stackImgSrc={`${process.env.PUBLIC_URL}/images/cssIcon.png`}
          >
            <p>css</p>
          </StackItem>

          <StackItem
            stackImgSrc={`${process.env.PUBLIC_URL}/images/jsIcon.png`}
          >
            <p>JavaScript</p>
          </StackItem>

          <StackItem
            stackImgSrc={`${process.env.PUBLIC_URL}/images/cssIcon.png`}
          >
            <p>css</p>
          </StackItem>

          <StackItem
            stackImgSrc={`${process.env.PUBLIC_URL}/images/jsIcon.png`}
          >
            <p>JavaScript</p>
          </StackItem>
        </Stacks>
      </ProjectDetailsWrapper>
    </ItemWrapper>
  );
}

export default ProjectItem;

const ItemWrapper = styled.li`
  position: relative;
  padding: 0 2rem 1rem;
  overflow: hidden;
  border-radius: 0.5rem 0 0.5rem 0.5rem;
  text-align: center;
  flex: 1 1 470px;
  max-width: 500px;
  background-color: var(--project1-bg);

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  p {
    font-size: clamp(0.7rem, 1vw + 0.5rem, 1rem);
  }

  @media (width <= 600px) {
    border-top-right-radius: 0.5rem;
  }
`;

const ProjectDetailsWrapper = styled.div``;

const Name = styled.h3`
  margin: 0.8rem 0;
  color: #375375;

  @media (width <= 600px) {
    margin-top: 3.5rem;
  }
`;

const Description = styled.p``;

const Hr = styled.hr`
  margin: 1.3rem 0;
  border: 1px solid var(--project1-hr);
`;

const Stacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1rem;
`;

const Header = styled.button`
  position: absolute;
  top: 2rem;
  right: 3rem;
  background: var(--gradient-primary);
  width: fit-content;
  display: grid;
  place-content: center;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;

  @media (width <= 600px) {
    top: 1rem;
    right: 1rem;
  }
`;

const ChildWrapper = styled.div``;
