import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import TitleUnderline from "./TitleUnderline";

const numOfProject = [1, 2, 3];

function ProjectSection() {
  return (
    <div className="container">
      <ProjectSecWrapper>
        <TitleUnderline title="Completed Projects" />
        <ProjectItemWrapper>
          {numOfProject.map((index) => (
            <ProjectItem key={index} />
          ))}
        </ProjectItemWrapper>
      </ProjectSecWrapper>
    </div>
  );
}

export default ProjectSection;

const ProjectSecWrapper = styled.ul`
  margin-top: 2rem;
`;

const ProjectItemWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`;
