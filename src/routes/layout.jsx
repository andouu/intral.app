import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { IoLogoBuffer } from 'react-icons/io';
import '../styles/layout.css';

export default function Layout() {
    return (
        <>
            <nav>
                <motion.div
                    style={{
                        marginRight: 'auto'
                    }}
                    whileHover={{
                        filter: 'brightness(0.75)',
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <Link to="/" id="home-button"><IoLogoBuffer size='1.75rem' color='#2383D6' /><b>Intral</b></Link>
                </motion.div>
                <Link to="/about" className="nav-button-container">
                    <motion.span
                        className="nav-button"
                        whileHover={{
                            backgroundColor: '#3d444a',
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        About
                    </motion.span>
                </Link>
                <Link to="/guide" className="nav-button-container">
                    <motion.span
                        className="nav-button"
                        whileHover={{
                            backgroundColor: '#3d444a',
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        Guide
                    </motion.span>
                </Link>
                <Link to="/download" className="nav-button-container">
                    <motion.span
                        className="nav-button"
                        whileHover={{
                            backgroundColor: '#3d444a',
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        Download
                    </motion.span>
                </Link>
                <Link to="/faq" className="nav-button-container">
                    <motion.span
                        className="nav-button"
                        whileHover={{
                            backgroundColor: '#3d444a',
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        FAQ
                    </motion.span>
                </Link>
                <a href="https://github.com/andouu/Intral" target="_blank" className="socials-button"><FaGithub size='1.75rem' /></a>
            </nav>
            <Outlet />
        </>
    );
}