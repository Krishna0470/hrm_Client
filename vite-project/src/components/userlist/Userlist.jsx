import React,{useState} from "react";
import UserlistNav from "./UserListNav";
import UserlistPage from "./UserListPage";



function Userlist(){
 

    return(
        <>
        <UserlistNav />
        <UserlistPage/>
        </>
    )
}

export default Userlist;