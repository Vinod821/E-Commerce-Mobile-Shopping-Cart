import React, { Component } from 'react';
import { context } from './Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button';

export default class Modal extends Component {
    render() {
        return (
            <context.Consumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, price, title } = value.detailProduct;
                      debugger;
                    if (!modalOpen) {
                        return null;
                    }

                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-0">
                                            item added to the cart
                                   <img src={"/" + img} className="item-fluid" alt="product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price: $ {price}</h5>

                                            <Link to="/">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    Back
                                                </ButtonContainer>
                                            </Link>


                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={() => closeModal()}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>


                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </context.Consumer>
        )
    }
}




const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite)
}
`