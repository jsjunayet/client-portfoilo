import ProjectDetails from "@/Component/project-details/ProjectDetails";

const page = ({params}) => {
    const decodedProjectDetails = decodeURIComponent(params.projectDetails);
    return (
        <div>
           <ProjectDetails sigleProject={decodedProjectDetails}/>
        </div>
    );
};

export default page;