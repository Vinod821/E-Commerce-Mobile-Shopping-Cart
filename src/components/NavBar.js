import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button'


export class NavBar extends Component {

    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                    <Link to="/" className="navbar-brand">
                        <span className="margin"><i className="fa fa-home fa-2x"></i></span>

                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">

                            <Link to="/" className="nav-link">
                                <h4 className="margin">Products</h4>
                            </Link>


                        </li>
                    </ul>

                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fa fa-cart-plus" />&nbsp;
                                 my cart 
                            </span>
                        </ButtonContainer>
                    </Link>

                </NavWrapper>



            </div>
        )
    }

}

export default NavBar


const NavWrapper = styled.nav`
background:var(--mainBlue);

.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize !important
}

`


