import React from 'react';
import LoginComp from './components/LoginComp';
import UpdatePage from './components/UpdatePage';
import getCurrentUser from '../actions/getCurrentUser';
import getProjects from '../actions/getProjects';
import EditProjectModal from '@/components/modal/EditProjectModal';

const page = async() => {

  const currentUser = await getCurrentUser();
  const projects = await getProjects();

  return (
    <div className="
      backgroundColor
      w-full
      flex
      flex-col
      py-6
      items-center
      justify-center
    ">
      <LoginComp />
      
      <div
        className='
          w-full
          mt-[5rem]
        '
      >
        <UpdatePage projects={projects} currentUser={currentUser} />
      </div>
      <EditProjectModal />
    </div>
  )
}

export default page

export const metadata = {
  title: 'Admin',
  description: 'Admin Page for Portfolio App.'
}
