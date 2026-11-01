import { useGetAllusersQuery} from "../../services/usersApi"
import { useState } from "react"
import './payinf.css'
import Userfound from "./userfound"
import Usernotfound from "./usernotfound"



const Payinf = () => {
    var [ph,setph]=useState()
    var{isLoading,data}=useGetAllusersQuery()
    var [match,setmatch]=useState(null)
    var [matching,setmatching]=useState(false)
    function check(){
        const condition=data?.find((d)=>d.phone==ph)
        setmatch(condition || null)
        setmatching(true)

    }
    return (
        <div className="payment-container">
            <div className="payment-search-card">
                <div className="payment-title">
                    Enter Details
                </div>

                <div className="phone-search">
                    <input
                        className="phone-input"
                        type="text"
                        placeholder="Enter your phone number"
                        value={ph}
                        onChange={(e) => {
                            setph(e.target.value)
                        }}
                        />

                    <button
                        className="payment-btn search-btn" 
                        onClick={()=>{check()}}>
                        Get payment details
                    </button>
                </div>
            </div>
            <div>
                {
                    matching && match && 
                    <Userfound a={match}></Userfound>
                }
            </div>
            <div>
                {
                    matching && !match && <Usernotfound></Usernotfound>
                }
            </div>
            </div>
    )
}

export default Payinf