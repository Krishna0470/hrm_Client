import React, { useEffect, useState } from "react";
import './admin.css';
import { Link } from "react-router-dom";

function AdminPage() {
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
      <div className="bg_img2">
        <div className="container1">
          <Link to={'/'}> <div className="card">
            <h3 className="title">Home</h3>
            <img className="admin_img" src="../../../public/landing/bg1.jpg" alt="" />
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
          </div></Link>
          <Link to={'/Adminlogin'}><div className="card">
            <h3 className="title">AdminLogin</h3>
            <img className="admin_img" src="../../../public/landing/AdminLogin.png" alt="" />
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
          </div></Link>
          <Link to={'/Adduser'}><div className="card">
            <h3 className="title">Add User</h3>
            <img className="admin_img" src="../../../public/landing/Adduser.png" alt="" />
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
          </div></Link>
        </div>

        <div className="table1">

          <h2 className="list">User List</h2>

          <table>
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
                  <td><button onClick={() => handleEdit(data._id)} ><span className="material-symbols-outlined">edit_document</span></button> <button onClick={() => handleSave(data._id)} ><span className="material-symbols-outlined">save</span></button> </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </>
  );
}

export default AdminPage;
