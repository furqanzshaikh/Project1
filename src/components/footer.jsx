import React from 'react'
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube
  } from "react-icons/ai";
const footer = () => {
  return (
 
    <footer>
        <div>
            <h1>
                Tech
            </h1>
            <p>@WebsiteDemo</p>
            
        </div>

        <div>
            <h4>Follow Us</h4>
            <div>
                
                <a href="https://www.youtube.com/"target={'blank'}><AiFillYoutube/> Youtube
                </a>
                
                <a href="https://www.facebook.com/" target={'blank'}> <AiFillFacebook/> Facebook
                </a>
                
                <a href="https://www.instagram.com/" target={'blank'}> <AiFillInstagram/> Instagram
                </a>
            </div>
        </div>
    </footer>
  )
}

export default footer
