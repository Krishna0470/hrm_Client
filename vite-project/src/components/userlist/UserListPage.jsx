import React, { useEffect, useState } from "react";
import './userlist.css';

function UserlistPage() {
  const [data, setData] = useState([]);

  useEffect(() => {


  const getData = async() =>  {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4000/getData', {
        method: "GET",
        headers: {
          "authorization": `Bearer ${token}`
        }
      });


      const parsedData = await response.json();
      setData(parsedData.data);
      console.log("parsedData:",parsedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

   getData();
   
}, []);


return (
    <>
    <div className="bg12">
     <div className="table1">

<h2 className="list">User List</h2>

<div class="table-responsive">
<table class="table user-list" >
  <thead>
    <tr>
      <th>User</th>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Password</th>
      <th></th>
    </tr>
  </thead>
  <tbody id="content" >
    {data && data .map((data) => (
      <tr key={data._id} >
        <td><img className="avatar1" src="../../../public/landing/avatar1.png" alt="" /></td>
        <td>{data._id}</td>
        <td><input type="text" name="firstname" value={data.firstname} disabled /></td>
        <td><input type="text" name="lastname" value={data.lastname} disabled /></td>
        <td><input type="email" name="email" value={data.email} disabled /></td>
        <td><input type="password" name="password" value={data.password} disabled /></td>
        <td><button onClick={() => handleEdit(data._id)} ><span class="material-symbols-outlined">visibility</span></button></td>
      </tr>
    ))}
  </tbody>
</table>
</div>

</div>
</div>
    </>
)
}

export default UserlistPage;

