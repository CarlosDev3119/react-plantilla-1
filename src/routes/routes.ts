import { LazyExoticComponent, Suspense, lazy } from "react";
import { LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
}



const Lazy1 = lazy( () => import(/*webpackChunkName: "LazyPageNew1"*/ '../lazyload/pages/LazyPage1') );
const Lazy2 = lazy( () => import(/*webpackChunkName: "LazyPageNew2"*/ '../lazyload/pages/LazyPage2') );
const Lazy3 = lazy( () => import(/*webpackChunkName: "LazyPageNew3"*/ '../lazyload/pages/LazyPage3') );



export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'Lazy-3'
    },

];