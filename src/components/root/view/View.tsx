import { Link } from "react-router";
import decks from "../../../impl";
import { font } from "../../../styles/font";

export default function View() {
    return (
        <div style={container}>
            {Object.entries(decks).map(([key, deckData]) => {
                return (
                <Link key={key} to={`/play/${key}`} style={innerContainer}> 
                    <div>{deckData.name} <span>by {deckData.author}</span></div>
                    <div>{deckData.description}</div>
                    <div>{deckData.data.length} Cards</div>
                </Link>
                )
            })}
        </div>
    )
}

const container: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '25px',
    padding: '25px',
}

const innerContainer: React.CSSProperties = {
    maxWidth: '300px',
    aspectRatio: 1.618,
    display: 'flex',
    flexDirection: 'column',
    gap: '20%',
    padding: '15px',
    backgroundColor: '#38383820',
    ...font,
    fontSize: '1.5rem',
    color: '#bbbbbb',
    border: '1px solid #73737350',
    borderRadius: '5px',
    textAlign: 'center',
    textDecoration: 'none',
    filter: 'drop-shadow(10px 10px 4px #00000025)'
}