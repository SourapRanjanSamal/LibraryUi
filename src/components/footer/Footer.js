import React from 'react'
import {AiFillCodepenCircle, AiFillLinkedin, AiFillPhone} from "react-icons/ai"
import {FaLocationArrow} from "react-icons/fa"
import {AiFillMail} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {FaDev} from "react-icons/fa";
import { Link } from 'react-router-dom'
import "./footer.css";

const Footer = () => {
  return (
    <footer>
    <div className="detailsSection">
       <div className="companySummary">
            <div>
             <h2>DIVERSE READS</h2>
             <p>Thank you for visiting Diverse Reads Here You Can Find the Best Books Around The World.</p>
            </div>
       </div>
       <div className="quickLinks">
           <div>
              <h2>Quick Links</h2>
              <ul>
                 <li><Link to="/"><i></i>Home</Link></li>
                 <li><Link to="/about"><i></i>About</Link></li>
                 <li><Link to="/contact"><i></i>Contact</Link></li>
                 <li><Link to="/library"><i></i>Library</Link></li>
              </ul> 
           </div>
       </div>
       <div className="contactDetails">
            <div>
               <h2>Contact Info</h2>
               <span><AiFillPhone/>91+XXXXXXXXXX</span>
               <span style={{"userSelect":"text"}}><AiFillMail/>samalsourap@gmail.com</span>
               <span><FaLocationArrow/>Berhampur Odisha -140401</span>
               <span className="socialLinks">
                <ul>
                       <li><Link to="https://www.linkedin.com/in/sourap-ranjan-samal-89749a264/" target='_blank' className="eachSocialLink"><AiFillLinkedin/></Link></li>
                       <li><Link to="https://github.com/SourapRanjanSamal" target='_blank' className="eachSocialLink"><AiFillGithub/></Link></li>
                    <li><Link to="https://codepen.io" target='_blank' className="eachSocialLink"><AiFillCodepenCircle/></Link></li>
                    <li><Link to="https://dev.to/" target='_blank' className="eachSocialLink"><FaDev/></Link></li>
                </ul>
               </span>
            </div>
       </div>
    </div>
    <div className="copyrightSection">
        <p>Designed With ❤️ By Sourap Ranjan Samal </p>
    </div>
    </footer> 
  )
}

export default Footer
