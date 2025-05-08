import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const navbarRef = useRef(null);
    
    const { scrollY } = useScroll();
    const blurValue = useTransform(scrollY, [0, 100], [0, 0.2]);
    const bgOpacity = useTransform(scrollY, [0, 100], [1, 0.9]);
    
    const yOffset = useMotionValue(0);
    const smoothYOffset = useSpring(yOffset, { damping: 20, stiffness: 300 });
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
                if (!isHovering) {
                    yOffset.set(-60); 
                }
            } else {
                setIsScrolled(false);
                yOffset.set(0);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHovering, yOffset]);
    
    const handleMouseEnter = () => {
        setIsHovering(true);
        yOffset.set(0); 
    };
    
    const handleMouseLeave = () => {
        setIsHovering(false);
        if (isScrolled) {
            yOffset.set(-60); 
        }
    };

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Close the navbar if it's expanded
            if (isScrolled) {
                setTimeout(() => {
                    yOffset.set(-60);
                    setIsHovering(false);
                }, 100);
            }
            
            // Smooth scroll to the section
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0.5, filter: "blur(2px)" },
        visible: { 
            opacity: 1, 
            filter: "blur(0px)",
            transition: { 
                delay: 0.5,
                duration: 0.5
            }
        }
    };

    const nameLetters = "<Portfolio />".split("");

    return (
        <motion.div 
            ref={navbarRef}
            className="fixed top-4 left-0 right-0 z-50 px-4 py-1 mx-auto max-w-screen-lg w-full"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            style={{ y: smoothYOffset }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div 
                className="rounded-full shadow-lg cursor-pointer"
                style={{ 
                    backdropFilter: `blur(${blurValue.get()}px)`,
                    backgroundColor: `rgba(253, 224, 71, ${bgOpacity.get()})` // yellow-300 with changing opacity
                }}
            >
                {isScrolled && (
                    <motion.div 
                        className="absolute left-1/2 bottom-0 w-12 h-1 rounded-full bg-amber-400"
                        style={{ x: "-50%", translateY: "50%" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                    />
                )}
                
                <nav className="flex justify-between items-center py-4 px-6">
                    <div className="flex-shrink-0">
                        <div className="flex">
                            {nameLetters.map((letter, index) => (
                                <motion.span 
                                    key={index}
                                    className="text-gray-900 text-2xl font-bold cursor-default"
                                    whileHover={{ 
                                        rotate: 5, 
                                        color: "#f54248",
                                        scale: 1.1,
                                        transition: { duration: 0.2 }
                                    }}
                                    style={{ display: 'inline-block' }}
                                >
                                    {letter === " " ? <span>&nbsp;</span> : letter}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex gap-4 md:gap-6">
                        <motion.button 
                            className="border border-gray-800/50 bg-white text-gray-900 px-3 py-1.5 rounded-full hover:bg-black/90 hover:text-white hover:-translate-y-0.5 transition-all duration-300 hover:shadow-md font-medium"
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </motion.button>
                        
                        <motion.button 
                            className="border border-gray-800/50 bg-white text-gray-900 px-3 py-1.5 rounded-full hover:bg-black/90 hover:text-white hover:-translate-y-0.5 transition-all duration-300 hover:shadow-md font-medium"
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.6 }}
                        >
                            <a href='https://drive.google.com/file/d/1o4uzJPnUQI0eD4Sa1q3hySRGYaQpQNiM/view?usp=sharing'
                            target='_blank'
                            rel='noopener noreferrer'
                            >Resume</a>
                        </motion.button>
                        
                        <motion.button 
                            className="border border-gray-900 bg-white text-gray-900 px-3 py-1.5 rounded-full hover:bg-black/90 hover:text-white hover:-translate-y-0.5 transition-all duration-300 hover:shadow-md font-medium"
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.7 }}
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact Me
                        </motion.button>
                    </div>
                </nav>
            </motion.div>
        </motion.div>
    );
}

export default Navbar;