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
        <div>
            <form>
                <input required minLength={3} maxLength={20}  type="text" placeholder="Name" value={buyerName} onChange={handleName}/>
                <input required minLength={3} maxLength={30}  type="email" placeholder="Email" value={buyerEmail} onChange={handleEmail}/>
                <input required minLength={3} maxLength={30}  type="email" placeholder="Repeat email" value={buyerEmailRepeated} onChange={handleEmailRepeated}/>
                <input required minLength={3} type="number" placeholder="Phone" value={buyerPhone} onChange={handlePhone}/>
                <button disabled={cartStorage.length <= 0} onClick={() => buy(buyerName, buyerEmail, buyerEmailRepeated, buyerPhone)}>Confirm purchase</button>
            </form>
            <Link to={"/"}>HOME</Link>
        </div>
    );
};

export default Checkout;