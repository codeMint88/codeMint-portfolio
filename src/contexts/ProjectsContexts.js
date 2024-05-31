import { createContext, useContext, useEffect, useReducer } from "react";

const ProjectsContext = createContext();

const initialState = {
  isLoading: false,
  projects: [],
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "projects/loaded":
      return { ...state, isLoading: false, projects: action.payload };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function ProjectProvider({ children }) {
  const [{ isLoading, projects }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getProjects() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${process.env.PUBLIC_URL}/projects.json`);
        const data = await res.json();

        // console.log(data);
        // simulate network delay
        setTimeout(() => {
          dispatch({ type: "projects/loaded", payload: data.projects });
        }, 500);
      } catch {
        dispatch({
          type: "rejected",
          payload:
            "There was an error loading the data, please refresh this page",
        });
      }
    }
    getProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ isLoading, projects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

function useProject() {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("Project Context was used outside the project Provider");
  }
  return context;
}

export { ProjectProvider, useProject };
