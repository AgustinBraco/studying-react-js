import "./checkout.css";
import { useState, useContext } from "react";
import { Context } from "../../context";

// Router
import { Link } from "react-router-dom";

function Checkout() {
    const { buy, cartStorage } = useContext(Context);

    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyerEmailRepeated, setBuyerEmailRepeated] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");

    function handleName(event) {
        setBuyerName(event.target.value);
    };
    
    function handleEmail(event) {
        setBuyerEmail(event.target.value);
    };

    function handleEmailRepeated(event) {
        setBuyerEmailRepeated(event.target.value);
    };

    function handlePhone(event) {
        setBuyerPhone(event.target.value);
    };

    return (
        <div className="checkoutContainer">
            <form className="form">
                <input required minLength={3} maxLength={20}  type="text" placeholder="Name" value={buyerName} onChange={handleName} className="inputName"/>
                <input required minLength={3} maxLength={30}  type="email" placeholder="Email" value={buyerEmail} onChange={handleEmail} className="inputEmail"/>
                <input required minLength={3} maxLength={30}  type="email" placeholder="Repeat email" value={buyerEmailRepeated} onChange={handleEmailRepeated} className="inputEmail"/>
                <input required minLength={3} type="number" placeholder="Phone" value={buyerPhone} onChange={handlePhone} className="inputPhone"/>
                <button disabled={cartStorage.length <= 0} onClick={() => buy(buyerName, buyerEmail, buyerEmailRepeated, buyerPhone)} className="buyButton">CONFIRM PURCHASE</button>
            </form>
            <Link to={"/cart"} className="checkoutCartLink">
                <img 
                src="/assets/images/bag.png" 
                alt="bag-image" 
                className="checkoutBagImage"/>
                <p>Return to cart</p>
            </Link>
        </div>
    );
};

export default Checkout;