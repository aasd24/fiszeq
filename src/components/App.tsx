import { motion } from "motion/react";
import Card from "./Card";

function App() {
    return (
    <motion.div 
    style={body} 
    initial={{backgroundPosition: '0px 0px'}} 
    animate={{backgroundPosition: '25px 25px'}} 
    transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
    >
        <Card front="elephant" back="🐘" />
    </motion.div>
    )
}

export default App;

const body: React.CSSProperties = {
    backgroundColor: '#111111',
    backgroundImage: 'radial-gradient(#181818 10%, transparent 15%)',
    backgroundSize: '25px 25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    padding: 0,
    margin: 0,
    zIndex: -100,
}