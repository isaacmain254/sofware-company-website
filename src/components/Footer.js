import React from 'react'
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephonePlusFill, BsFacebook } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="company">
                    <p><Link className='links' to='/about'>About Us</Link></p>
                    <p><Link className='links' to='/services'>Services</Link></p>
                    <p><Link className='links' to='/'>Features</Link></p>
                    <p><Link className='links' to='/'>Our Pricing</Link></p>
                    <p><Link className='links' to='/'>Latest News</Link></p>
                </div>
                <div className="suppport">
                    <p>FAQ's</p>
                    <p>Privacy policy</p>
                    <p>Terms & conditions</p>
                    <p>Community</p>
                    <p>Contact Us</p>
                </div>
                <div className="address">
                    <p><IoLocationSharp />  Third Floor Pionier Plaza Moi Avenue</p>
                    <p><i className="fas fa-envelope"></i>  Email : Linkedtech@gmail.com</p>
                    <p><BsTelephonePlusFill />  Phone : +254 748 923899</p>
                </div>
            </div>
            <hr />
            <div className="copy-right">
                <div className="social-media">
                    <Link className='social-links' to="/"><GrTwitter /></Link>
                    <Link className='social-links' to="/"><FaLinkedinIn /></Link>
                    <Link className='social-links' to='/'><BsFacebook /></Link>
                    <Link className='social-links' to='/'><FaInstagramSquare /></Link>
                </div>
                <p>Copyright © 2020 LinkedTech. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
