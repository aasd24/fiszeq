import { Link } from "react-router";
import { font } from "../../styles/font";
import { LogoFont } from "../../styles/logoFont"
import preventTextSelect from "../../styles/preventSelect";

type TRoute = {
    name: string,
    route: string,
    icon: JSX.Element
}

type TRoutes = TRoute[];

const routes: TRoutes = [
    {
        name: "Decks",
        route: "view",
        icon: <svg height={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" /></svg>
    },
    {
        name: "Edit",
        route: "edit",
        icon: <svg height={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
    },
    {
        name: "Library",
        route: "library",
        icon: <svg height={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>
    }
];


export default function Sidebar() {
    return (
        <div style={sidebar}>
            <div style={logo}>
                <img height={"50px"} src={"logo.png"} /> 
                fiszeq
            </div>
            <div style={buttons}>
                {routes.map((route, index) => (
                    <Route key={index} routeData={route}/>
                ))}
            </div>
        </div>
    )
}

interface IRouteProps {
    routeData: TRoute,
    key: number,
}

function Route({routeData, key}: IRouteProps) {
    return (
        <Link style={button} key={key} to={routeData.route}>
            {routeData.icon}
            {routeData.name}
        </Link>   
        
    )
}

// Styles

const sidebar: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '35px',
    backgroundColor: '#151515',
    backgroundImage: 'radial-gradient(#191919 10%, transparent 15%)',
    backgroundSize: '25px 25px',
    zIndex: 2,
    height: '100vh',
    minWidth: '15vw',
    margin: 0,
    borderRight: '2px solid #212121'
}

const button: React.CSSProperties = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '0px 15px',
    color: '#cccccc',
    height: '60px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    backgroundColor: '#21212180', 
    fontSize: '1.5rem',
    boxShadow: '1px 1px 4px #00000010',
    ...font,
    ...preventTextSelect,
}

const buttons: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    padding: '15px',
}

const logo: React.CSSProperties = {
    height: '10vh',
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-evenly",
    fontSize: '3rem',
    color: '#1a76ff',
    padding: '0 25px',
    boxSizing: 'border-box',
    ...LogoFont,
    ...preventTextSelect,
}