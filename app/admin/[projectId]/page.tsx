
import getProject from '@/app/actions/getProject';
import { Button } from '@/components/exportLayout';
import { useParams } from 'next/navigation';
import React from 'react'
import EditForm from './components/EditForm';


const Updatepage = async({
    params
}:{
    params : { projectId: string}
}) => {

    const project = await getProject(params.projectId);

  return (
    <div
        className=""
    >
        <div className="
        ">
            <EditForm project={project} />
        </div>
    </div>
  )
}

export default Updatepage;