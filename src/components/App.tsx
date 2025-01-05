import { AnimatePresence, motion } from "motion/react";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";
import shuffle from "../utils/shuffle";

// temporary, remove and improve later
const cards = [
    {   
        id: crypto.randomUUID(),
        front: "elephant",
        back: "🐘",
    },
    {
        id: crypto.randomUUID(),
        front: "giraffe",
        back: "🦒",
    },
    {
        id: crypto.randomUUID(),
        front: "parrot",
        back: "🦜",
    },
    {
        id: crypto.randomUUID(),
        front: "cat",
        back: "🐱",
    },
    {
        id: crypto.randomUUID(),
        front: "dog",
        back: "🐶",
    },
    
]

interface CardType {
    id: `${string}-${string}-${string}-${string}-${string}`, 
    front: string, 
    back: string
}

function App() {
    const list = useRef(shuffle(cards));
    const [currentCard, setCurrentCard] = useState<CardType | undefined>(undefined);

    useEffect(() => {
        function setRandomCard() {
            setCurrentCard(list.current[Math.floor(Math.random() * list.current.length)]);
        }

        const id = setInterval(() => {
            setRandomCard();
        }, 15000)

        setRandomCard();

        return () => clearInterval(id);
    }, [])

    return (
    <motion.div 
    style={body} 
    initial={{backgroundPosition: '0px 0px'}} 
    animate={{backgroundPosition: '25px 25px'}} 
    transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
    >   
        
        <div style={cardContainer}>
        <AnimatePresence>
            {list.current.map((card: CardType) => {
                return (currentCard && card.id === currentCard.id && <Card key={card.id} front={card.front} back={card.back} />);
            })}
        </AnimatePresence>
        </div>
        
    </motion.div>
    )
}

export default App;

const body: React.CSSProperties = {
    backgroundColor: '#111111',
    backgroundImage: 'radial-gradient(#181818 10%, transparent 15%)',
    backgroundSize: '25px 25px',
    width: '100vw',
    height: '100vh',
    padding: 0,
    margin: 0,
    zIndex: -100,
}

const cardContainer: React.CSSProperties = {
    position: 'relative',
    top: '50%',
    transform: 'translate(0, -50%)'
}