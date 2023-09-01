import React from 'react';
import LoginComp from './components/LoginComp';
import UpdatePage from './components/UpdatePage';
import getCurrentUser from '../actions/getCurrentUser';

const page = async() => {

  const currentUser = await getCurrentUser();

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
        <UpdatePage currentUser={currentUser} />
      </div>
    </div>
  )
}

export default page

export const metadata = {
  title: 'Login',
  description: 'Login Page for Portfolio App.'
}
