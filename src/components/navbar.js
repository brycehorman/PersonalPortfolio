import React from 'react';
import {  Link } from "react-router-dom";
import "../style/Navbar.css"


export default function Navbar(){
  return (
    <ul class="bar">
        <li class="item">
            <Link to="/">Home</Link>
        </li>
        <li class="item">
            <Link to="/AllPosts">Blog Posts</Link>
        </li>
        <li class="item">
            <Link to="/About">About</Link>
        </li>
        <li class="item">
            <Link to="/Contact">Contact</Link>
        </li>
    </ul>
    );
}
