import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Play from './components/play/Play.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Root from './components/root/Root.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Navigate to={"/"}/> // temporary
    },
    {
        path: "/play/:deck",
        element: <Play />,
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
