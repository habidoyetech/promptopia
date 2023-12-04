"use client"

import React, {useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/profile';

const MyProfile = () => {

    const {data: session} = useSession

    useEffect(() => {
        const fetchPost = async () => {
          const response= await fetch(`/api/users/${session?.user.id}/post`);
          const data = await response.json();
    
          setPosts(data);
        }
    
        fetchPost()
      }, [])

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }
  return (
    <Profile name="My" desc="Welcome to your personalized profile page" data={[]} handleEdit={handleEdit} handleDelete={handleDelete} />
  )
}

export default MyProfile
