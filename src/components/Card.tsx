import React, { useState } from 'react'
import { motion, useMotionValue} from 'motion/react'
import { MotionValue } from 'framer-motion';
import preventTextSelect from '../styles/preventSelect.ts';
import { font } from '../styles/font.ts';

export interface CardProps {
    front: string;
    back: string;
}

export interface CardSideProps {
    text: string;
    xOffset: MotionValue<number>;
    positionOffset: MotionValue<number>;
    isBackSide?: boolean;
}

export interface CardShadowProps {
    xOffset: MotionValue<number>;
    positionOffset: MotionValue<number>;
}

export default function Card({front, back}: CardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const flipOffset = useMotionValue(0);
    const verticalOffset = useMotionValue(0);

    function handleClick() {
        setIsFlipped(!isFlipped)
        flipOffset.set(isFlipped ? 0 : 180)
    }

    function handleHover(entered: boolean) {
        setIsHovering(!isHovering)
        verticalOffset.set(entered ? -5 : 0);
    }

    return (
        <>
        <div>
            <button 
            style={container} 
            onClick={handleClick} 
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            >
               <CardSide 
               text={front} 
               xOffset={flipOffset} 
               positionOffset={verticalOffset}
               />

               <CardSide 
               text={back} 
               xOffset={flipOffset} 
               positionOffset={verticalOffset} 
               isBackSide />

               <CardShadow 
               xOffset={flipOffset} 
               positionOffset={verticalOffset} 
               />
            </button>
        </div>
        </>
  )
}

function CardSide({
    text, 
    xOffset, 
    positionOffset, 
    isBackSide
}: CardSideProps) {
    return (
        <motion.div
        transition={{
            type: 'spring',
            duration: 0.6,
            bounce: 0.2,
        }}
        style={button}
        initial={{rotateY: `${(isBackSide ? 180 : 0)}deg`}}
        animate={{
            rotateY: `${(isBackSide ? 180 : 0) + xOffset.get()}deg`,//`${rotation + y}deg`,
            y: `${positionOffset.get()}px`,
        }}
        >
            {text}
        </motion.div>
    )
}

function CardShadow({
    xOffset, 
    positionOffset,
}: CardShadowProps) {
    return (
        <motion.div
        transition={{
            type: 'spring',
            duration: 0.6,
            bounce: 0.2,
        }}
        style={buttonShadow}
        animate={{
            rotateY: `${xOffset.get()}deg`,//`${rotation + y}deg`,
            x: `${-positionOffset.get() + 25}px`,
            y: `${-positionOffset.get() + 25}px`
        }}
        >

        </motion.div>
    )
}

// Styles

const container: React.CSSProperties = {
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
    width: '400px',
    padding: '15px',
    borderRadius: '15px',
    aspectRatio: 1.618,
    backgroundColor: '#00000080',
    filter: 'blur(10px)',
}