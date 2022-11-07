import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent =  () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

export const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */"../01-lazyload/layout/LazyLayout") );
export const Lazy2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */"../01-lazyload/pages/LazyPage2") );
export const Lazy3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */"../01-lazyload/pages/LazyPage3") );


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
    
];