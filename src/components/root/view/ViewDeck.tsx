import { Link } from "react-router"
import usePath from "../../../hooks/usePath";

function PlayIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
            <path d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z" stroke="#ffffff" stroke-width="1.5"/>
        </svg>
    )
}

export default function ViewDeck() {
    const path = usePath();

    return (
        <>
            <p>TODO: add info to {path[path.length - 1]} deck.</p>
            <button style={playButton}>
                <Link to={`/play/${path[path.length - 1]}`}>
                    <PlayIcon />
                </Link>
            </button>
            
        </>
    )
}

const playButton: React.CSSProperties = {
    width: '75px',
    height: '75px',
    backgroundColor: '#1a76ff',
    borderRadius: '16px',
    border: '1px solid #1a76ff50',
    boxShadow: '1px 1px 4px #00000010',
}