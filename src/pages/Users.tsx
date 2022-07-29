import React,{useEffect,useCallback} from 'react'
import { useAppSelector } from '../util/hooks'
import { useState } from 'react'
import {IUser} from '../interfaces/users'
import User from '../components/User'

const Users = () => {

    const users=useAppSelector(state=>state.users.users)
    const[dUsers,setDusers]=useState<IUser[]>(users)
    const[search,setSearch]=useState<string>('')
    const[result,setResult]=useState<number>(0)
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }  
    const handleSearch=useCallback((item:string)=>{
        let data=users.filter(user=>user.name.toLowerCase().includes(item.toLowerCase()))
        setDusers(data) 
        setResult(data.length)
    },[users])

    useEffect(()=>{  
        handleSearch(search)
    },[search,handleSearch]) 
  
  return (
    <>
    <div className='w-full flex justify-center items-center p-3'>
        <h3 className='text-2xl font-semibold'>Users</h3> 
    </div>
    <div className='w-full mb-8 flex justify-center items-center flex-col px-3'>
        <input type="search" className='w-full md:w-[50%] bg-slate-200 p-1' placeholder='Search by name' name='search' value={search} onChange={handleChange} />
        {search && result > 0 && <span>Found {result} user(s) </span>}
    </div>
    {users.length < 1 && <div className='w-full flex justify-center items-center p-3 '><h4 className='text-xl font-semibold text-gray-800'>No Users Found</h4></div>}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 px-3'>
        {dUsers && dUsers.map(user=>(
        <User key={user.id} {...user} />     
        ))}
    </div>
    </>
  )
}

export default Users