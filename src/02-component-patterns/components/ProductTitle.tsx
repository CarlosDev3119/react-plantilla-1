import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from  '../styles/styles.module.css';

export interface PropsTitle {
    className?:string;
    title?: string;
    activeClass?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: PropsTitle) => {
    
    const { product } = useContext(ProductContext);
    
    return (
        <span 
            className={ `${styles.productDescription} ${ className }`  }
            style={style}
        >
            { title ? title : product.title }</span>

    )
}
