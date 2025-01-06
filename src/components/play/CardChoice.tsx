import { motion } from "motion/react";
import { TCardChoices } from "./Play"

const choicesArray: Array<TCardChoices> = ["Bad", "Decent", "Good"];

const pickCardStyles = {
    "Bad": {
        fromColor: '#ff312e',
        toColor: '#951f1d',
        svgIcon: 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7ZM12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5ZM8 10C6.89543 10 6 10.8954 6 12H4C4 9.79086 5.79086 8 8 8C10.2091 8 12 9.79086 12 12H10C10 10.8954 9.10457 10 8 10Z',
    },

    "Decent": {
        fromColor: '#F3B700',
        toColor: '#967100',
        svgIcon: 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7ZM12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5ZM4 9V11H12V9H4Z',
    },

    "Good": {
        fromColor: '#00C49A',
        toColor: '#008e6f',
        svgIcon: 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7ZM12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5ZM8 11C6.89543 11 6 10.1046 6 9H4C4 11.2091 5.79086 13 8 13C10.2091 13 12 11.2091 12 9H10C10 10.1046 9.10457 11 8 11Z',
    }
    
}

export interface ICardChoicesProps {
    choiceCallback: (choice: TCardChoices) => void;
}

export interface IPickProps {
    id: number;
    choice: TCardChoices;
    choose: () => void;
}

export default function CardChoices({choiceCallback}: ICardChoicesProps) {
    return (
        <div style={choiceContainer}>
            {choicesArray.map((pick, i) => 
            <Pick 
            key={i} 
            id={i} 
            choice={pick} 
            choose={() => choiceCallback(pick)}/>)}
        </div>
    )
}

function Pick({id, choice, choose}: IPickProps) {
    const variants = {
        initial: {
            opacity: 0,
            rotateZ: 0,
        },

        animate: {
            opacity: 1,
            rotateZ: id * 6 - 6
        },

        exit: {
            opacity: 0,
        },

        hover: {
            y: -12,
            rotateZ: id * 8 - 8,
        }
    }

    return (
        <motion.div 
        style={pick} 
        key={id} 
        onClick={choose}
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        whileHover={"hover"}>
            <div 
            style={{
                ...choiceSideBar, 
                background: `linear-gradient(180deg, ${pickCardStyles[choice].fromColor} 0%, ${pickCardStyles[choice].toColor}) 100%`}} 
            />
            <div style={icon}>
                <svg
                style={{
                    transform: 'translate(20%, -15%)',
                }}
                xmlns={"http://www.w3.org/2000/svg"} 
                preserveAspectRatio={"xMidYMid meet"}
                viewBox={"0 0 24 24"}>
                    <g 
                   fillRule={"evenodd"}
                   clipRule={"evenodd"}
                   fill={`${pickCardStyles[choice].fromColor}`}
                   >
                       <path d={pickCardStyles[choice].svgIcon} />
                   </g>
                </svg>
            </div>
        </motion.div>
    )
}

// Styles

const choiceContainer: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '600px',
    width: '1000px',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    gap: '10px',
    
}

const pick: React.CSSProperties = {
    background: 'radial-gradient(circle, rgba(32, 32, 32) 0%, rgba(23, 23, 23) 90%)',
    borderRadius: '15px',
    width: '100%',
    aspectRatio: 1 / 1.618,
    padding: '15px'
}

const choiceSideBar: React.CSSProperties = {
    position: 'absolute',
    height: '100%',
    width: '5px',
}

const icon: React.CSSProperties = {
    width: '100%',
    height: '100%',
    placeContent: 'center',
}