import { useState } from "react"
import { useSelector } from "react-redux"
import './userfound.css'


const Userfound = ({a}) => {

  var data = useSelector((state) => state.cReducer.cart)

    var Amount =data?.reduce((a, b) => {
        return a + (b.quantity * b.price)
    }, 0)
   
  return (
    <div>
      <div className="receipt-wrapper">
        <div className="receipt-card">

                        <div className="receipt-header">
                            Receipt
                        </div>

                        <div className="receipt-row">
                            <span className="receipt-label">
                                Customer Name
                            </span>

                            <span className="receipt-value">
                                {a.name}
                            </span>
                        </div>

                        <div className="receipt-row">
                            <span className="receipt-label">
                                Membership
                            </span>

                            <span className="receipt-value">
                                {a.membership}
                            </span>
                        </div>
                        <div className="receipt-row">
                            <span className="receipt-label">
                                Total Amount
                            </span>

                            <span className="receipt-value">
                                {Amount}
                            </span>
                        </div>

                        <div className="receipt-row">
                            <span className="receipt-label">
                                Discount
                            </span>

                            <span className="receipt-value">
                                {a.discount}%
                            </span>
                        </div>

                        <div className="receipt-row final-row">
                            <span className="receipt-label">
                                Final Amount
                            </span>

                            <span className="final-amount">
                                {(Amount * ((100 - a.discount) / 100)).toFixed(2)}
                            </span>
                        </div>

                        <div className="pay-button-container">
                            <button className="payment-btn pay-now-btn">
                                Pay Now
                            </button>
                        </div>

                    </div>
            </div>
    </div>
  )
}

export default Userfound
