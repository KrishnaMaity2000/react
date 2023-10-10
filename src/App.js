
import React, { useState } from 'react';
import AddUser from './components/user/AddUser';
import UsersList from './components/user/UserList';


function App() {
  const [userList,setUserList]=useState([]);
     
  const AddUserHandler =(uName,uAge)=>{
      setUserList((prevUserList)=>{
        return [
          ...prevUserList,
          { name: uName, age: uAge, id: Math.random().toString() },
        ];
      })
  }
  return (
    <div>
      <AddUser  onAddUser={AddUserHandler}/>
      <UsersList users = {userList}/>
    </div>
  );
}

export default App;
