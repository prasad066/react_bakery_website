
import { Link } from "react-router-dom";
import "./registered.css";

const Registered = () => {
    return (
        <div className="registered-container">

            <div className="registered-card">

                <img
                    className="registered-image"
                    src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_640,h_640/https://cttb.education/wp-content/uploads/2022/10/CRP-6-Registration-successful.jpg"
                    alt="Registration successful"
                />

                <h1 className="registered-title">
                    Registration Successful
                </h1>

                <Link to="/paymentdetails">
                    <button className="registered-btn">
                        Back to Payment
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default Registered;