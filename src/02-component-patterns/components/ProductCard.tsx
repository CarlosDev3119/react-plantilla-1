import { useProduct } from '../hooks/useProduct';

import styles from  '../styles/styles.module.css';

import { createContext, CSSProperties, ReactElement } from 'react';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}





export const ProductCard = ({ children, product, className, style, onChange, value, initialValues}: Props) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct( { onChange, product, value, initialValues } );

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            
            <div 
                className={ `${styles.productCard} ${ className }` }  
                style={ style }    
            >
                {  
                    children({
                        count: counter,
                        isMaxCountReached,
                        reset,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy
                    })

                }

            </div>
        </Provider>
    )
}


