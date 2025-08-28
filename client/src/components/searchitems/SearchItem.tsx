import React from "react";
import "./searchItem.scss"


const SearchItem = function () {
    return (
        <div className="searchItem">
            <img src="https://images.unsplash.com/photo-1621465558419-1deb2e51b530?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="searchItemImg" />
            <div className="searchItemDesc">
                <h1>Tower Street Apartments</h1>
                <span className="searchItemDistance">500m from center</span>
                <span className="searchItemTaxiOp">500m from center</span>
                <span className="searchItemSubtitle">
                    Studio Apartment with Air conditionning
                </span>
                <span className="searchItemFeatures">
                    Entire Studio - 1 bathroom - 21m 1 full bed
                </span>
                <span className="searchItemCancelOp">Free cancellation</span>
                <span className="searchItemCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemDetails">
                    <div className="searchItemRating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>
                    <div className="searchItemDetailsTexts">
                        <span className="searchItemPrice">
                            2100 XAF
                        </span>
                        <span className="searchItemTaxiOp">
                            Includes taxes and fees
                        </span>
                        <button className="searchItemCheckButton">See availability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SearchItem