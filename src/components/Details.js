import React, { Component } from 'react';
import { context } from './Context'
import Product from './Product';
import { storeProducts } from '../Data'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button';

export class Details extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <context.Consumer>
                {value => {
                    const { id, price, title, img, info, inCart, company } = value.detailProduct;

                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">

                                    <img src={"/" + img} className="img-fluid" alt="product" />
                                </div>

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model:{title} </h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by: <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price:<span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product:</p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back to Products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer onClick={()=>{value.addToCart(id);value.openModal(id)}} cart disabled={inCart ? true : false}>
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }}
            </context.Consumer>
        )

    }

}
export default Details