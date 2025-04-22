import { Location, useLocation } from "react-router";

export default function usePath() {
    const location: Location = useLocation();
    const path: Array<string> = location.pathname.slice(1, location.pathname.length).split("/");

    return path;
}