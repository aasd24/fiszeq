import { motion } from "motion/react";
import { useNavigate } from "react-router";

function ExitIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 24 24" fill="none">
            <g id="Interface / Exit">
                <path id="Vector" d="M12 15L15 12M15 12L12 9M15 12H4M4 7.24802V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2839 4.21799 18.9076C4 18.4798 4 17.9201 4 16.8V16.75" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    )
}

function Exit() {
    const navigate = useNavigate();

    function onClick() {
        navigate("/view", { replace: true });
    }

    return (
        <>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            style={iconContainer}>
                <ExitIcon />
            </motion.div>
            <motion.div 
                whileHover={{width: "450px", backgroundColor: '#ff000045'}}
                transition={{duration: 1}}
                onClick={onClick}
                style={exit}>
            </motion.div>
        </>
    )
}

export default Exit;

const iconContainer: React.CSSProperties = {
    position: 'absolute',
    padding: "15px",
    zIndex: 1,
    pointerEvents: 'none',
}

const exit: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: "400px",
    borderRadius: "40%",
    transform: "translate(-50%, -50%)",
    aspectRatio: 1,
    filter: 'blur(50px)',
}