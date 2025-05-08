import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";

const Work = () => {
    // Sample projects array
    const projects = [
        {
            id: 1,
            name: "RideX",
            description: "An eco-friendly ride-hailing web app designed for seamless, secure, and sustainable travel experiences.",
            thumbnail: "/Screenshot 2025-05-09 025249.png", // Replace with actual image path
            tags: ["React", "TronLink", "Tailwind CSS", "Solidity", "Nile"],
            link: "https://github.com/Harsh-BH/RideX?tab=readme-ov-file",
            demo: "https://ride-x-flax.vercel.app/"
        },
        {
            id: 2,
            name: "Spotify Web App Clone",
            description: "Built a fully functional Spotify clone with features like music streaming, playlist creation, and real-time search.",
            thumbnail: "/Screenshot 2025-05-09 025816.png", // Replace with actual image path
            tags: ["MongoDB", "Express", "React", "Node.js"],
            link: "https://github.com/Aksh10x/spotify-clone",
            demo: "https://spotify-clone-2kog.onrender.com"
        },
        {
            id: 3,
            name: "CoinX",
            description: "A UI/UX project showcasing a cryptocurrency exchange platform with real-time data and user-friendly design | Build The New Internet Hackathon Winner",
            thumbnail: "/ss2.png", // Replace with actual image path
            tags: ["CSS3", "HTML5", "React", "Vite"],
            link: "https://github.com/ShriyaSinha1809/wallet-connect-website?tab=readme-ov-file",
            demo: "https://wallet-connect-website-six.vercel.app/home"
        },
        {
            id: 4,
            name: "SMAPP",
            description: "A social media blog posting platform that allows users to create, share, like, and discover blog posts.",
            thumbnail: "/Screenshot 2025-05-09 031306.png", // Replace with actual image path
            tags: ["React", "Tailwind CSS", "Firebase", "Firestore"],
            link: "https://github.com/Aksh10x/socialmediaapp",
            demo: ""
        }
    ];

    const [hoveredId, setHoveredId] = useState(null);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    
    const titleText = "My Projects";

    return (
        <section id='projects' className="relative w-full min-h-screen pb-20 overflow-hidden flex items-center">
            
            <div className="absolute top-0 left-0 w-full h-64 overflow-hidden">
                
                <div 
                    className={`absolute w-full transition-all duration-1000 ease-out ${
                        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ 
                        zIndex: 10,
                        transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                >
                    <svg 
                        className="absolute w-full"
                        preserveAspectRatio="none" 
                        viewBox="0 0 1200 120" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: '#facc15', height: '90px', opacity: 0.25 }}
                    >
                        <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18.19 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"></path>
                    </svg>
                </div>
                
                
                <div 
                    className={`absolute w-full transition-all duration-1000 ease-out ${
                        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ 
                        zIndex: 20,
                        transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
                    }}
                >
                    <svg 
                        className="absolute w-full"
                        preserveAspectRatio="none" 
                        viewBox="0 0 1200 120" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: '#fcd34d', height: '70px', opacity: 0.5 }}
                    >
                        <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"></path>
                    </svg>
                </div>
                
                
                <div 
                    className={`absolute w-full transition-all duration-1000 ease-out ${
                        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ 
                        zIndex: 30,
                        transition: "all 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
                    }}
                >
                    <svg 
                        className="absolute w-full"
                        preserveAspectRatio="none" 
                        viewBox="0 0 1200 120" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: '#f59e0b', height: '50px', opacity: 0.7 }}
                    >
                        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"></path>
                    </svg>
                </div>
            </div>

            
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/90 via-yellow-900 to-black z-0"></div>

            <div className="relative z-10 pt-32 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
                        
                        <span className="relative">
                            {titleText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ 
                                        duration: 0.1, 
                                        delay: 0.3 + index * 0.07,
                                        ease: "easeIn" 
                                    }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                        
                        
                        <motion.div
                            className="absolute bottom-0 left-0 h-1 -z-10 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.8, 
                                ease: "easeInOut" 
                            }}
                            viewport={{ once: true }}
                        />
                    </h2>
                    <p className="text-lg text-black max-w-3xl mx-auto">
                        Explore some of my recent projects across web development, data structures, and problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: project.id * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <motion.div 
                                className="bg-white rounded-xl overflow-hidden shadow-xl border-4 border-amber-300"
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                
                                <div className="h-56 bg-gray-200 relative overflow-hidden">
                                    <img 
                                        src={project.thumbnail} 
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                        style={{ 
                                            transform: hoveredId === project.id ? 'scale(1.05)' : 'scale(1)'
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                                </div>

                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, index) => (
                                            <span 
                                                key={index} 
                                                className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    
                                    <div className="flex justify-between mt-4">
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-yellow-600 hover:text-yellow-800 font-medium text-sm transition-colors duration-200"
                                        >
                                            View Code →
                                        </a>
                                        {project.demo && (
                                            <a 
                                                href={project.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-yellow-600 hover:text-yellow-800 font-medium text-sm transition-colors duration-200"
                                            >
                                                Live Demo →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 flex justify-center"
                >
                    <a 
                        href="https://github.com/Aksh10x" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 flex bg-white items-center text-yellow-600 font-semibold max-w-[260px] justify-center gap-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        See More on GitHub 
                        <span className="ml-2 text-3xl text-black"><FaGithub /></span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Work;