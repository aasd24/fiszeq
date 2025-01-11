import { useLocation, Location } from "react-router";
import { font } from "../../styles/font";

export default function Header() {
    const location: Location = useLocation();
    
    return (
        <div style={header}>
            <div
            style={innerHeader}>
                {location.pathname}
            </div>
        </div>
    )
}

// Styles

const header: React.CSSProperties = {
    height: '10vh',
    minHeight: '10vh',
    color: '#bbbbbb',
    fontSize: '2rem',
}

const innerHeader: React.CSSProperties = {
    width: '100%',
    maxHeight: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 25px',
    ...font,
}