import { AnimatePresence, motion } from "motion/react";
import Card from "./Card";
import { useState } from "react";
import shuffle from "../utils/shuffle";
import CardChoices from "./CardChoice";

// temporary, remove and improve later
const cards = [
    {   
        id: crypto.randomUUID(),
        front: "🐘",
        back: "elephant",
    },
    {
        id: crypto.randomUUID(),
        front: "🦒",
        back: "giraffe",
    },
    {
        id: crypto.randomUUID(),
        front: "🦜",
        back: "parrot",
    },
    {
        id: crypto.randomUUID(),
        front: "🐱",
        back: "cat",
    },
    {
        id: crypto.randomUUID(),
        front: "🐶",
        back: "dog",
    },
    {
        id: crypto.randomUUID(),
        front: "🐭",
        back: "mouse",
    },
    {
        id: crypto.randomUUID(),
        front: "🦑",
        back: "squid",
    },
    {
        id: crypto.randomUUID(),
        front: "🦛",
        back: "hippo",
    },
    {
        id: crypto.randomUUID(),
        front: "🐷",
        back: "pig",
    },
    {
        id: crypto.randomUUID(),
        front: "🐀",
        back: "rat",
    },
    
]

export type TCardChoices = "Bad" | "Decent" | "Good";

function App() {
    const [cardList, setCardList] = useState(shuffle(cards));
    const [showChoices, setShowChoices] = useState(false);

    // TODO, improve shifting based on total card score.
    function changeCard(optionChosen: TCardChoices): void {
        setShowChoices(false);

        if (!cardList) return;
        if (cardList.length === 0) return;

        const newCardList = cardList.slice(); // shallow copy
        const card = newCardList.shift(); // first index removed

        if (!card) return;

        if (optionChosen === "Bad") {
            if (newCardList.length >= 2) {
                newCardList.splice(2, 0, card); 
            } else {
                newCardList.push(card);
            }
        } 

        if (optionChosen === "Decent") {
            newCardList.push(card);
        }

        // no option for good, first element already removed.
        
        setCardList(newCardList);
    }

    function onFlip() {
        setTimeout(() => {
            if (!showChoices) {
                setShowChoices(true);
            }
        }, 500)
        
    }

    return (
    <motion.div 
        style={body} 
        initial={{backgroundPosition: '0px 0px'}} 
        animate={{backgroundPosition: '25px 25px'}} 
        transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
        >   
        
        <motion.div style={container} animate={{y: `${showChoices ? -200 : 0}px`}}>
            <AnimatePresence>
                {cardList.length !== 0 && 
                <Card 
                key={cardList[0].id} 
                front={cardList[0].front} 
                back={cardList[0].back} 
                flipCallback={onFlip} />}
                {showChoices && <CardChoices choiceCallback={changeCard}/>}
           </AnimatePresence>
           </motion.div>
        
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

const container: React.CSSProperties = {
    position: 'relative',
    top: '50%',
}