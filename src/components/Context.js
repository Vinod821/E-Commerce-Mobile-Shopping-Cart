import React, { Component, createContext } from 'react';
import { storeProducts } from '../Data'
import { detailProduct } from '../Data'

export const context = createContext()

export class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id == id);
        return product;
    }

    componentDidMount() {
        debugger;
        this.setProducts()
    }

    setProducts = () => {
        debugger;
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })

        this.setState({
            products: tempProducts
        });


    }

    increment = (id) => {
        debugger;
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id == id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        debugger;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            };

        }, () => {
            this.addTotals();
        })


    }

    decrement = (id) => {
        debugger;
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id == id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        debugger;
        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id)
        }
        else {
            product.total = product.count * product.price;
        }

        this.setState(() => {
            return {
                cart: [...tempCart]
            };

        }, () => {
            this.addTotals();
        })


    }

    removeItem = (id) => {
        debugger;
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));

        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;

        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        })


    }

    clearCart = () => {
        debugger;
        this.setState(() => {
            return {
                cart: []
            }
        },
            () => {
                this.setProducts();
                // this.addTotals();
            }

        )

    }

    addTotals = () => {
        let subTotal = 0;
        debugger;
        this.state.cart.map(item => (subTotal += item.total));
        debugger;
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
    }

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState({

            modalProduct: product,
            modalOpen: true

        })
    }

    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false
            }
        })
    }

    handleDetail = (id) => {
        debugger;
        console.log("id", id)
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })

    }

    addToCart = (id) => {
        debugger;
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {
                cart: [...this.state.cart, product]
            }
        }, () => {
            console.log(this.state)
            this.addTotals();
        }

        )

        // this.openModal(id);

    }
    render() {
        return (
            <context.Provider value={
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    clearCart: this.clearCart,
                    removeItem: this.removeItem,
                }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export default ProductProvider