import { IUser } from "../interfaces/users"

const User = ({id,name,age,email}:IUser) => {
  return (
   <>
   <div className="w-full shadow-md shadow-gray-600 p-3">
        <div className="p-2"><span className="text-gray-500">Name: </span><span className="text-gray-500">{name}</span></div>
        <div className="p-2"><span className="text-gray-500">Age: </span><span className="text-gray-500">{age}</span></div>
        <div className="p-2"><span className="text-gray-500">Email: </span><span className="text-gray-500">{email}</span></div>
   </div>
   </>
  )
}

export default User