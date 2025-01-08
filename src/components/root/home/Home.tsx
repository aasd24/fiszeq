import { Link } from "react-router"

export default function Home() {
    return (
        <>
        <h1>Home page</h1>
        <div style={container}>
            <Link to={"/view"}>View </Link>
            <Link to={"/edit"}>Edit </Link>
            <Link to={"/library"}>Library </Link>
        </div>
        </>
    )
}

// Styles

const container: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
}