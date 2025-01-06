import { AnimatePresence, motion } from "motion/react";
import Card from "./Card";
import { useEffect, useState } from "react";
import shuffle from "../../utils/shuffle";
import CardChoices from "./CardChoice";
import { useNavigate, useParams } from "react-router";
import decks from "../../impl";

export type TCardChoices = "Bad" | "Decent" | "Good";

function Play() {
    const params = useParams();
    const navigate = useNavigate();

    const deckName = params.deck as keyof typeof decks;

    const [deck, setDeck] = useState(() => {
        if (deckName && (deckName in decks)) {
            return shuffle(decks[deckName].data);
        }

        return [];
    });

    const [showChoices, setShowChoices] = useState(false);

    // TODO, improve shifting based on total card score.
    function changeCard(optionChosen: TCardChoices): void {
        setShowChoices(false);

        if (!deck) return;
        if (deck.length === 0) return;

        const newDeck = deck.slice(); // shallow copy
        const card = newDeck.shift(); // first index removed

        if (!card) return;

        if (optionChosen === "Bad") {
            if (newDeck.length >= 2) {
                newDeck.splice(2, 0, card); 
            } else {
                newDeck.push(card);
            }
        } 

        if (optionChosen === "Decent") {
            newDeck.push(card);
        }

        // no option for good, first element already removed.
        
        setDeck(newDeck);
    }

    function onFlip() {
        setTimeout(() => {
            if (!showChoices) {
                setShowChoices(true);
            }
        }, 500)
        
    }

    useEffect(() => {
        if (!deckName || !(deckName in decks)) {
            navigate("/");
        }
    })

    useEffect(() => {
        if (deck.length === 0) {
            setTimeout(() => {
                navigate("/");
            }, 500)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deck])

    return (
    <motion.div 
    style={body} 
    initial={{backgroundPosition: '0px 0px'}} 
    animate={{backgroundPosition: '25px 25px'}} 
    transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
    >   
        <motion.div 
        style={{...body, backgroundImage: 'none'}} 
        initial={{backgroundColor: '#111111'}} 
        animate={{backgroundColor: '#11111100'}} 
        transition={{duration: 3}}>
            <motion.div style={container} animate={{y: `${showChoices ? -200 : 0}px`}}>
                <AnimatePresence>
                    {deck.length !== 0 && 
                    <Card 
                    key={deck[0]!.id} 
                    front={deck[0].front} 
                    back={deck[0].back} 
                    flipCallback={onFlip} />}
                    {showChoices && <CardChoices choiceCallback={changeCard}/>}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    </motion.div>
    )
}

export default Play;

const body: React.CSSProperties = {
    position: 'fixed',
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