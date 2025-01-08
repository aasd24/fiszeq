import { motion } from "motion/react"
import { Location, Outlet, useLocation } from "react-router"

export default function Root() {
    const location: Location = useLocation();

    return (
        <div style={container}>
            <motion.div style={sidebar}>

            </motion.div>
            <div style={innerContainer}>
                <Header location={location.pathname}/>
                <div style={contentContainer}>
                    <Outlet />
                </div>
            </div>
            
        </div>
    )
}

interface HeaderProps {
    location: string;
}

function Header({ location }: HeaderProps) {
    return (
        <div style={header}>
            {location}
        </div>
    )
}

// Styles

const container: React.CSSProperties = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
}

const innerContainer: React.CSSProperties = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#f8f8f8"
}

const contentContainer: React.CSSProperties = {
    overflowY: 'auto',
    padding: '25px',
    flexGrow: 1,
}

const header: React.CSSProperties = {
    minHeight: '10vh',
    backgroundColor: '#eeeeee',
    borderBottom: '1px solid #888888',
    padding: '5px',
    fontSize: '2rem',
}

const sidebar: React.CSSProperties = {
    zIndex: 2,
    height: '100vh',
    minWidth: '15vw',
    margin: 0,
    backgroundColor: '#ffffff',
    borderRight: '1px solid #888888',
}