import React, { Component, Fragment } from 'react';
import { storeProducts } from '../Data';
import { Title } from './Title';
import { context } from './Context';
import  Product  from './Product'

export class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <context.Consumer>
                                {props => {
                                    return props.products.map(product => {

                                        return <Product key={product.id} product={product} />

                                    })
                                }
                                }

                            </context.Consumer>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default ProductList