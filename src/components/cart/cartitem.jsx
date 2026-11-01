import { useDispatch, useSelector } from 'react-redux'
import { additem, delitem } from './cartitems'
import './cartitems.css'
import { Link } from 'react-router-dom'

const Cartitems = () => {

    var data = useSelector((state) => state.cReducer.cart)

    var Amount = data?.reduce((a, b) => {
        return a + (b.quantity * b.price)
    }, 0)

    var dispatch = useDispatch()

    return (
        <div className="shopping-cart">

            <div className="shopping-cart-list">

                {
                    data?.map((d) => {
                        return (

                            <div
                                className="shopping-cart-item"
                                key={d.id}
                            >

                                {/* Product Details */}

                                <div className="cart-product-details">

                                    <div className="cart-product-image-box">
                                        <img
                                            className="cart-product-image"
                                            src={d.imageSrc}
                                            alt={d.name}
                                        />
                                    </div>

                                    <div className="cart-product-info">

                                        <div className="cart-product-name">
                                            {d.name}
                                        </div>

                                        <div className="cart-product-weight">
                                            {d.weight}
                                        </div>

                                        <div className="cart-product-price">
                                            ${d.price}
                                        </div>

                                        <div className="cart-product-stock">
                                            {d.inStock}
                                        </div>

                                        <div className="cart-product-type">

                                            {
                                                d.isVegetarian
                                                    ? <div className="veg-symbol"></div>
                                                    : <div className="nonveg-symbol"></div>
                                            }

                                        </div>

                                    </div>

                                </div>


                                {/* Quantity Controls */}

                                <div className="cart-quantity-area">

                                    <button
                                        className="cart-quantity-btn cart-minus-btn"
                                        onClick={() => {
                                            dispatch(delitem(d))
                                        }}
                                    >
                                        -
                                    </button>

                                    <div className="cart-quantity-number">
                                        {d.quantity}
                                    </div>

                                    <button
                                        className="cart-quantity-btn cart-plus-btn"
                                        onClick={() => {
                                            dispatch(additem(d))
                                        }}
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                        )
                    })
                }

            </div>


            {/* Total */}

            <div className="cart-summary">

                <div className="cart-total-label">
                    Total Amount:
                </div>

                <div className="cart-total-value">

                    <span>
                        {
                            Amount == 0
                                ? ""
                                : `$${Amount.toFixed(1)}`
                        }
                    </span>
                    <Link to='/paymentdetails'><button>Buy</button></Link>
                    

                </div>

            </div>

        </div>
    )
}

export default Cartitems