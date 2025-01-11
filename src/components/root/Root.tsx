import { Outlet } from "react-router"
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Root() {
    return (
        <div style={container}>
            <Sidebar />
            <div style={innerContainer}>
                <Header />
                <div style={contentContainer}>
                    <Outlet />
                </div>
            </div>
            
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
    backgroundColor: "#101010"
}

const contentContainer: React.CSSProperties = {
    overflowY: 'auto',
    padding: '25px',
    flexGrow: 1,
}