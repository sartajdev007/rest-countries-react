import { createBrowserRouter } from "react-router-dom";
import Countries from "../components/Countries/Countries";
import Country from "../components/Country/Country";
import Home from "../components/Home/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/countries',
        loader: async () => {
            return fetch('https://restcountries.com/v3.1/all')
        },
        element: <Countries></Countries>
    },
    {
        path: '/country/:name',
        loader: async ({ params }) => {
            return fetch(`
            https://restcountries.com/v3.1/name/${params.name}`)
        },
        element: <Country></Country>
    }
])