import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const sectionRef = useRef(null);
    const [textBlur, setTextBlur] = useState(4);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Animate blur on scroll for the dividing line
    const blurAmount = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
    
    // Photo animation values based on scroll
    const photoY = useTransform(scrollYProgress, [0, 0.3], [0, 120]);
    const photoScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
    const photoRotate = useTransform(scrollYProgress, [0, 0.3], [0, -10]);
    
    // Typing animation for name
    const nameText = "Akshath Surwase";
    
    // Unblur text after 0.5s
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTextBlur(0);
        }, 500);
        
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="relative w-full overflow-hidden h-screen"
        >
            {/* Diagonal split background - adjusted for more yellow */}
            <div className="absolute inset-0 bg-yellow-400" />
            
            <div className="absolute inset-0" 
                style={{
                    clipPath: "polygon(60% 0, 100% 0, 100% 100%, 50% 100%)",
                    background: "#030712" // gray-950
                }}
            />
            
            {/* Blurred dividing line */}
            <motion.div 
                className="absolute inset-0" 
                style={{
                    clipPath: "polygon(55% 0, 60% 0, 50% 100%, 45% 100%)",
                    background: "rgba(250, 204, 21, 0.5)", // semi-transparent yellow
                    backdropFilter: `blur(${blurAmount.get()}px)`,
                    mixBlendMode: "overlay"
                }}
            />
            
            <div className="container mx-auto h-full flex items-center">
                {/* Left side content */}
                <div className="w-3/5 pl-8 pr-16 z-10">
                    <div className="space-y-3">
                        {/* Name with typing animation */}
                        <h1 className="text-5xl font-bold text-gray-900 mb-4 relative">
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "70%" }}
                                transition={{ 
                                    duration: 1.2, 
                                    ease: "easeInOut",
                                    delay: 0.3
                                }}
                                className="absolute inset-0 bg-yellow-400 z-[-1]"
                                style={{ originX: 0 }}
                            />
                            {nameText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ 
                                        duration: 0.1, 
                                        delay: 0.3 + index * 0.07,
                                        ease: "easeIn" 
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h1>
                        
                        {/* Title - static, no animation */}
                        <h2 className="text-2xl font-semibold text-white mb-6"
                            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
                        >
                            Full Stack Developer
                        </h2>
                        
                        {/* The rest of the content with animations */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <motion.p 
                                className="text-lg text-gray-800 mb-6"
                                style={{ 
                                    filter: `blur(${textBlur}px)`,
                                    transition: "filter 0.5s ease-out"
                                }}
                            >
                                Passionate MERN stack developer with expertise in crafting responsive and dynamic web applications and an Undergraduate@IIT Kharagpur.
                            </motion.p>
                            <ul className="space-y-3 mb-8">
                                <motion.li 
                                    className="flex items-center text-white"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    style={{ 
                                        filter: `blur(${textBlur}px)`,
                                        textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                                        transition: "filter 0.5s ease-out" 
                                    }}
                                >
                                    <span className="mr-2 text-yellow-200">→</span> MongoDB, Express, React & Node.js
                                </motion.li>
                                <motion.li 
                                    className="flex items-center text-gray-800"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                    style={{ 
                                        filter: `blur(${textBlur}px)`,
                                        transition: "filter 0.5s ease-out" 
                                    }}
                                >
                                    <span className="mr-2">→</span> Advanced Data Structures & Algorithms
                                </motion.li>
                                <motion.li 
                                    className="flex items-center text-white"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 }}
                                    style={{ 
                                        filter: `blur(${textBlur}px)`,
                                        textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                                        transition: "filter 0.5s ease-out" 
                                    }}
                                >
                                    <span className="mr-2 text-yellow-200">→</span> Problem Solving & Optimization
                                </motion.li>
                            </ul>
                            <motion.button
                                className="px-6 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all duration-300 shadow-md"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ 
                                    filter: `blur(${textBlur}px)`,
                                    transition: "filter 0.5s ease-out" 
                                }}
                            >
                                See My Work
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
                
                {/* Right side - Modified photo container - kept unchanged */}
                <div className="w-2/5 flex justify-center items-center z-10">
                    {/* Container with special overflow behavior */}
                    <div className="relative w-72 h-80">
                        {/* Outer container with no overflow on top, but with rounded borders */}
                        <div 
                            className="absolute top-10 left-0 w-full h-[85%] rounded-3xl"
                            style={{
                                backgroundImage: "linear-gradient(180deg, #030712 0%, #f54248 120%)",
                                boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
                                overflow: "hidden" // Only clips the bottom part
                            }}
                        >
                            
                            
                            {/* Photo that moves with scroll */}
                            <motion.div 
                                className="absolute w-full h-full -top-6" // Positioned higher to allow overflow at top
                                style={{
                                    y: photoY,
                                    scale: photoScale,
                                    rotate: photoRotate,
                                    transformOrigin: "center center"
                                }}
                                initial={{ y: 120, opacity: 0 }}
                                animate={{ 
                                    y: 0, 
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 12,
                                        delay: 0.7
                                    }
                                }}
                            >
                                
                                <div 
                                    className="w-full h-full pt-10 px-4 pb-4 flex items-center justify-center"
                                >
                                    <div 
                                        className="w-56 h-56 rounded-xl bg-white shadow-inner overflow-hidden"
                                    >
                                        
                                        <div 
                                            className="w-full h-full bg-gray-200 flex items-center justify-center relative"
                                        >
                                            
                                            <img src='/IMG_8473 (1).jpg' alt="Profile" className="w-full h-full object-cover rounded-xl" />
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;