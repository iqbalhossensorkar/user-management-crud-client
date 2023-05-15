
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import UserTable from './Components/UserTable'
import { useState } from 'react';

function App() {
  const loadedUser = useLoaderData();
  const [users, setUser] = useState(loadedUser)

  return (
    <div className='container mx-auto px-12'>
      <Link to="/addUser"><button className='text-blue-600 shadow-lg px-5 py-3 my-10'>New User</button></Link>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>@Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            users.map((user, index) => <UserTable key={user._id} user={user} index={index} users={users} setUser={setUser}></UserTable>)
          }
        </table>
      </div>
    </div>
  )
}

export default App
