import React from "react";
import "./featuredproperties.scss"


const FeaturedProproperties = function () {

    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://images.unsplash.com/photo-1557296869-e9a76501a0d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span className="fpName">ApartHotel State Miastro</span>
                <span className="fpCity">Madrid</span>
                <span className="fprice">Starting from $120</span>

                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

             <div className="fpItem">
                <img src="https://plus.unsplash.com/premium_photo-1694030762810-06f5b9906cbc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span className="fpName">ApartHotel State Miastro</span>
                <span className="fpCity">Madrid</span>
                <span className="fprice">Starting from $120</span>

                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

        <div className="fpItem">
            <img src="https://images.unsplash.com/photo-1621465558419-1deb2e51b530?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span className="fpName">ApartHotel State Miastro</span>
            <span className="fpCity">Madrid</span>
            <span className="fprice">Starting from $120</span>

            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
    )

}

export default FeaturedProproperties