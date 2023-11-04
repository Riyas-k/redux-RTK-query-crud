import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users",{next:{revalidate:10}});
  const users : User[] = await data.json();
  console.log(users);
  return (
    <>
    <h1>Users</h1>
    <ul>
        {users.map((user)=>(
           <>
            <li>{user.id}</li>
            <li key={user.id}>{user.name}</li>
           </>
        ))}
    </ul>
    </>
  );
};

export default UsersPage;
