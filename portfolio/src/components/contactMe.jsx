import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const titleText = "Contact Me";

    // Track mouse position for the glow effect - simplified
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const { clientX, clientY } = e;
                setMousePosition({ x: clientX, y: clientY });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Calculate the glow effect position relative to the container - simplified
    const getGlowStyles = () => {
        if (!containerRef.current) return {};
        
        const container = containerRef.current.getBoundingClientRect();
        const x = mousePosition.x - container.left;
        const y = mousePosition.y - container.top;
        
        // Check if mouse is inside the container
        const isInside = x >= 0 && x <= container.width && y >= 0 && y <= container.height;
        
        return {
            left: isInside ? `${x}px` : '50%',
            top: isInside ? `${y}px` : '50%',
            opacity: isInside ? 0.15 : 0,
        };
    };

    // Contact information
    const contactLinks = [
        {
            name: 'Email',
            icon: <FaEnvelope />,
            link: 'mailto:akshathsurwase@gmail.com',
            handle: 'akshathsurwase@gmail.com',
            color: '#facc15' // Yellow
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/akshath-surwase-867842274/',
            handle: 'linkedin.com/in/akshath-surwase',
            color: '#0a66c2' // LinkedIn blue
        },
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://instagram.com/_._.akshath',
            handle: '@_._.akshath',
            color: '#e1306c' // Instagram pink
        },
        {
            name: 'GitHub',
            icon: <FaGithub />,
            link: 'https://github.com/Aksh10x',
            handle: 'github.com/Aksh10x',
            color: '#ffffff' // White
        }
    ];

    return (
        <>
        <div id='contact' className='w-full h-[1px] bg-red-500'></div>
        <section className="relative w-full min-h-screen bg-black overflow-hidden py-20 flex items-center">
            
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40l20-20M20 40l40-40M0 40l40-40M0 20l20-20M0 0h60v60H0z' stroke='%23facc15' stroke-width='1.5' fill='none' /%3E%3C/svg%3E\")",
                    backgroundSize: "60px 60px"
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
                        {titleText}
                        <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Feel free to reach out through any of these platforms
                    </p>
                </motion.div>

                
                <div className="flex justify-center items-center my-20">
                    <motion.div
                        ref={containerRef}
                        className="relative overflow-hidden w-full max-w-2xl rounded-2xl p-8 border border-yellow-500/20"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            backdropFilter: "blur(10px)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        
                        <div 
                            className="absolute pointer-events-none transition-opacity duration-300"
                            style={{
                                width: "300px",
                                height: "300px",
                                borderRadius: "50%",
                                transform: "translate(-50%, -50%)",
                                background: "radial-gradient(circle, rgba(253, 224, 71, 0.8) 0%, rgba(253, 224, 71, 0.4) 25%, rgba(253, 224, 71, 0) 70%)",
                                mixBlendMode: "screen",
                                ...getGlowStyles()
                            }}
                        />

                       
                        <div className="relative z-10 space-y-6">
                            {contactLinks.map((contact, index) => (
                                <motion.a
                                    key={contact.name}
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center p-4 rounded-xl hover:bg-white/5"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full mr-4"
                                        style={{ backgroundColor: `${contact.color}20` }}>
                                        <div className="text-white text-xl hover:text-yellow-400">
                                            {contact.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium text-lg mb-1">{contact.name}</h3>
                                        <p className="text-yellow-200/70 text-sm">
                                            {contact.handle}
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="text-yellow-400 opacity-0 group-hover:opacity-100">
                                            →
                                        </span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        
                        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-yellow-500/5 -mt-20 -mr-20"></div>
                        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-yellow-500/5 -mb-40 -ml-20"></div>
                    </motion.div>
                </div>

                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Looking for new opportunities to collaborate on exciting projects. 
                        Let's build something amazing together!
                    </p>
                    <motion.a
                        href="/CV-oc (1).pdf"
                        download
                        className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-full shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300"
                    >
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </section>
        </>
    );
};

export default ContactMe;