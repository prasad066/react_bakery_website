import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useAdduserMutation,
  useLazyGetAllusersQuery,
} from "../../services/usersApi";
import { Link } from "react-router-dom";
import './usernotfound.css'


const Usernotfound = () => {
  var [adduser] = useAdduserMutation();
  var [rld] = useLazyGetAllusersQuery();

  var dispatch = useDispatch();
  var [data, setdata] = useState({
    name: "",
    phone: "",
    membership: "",
    discount: "",
  });
  return (
    <div>
      <div className="registration-wrapper">
        <div className="registration-card">
          <div className="form-header">
            <h2>User not found</h2>
            <p>Please enter your details to register</p>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              className="form-input"
              type="text"
              onChange={(e) => {
                setdata({
                  ...data,
                  name: e.target.value,
                });
              }}
            />
          </div>

          

          <div className="form-group">
            <label>Phone</label>
            <input
              className="form-input"
              type="text"
              onChange={(e) => {
                setdata({
                  ...data,
                  phone: e.target.value,
                });
              }}
            />
          </div>

          

          
          <div className="form-group">
            <label>Membership</label>

            <select
              className="form-input membership-select"
              onChange={(e) => {
                setdata({
                  ...data,
                  membership: e.target.value,
                });
              }}
            >
              <option selected disabled>
                Select membership
              </option>

              <option value="Permium">Premium</option>

              <option value="Gold">Gold</option>

              <option value="Silver">Silver</option>

              <option value="Basic">Basic</option>
            </select>
          </div>

          <div className="form-group">
            <label>Discount</label>

            <input
              className="form-input"
              type="text"
              onChange={(e) => {
                setdata({
                  ...data,
                  discount: e.target.value,
                });
              }}
            />
          </div>

          <div className="register-button-container">
            <Link to="/regstatus">
              <button
                className="payment-btn register-btn"
                onClick={() => {
                  adduser(data).then(() => {
                    rld();
                  });
                }}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usernotfound;
