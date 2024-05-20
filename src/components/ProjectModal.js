import styled from "styled-components";
import { X } from "react-feather";

function ProjectModal({ children }) {
  return (
    <Overlay>
      <Content>
        <Header>
          <X />
        </Header>
        <ChildWrapper>{children}</ChildWrapper>
      </Content>
    </Overlay>
  );
}

export default ProjectModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  width: 70%;
  background-color: white;
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
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
`;

const ChildWrapper = styled.div``;
