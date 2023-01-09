import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from  '../styles/styles.module.css';

export interface PropsButtons {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }:PropsButtons) => {
    
    //TODO maxCount
    const {increaseBy, counter, maxCount } = useContext( ProductContext );
    
    //todo isMaxReached useCallback
    const isMatchReach = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )
    
    
    return (
        <div 
            className={ `${styles.buttonsContainer} ${className}` }
            style={ style }
        >
                <button
                    className={ styles.buttonMinus }
                    onClick={ () => increaseBy( -1 ) }
                > - </button>

                <div className={ styles.countLabel }> {counter} </div>
                <button
                    className={ `${styles.buttonAdd} ${ isMatchReach() && styles.disabled } ` }
                    onClick={ () => increaseBy( 1 ) }
                    disabled={isMatchReach() && true}
                > + </button>
        </div>
    )
}