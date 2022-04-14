import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import { data } from '../components/data';
import Card from '../components/Card';


import { FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { DiJavascript } from "react-icons/di";
import { SiCplusplus, SiDotnet } from "react-icons/si";


const Home = () => {
    return (
        <div className='home'>

            <section className='home-section'>
                <div className="container">
                    <div className="home-content">
                        <h2>We offer the most secure Software solution for your business.</h2>
                        <h3>Grow your business with the best designed digital product with effect.</h3>
                        <p>We provide custom software development and IT outsourcing services across multiple technologies</p>
                        <p>we have developed softwares that have been loved by all.</p>
                        <div className="stats">
                            <div className="years">
                                <p>5 +</p>
                                <p>Years</p>
                            </div>
                            <p className="vertical-rule"></p>
                            <div className="clients">
                                <p>150 +</p>
                                <p>Clients</p>
                            </div>
                            <p className="vertical-rule"></p>
                            <div className="users">
                                <p>1M +</p>
                                <p>Users</p>
                            </div>

                        </div>
                        <button><Link to='/' className='btn-more'>Learn more</Link></button>
                    </div>
                    <div className="home-image">
                        <img src="images/programmers1.png" alt="programmer" />
                    </div>
                </div>
            </section>
            <div className="services">
                <h2>SERVICES</h2>
                <div className="sevices-items">
                    {data.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
            </div>
            <div className="technologies">
                <h2>Core Technologies </h2>
                <p>We love working with the latest technologies</p>
                <div className="technologies-items">
                    <div className="technology-item">
                        <div className="icons">
                            <FaPython className='icon' />
                        </div>
                        <p>Python</p>
                    </div>
                    <div className="technology-item">
                        <div className="icons">
                            <FaJava className='icon' />
                        </div>
                        <p>Java</p>
                    </div>
                    <div className="technology-item">
                        <div className="icons">
                            <DiJavascript className='icon' />
                        </div>
                        <p>JavaScript</p>
                    </div>
                    <div className="technology-item">
                        <div className="icons">
                            <SiCplusplus className='icon' />
                        </div>
                        <p>C ++</p>
                    </div>

                    <div className="technology-item">
                        <div className="icons">
                            <FaPhp className='icon' />
                        </div>
                        <p>PHP</p>
                    </div>
                    <div className="technology-item">
                        <div className="icons">
                            <SiDotnet className='icon' />
                        </div>
                        <p>.NET</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
