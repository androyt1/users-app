import React,{FormEvent, useState} from 'react'
import { IUser } from '../interfaces/users'
import { v4 as uuidv4 } from "uuid";
import {useAppDispatch } from '../util/hooks'
import { addUser } from '../redux/users/userSlice';

const NewUser = () => { 
 
    const dispatch=useAppDispatch()
    const[user,setUser]=useState<IUser>({
        id:'',
        name:'',       
        age:0,
        email:''
    })

   
 
    const handleChange=(e:React.FormEvent)=>{
        const{name,value}=e.target as HTMLInputElement
        setUser(prevState => ({
            ...prevState,
            id:uuidv4(),
            [name]: value
        }));
    }  

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault() 
        dispatch(addUser(user))
        setUser({
            name:'',
            age:0,
            email:'',
            id:''
        })     
    }

  
  return (
    <div className='w-full flex justify-center items-start   min-h-[calc(100vh-60px)] px-3'>
        <form onSubmit={handleSubmit} className='w-full md:w-[50%] min-h-[40vh] mt-10 shadow-md shadow-gray-800 p-2'>
            <div className='w-full flex justify-center items-center py-4 px-3 bg-gray-800 text-gray-50'>
                <h4 className='text-xl  font-serif font-semibold'>Add New User</h4>
            </div>
            <div className='w-full grid grid-col-1 md:grid-cols-3 mt-6'>
                <div className='col-span-1'>
                    <label htmlFor="Name">Name</label>
                </div>
                <div className='col-span-2'>
                    <input type="text" name='name' id='name' value={user.name} className='w-full bg-gray-200 px-1' onChange={handleChange} />
                </div>
            </div>
            <div className='w-full grid grid-col-1 md:grid-cols-3 mt-4'>
                <div className='col-span-1'>
                    <label htmlFor="Name">Age</label>
                </div>
                <div className='col-span-2'>
                    <input type="text" name='age' id='age' className='w-full bg-gray-200 px-1' value={user.age} onChange={handleChange} />
                </div>
            </div>

            <div className='w-full grid grid-col-1 md:grid-cols-3 mt-4'>
                <div className='col-span-1'>
                    <label htmlFor="Name">Email</label>
                </div>
                <div className='col-span-2'>
                    <input type="email" name='email' id='email' className='w-full bg-gray-200 px-1' value={user.email} onChange={handleChange} />
                </div>
            </div>

            <div className='w-full grid grid-col-1 md:grid-cols-3 my-5'>
                <div className='col-span-1'>
                  
                </div>
                <div className='col-span-2'>
                    <button type='submit' className='py-2 w-full bg-gray-800 text-gray-50'>Add User</button>
                </div>
            </div>
        </form>
       
    </div>
  ) 
}

export default NewUser