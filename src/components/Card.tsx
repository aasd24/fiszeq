import React, { createContext, useContext, useState } from 'react'
import { motion, useMotionValue} from 'motion/react'
import { MotionValue } from 'framer-motion';
import preventTextSelect from '../styles/preventSelect.ts';
import { font } from '../styles/font.ts';

export interface ICardProps {
    front: string;
    back: string;
    flipCallback?: () => void;
}

export interface ICardSideProps {
    text: string;
    isBackSide?: boolean;
}

const StateContext = createContext<{flipOffset: MotionValue<number>, verticalOffset: MotionValue<number>} | undefined>(undefined)

export default function Card({front, back, flipCallback}: ICardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const flipOffset = useMotionValue(0);
    const verticalOffset = useMotionValue(0);

    function handleClick() {
        if (flipCallback) flipCallback();
        setIsFlipped(!isFlipped)
        flipOffset.set(isFlipped ? 0 : 180)
    }

    function handleHover(entered: boolean) {
        setIsHovering(!isHovering)
        verticalOffset.set(entered ? -5 : 0);
    }

    return (
        <div>
            <button 
            style={container} 
            onClick={handleClick} 
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            >

            <StateContext.Provider value={{flipOffset, verticalOffset}}>
                <CardSide text={front} />
                <CardSide text={back} isBackSide />

                <CardShadow />
            </StateContext.Provider>

            </button>
        </div>
  )
}

const sharedVariants = {
    initial: {
        opacity: 0,
        scale: 0,
        rotateZ: '120deg',
        transition: {
            type: 'spring',
        }
    },

    animate: {
        opacity: 1,
        scale: 1,
        rotateZ: '0deg',
        transition: {
            type: 'spring',
            duration: 0.8,
            bounce: 0.3,
        }
    },

    exit: {
        opacity: 0,
        scale: 0,
        rotateZ: '-120deg',
        transition: {
            ease: "easeInOut"
        }
    }
}

function CardSide({text, isBackSide}: ICardSideProps) {
    const state = useContext(StateContext);
    if (!state) return (undefined); 

    const xOffset = state.flipOffset;
    const positionOffset = state.verticalOffset;

    const variants = {
        initial: {
            ...sharedVariants.initial,
            rotateY: `${isBackSide ? 180 : 0}deg`,
        },

        animate: {
            ...sharedVariants.animate,
            rotateY: `${(isBackSide ? 180 : 0) + xOffset.get()}deg`,
            y: `${positionOffset.get()}px`,
        },

        exit: sharedVariants.exit,
    }

    return (
        <motion.div
        style={button}
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}>
            {text}
        </motion.div>
        
    )
}

function CardShadow() {
    const state = useContext(StateContext);
    if (!state) return (undefined); 

    const xOffset = state.flipOffset;
    const positionOffset = state.verticalOffset;

    const variants = {
        initial: sharedVariants.initial,

        animate: {
            ...sharedVariants.animate,
            rotateY: `${xOffset.get()}deg`,
            x: `${-positionOffset.get() + 25}px`,
            y: `${-positionOffset.get() + 25}px`,
        },

        exit: sharedVariants.exit,
    }

    return (
        <motion.div
        style={buttonShadow}
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        ></motion.div>
    )
}

// Styles

const container: React.CSSProperties = {
    position: 'absolute',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    border: 0,
}

const button: React.CSSProperties = {
    position: 'absolute',
    display: 'grid',
    placeItems: 'center',
    ...font,
    fontWeight: 400,
    fontSize: '4rem',
    padding: '15px',
    width: '400px',
    aspectRatio: 1.618,
    backgroundColor: '#f1f5f9',
    border: 0,
    borderRadius: '15px',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    ...preventTextSelect,
    zIndex: 1,
}

const buttonShadow: React.CSSProperties = {
    position: 'absolute',
    width: '400px',
    padding: '15px',
    borderRadius: '15px',
    aspectRatio: 1.618,
    backgroundColor: '#00000080',
    filter: 'blur(10px)',
}