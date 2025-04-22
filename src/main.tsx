import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, Navigate, RouterProvider } from 'react-router'

import Play from './components/play/Play.tsx'
import Root from './components/root/Root.tsx'
import View from './components/root/view/View.tsx'
import Home from './components/root/home/Home.tsx'
import Edit from './components/root/edit/Edit.tsx'
import Library from './components/root/library/Library.tsx'
import ViewDeck from './components/root/view/ViewDeck.tsx'

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Navigate to={"/"}/>, // temporary
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/view",
                element: <View />,
            },
            {
                path: "/view/:deck",
                element: <ViewDeck />
            },
            {
                path: "/edit",
                element: <Edit />,
            },
            {
                path: "/library",
                element: <Library />
            }
        ]
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
