import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Header() {
    const navigate = useNavigate();
    
    return (
        <div className="flex h-16 w-screen items-center my-6 font-sans">  
        <div className="flex w-1/4 mx-4 justify-start">
            <IoIosArrowBack className="h-10 w-10 cursor-pointer" fill="#0b3c5d" onClick={() => navigate(-1)}/> 
        </div>  
            <div className="flex w-2/4 mx-8 justify-center">
                <p className ="text-4xl font-semibold tracking-widest"> U EAT </p> 
            </div>
            <div className="flex w-1/4 mx-4 justify-end">
                <BsPersonCircle onClick={()=>navigate("/Perfil")} className="h-12 w-12 cursor-pointer" fill="#0b3c5d"/> 
        
            </div>  
        </div>
    )
}   