import React, { Component } from 'react';
import { Title } from '../Title';
import { CartColumns } from './CartColumns';
import { EmptyCart } from './EmptyCart';
import { context } from '../Context';
import { CartList } from './CartList';
import { CartTotals } from './CartTotals'


export class Cart extends Component {
    render() {
        return (

            <section>
                <context.Consumer>

                    {value => {
                        const { cart } = value;
                        debugger;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history} />
                                </React.Fragment>
                            )

                        }
                        else {

                            return (
                                <EmptyCart />
                            )

                        }
                    }}

                </context.Consumer>
            </section>


        )
    }
}

export default Cart