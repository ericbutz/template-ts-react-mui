// src/routes.ts

// pages
import Home from "./pages/Docs";
import About from "./pages/About";
import Products from "./pages/Products";

// other
import {FC} from "react";

/**
 * Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. 
 * Classes that are derived from an interface must follow the structure provided by their interface.
 * 
 * The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. 
 * This is also known as "duck typing" or "structural subtyping".
 * Duck typing is used to confirm an object supports all of the signatures and attributes as defined in the interface
 */
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

// An array is a special type of data type which can store multiple values of different data types sequentially
// Uses generic array type Array<elementType> to typecheck the elements in the array
export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Marketplace',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    }
]