import getProject from "../actions/getProject"

const useProject = async(projectId: string) => {
    const project = await getProject(projectId);
    
}

export default useProject;