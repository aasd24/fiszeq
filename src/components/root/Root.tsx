import { Link } from "react-router"
import decks from "../../impl"

export default function Root() {
    return (
        <>
        <h2>temporary styling, graphic design is my passion.</h2>
        <div style={container}>
            {Object.entries(decks).map(([key, deckData]) => {
                return (
                <Link to={`/play/${key}`}style={innerContainer}> 
                    <div>{deckData.name} <span>by {deckData.author}</span></div>
                    <div>{deckData.description}</div>
                    <div>{deckData.data.length} Cards</div>
                </Link>
                )
            })}
        </div>
        </>
    )
}

const container: React.CSSProperties = {
    width: '100vw',
    height: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    padding: '25px',
    filter: 'drop-shadow(10px 10px 4px #00000025)'
}

const innerContainer: React.CSSProperties = {
    width: '300px',
    aspectRatio: 1.618,
    display: 'flex',
    flexDirection: 'column',
    gap: '20%',
    padding: '15px',
    backgroundColor: '#eeeeee',
    borderRadius: '15px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#000000'
}