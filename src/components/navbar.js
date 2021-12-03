import React from 'react';
import {  Link } from "react-router-dom";
import "./Navbar.css"


export default function Navbar(){
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/AllPosts">Blog Posts</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/OnePost">Contact</Link>
        </li>
    </ul>
    );
}
