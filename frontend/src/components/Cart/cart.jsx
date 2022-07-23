import React, { useEffect, useState } from "react";
import Button from "../Button";
import styles from "./cart.module.css";
import axios from "axios";
import { Total } from "./Total";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const [count, setCount] = useState(1);
  const [cartData,setCartData] = useState([]);
  const [total,setTotal] = useState([])
  const state=useSelector((state)=>state);
  const [obj,setObj] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const button = {
    bg: "#ff6f61",
    text: "CHECKOUT",
    width: "98%",
    br: "0px",
    color: "#ffffff",
    height: "50px",
    fontSize: "18px",
  };
useEffect(()=>{
  getcart()
  setObj({...obj});
  //call()
},[])
  const getcart = ()=>{
    axios.get(`https://unit-6projectbackend.herokuapp.com/getcart/${state.username}`).then(({data})=>{
        setCartData(data.data[0].cats)
        console.log(data.data[0].Total,"tottal inital")
    })
  }
  const handleCheckout = ()=>{
       navigate("/address")
  }
  const handleIncre = (price)=>{
  

  }

  const handleDecr = (price)=>{
    setCount(count-1);
 
 }
// console.log(total)


  var subTotal = cartData.reduce(function (acc, elem) {
    return acc + elem.price * count;
  }, 0);
  
  return (
    <div className={styles.Main}>
      <div className={styles.leftcart}>
        <div>
          <p>Items NOT Requiring Prescription (1)</p>
          {cartData.map((el)=>(
          <div key={el._id} className={styles.cartdata}>
            <div>
              <h3>{el.productName}</h3>
              <h3>{(el.price*count)}</h3>
            </div>
            <div>
              <p>{el.shortDesc}</p>
              <s>MRP{el.strikedPrice}</s>
            </div>
            <div>
              <div onClick={()=>
              axios.post("https://unit-6projectbackend.herokuapp.com/removequant",
              {_id:el._id,username:state.username,obj:obj})
              .then((data)=>{
                setCartData(data.data[0].cats);
              })
              } 
              
              className={styles.deleteCart}>
                <img
                  width={"20px"}
                  src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                />
                <p>Remove</p>
              </div>

              <div className={styles.deletecart}>
                <img
                  onClick={() =>handleDecr(el.price)}
                  src="https://www.1mg.com/images/minus-cart.svg"
                />
                <p>{count}</p>
                <img
                    onClick={() =>   setCount(count+1)
                    
                    }
                  src="https://www.1mg.com/images/plus-cart.svg"
                />
              </div>
            </div>
          </div>
           ))}
        </div>
       
      </div>
      <div className={styles.rightcart}>
        <div className={styles.careplan}>
          <img
            width={"100px"}
            src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
          />
          <p>You can save extra ₹74 on this order</p>
          <h4>Become a member</h4>
          <p>Care plan membership ₹165 ₹549 / 3 months</p>
          <div className={styles.knowmore}>
            <div>
              <p>Know More</p>
            </div>
            <div>
              <p>Add to cart</p>
            </div>
          </div>
          <hr />
          <div className={styles.coupon}>
            <div>
              <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg" />
              <h4>Apply Coupon</h4>
            </div>
            <div>
              <img
                width="25px"
                heigth="25px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90vvlMUz57tkjGsbZaZ-wpfjur6Epkp_6Pg&usqp=CAU"
              />
            </div>
          </div>
        </div>
        <div className={styles.health}>
          <div>
            <p>Check the health of your vital organs</p>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Book Good Health Silver Package for just ₹649
            </label>
            <p>
              Get the tests done easily from your home. This package will help
              you in identifying potential disorders and deficiencies at an
              early stage.
            </p>
            <p>Pay later on home sample collection</p>
          </div>
        </div>
        <div className={styles.coins}>
          <div className={styles.coinsdata}>
            <div>
              <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png" />
              <p>My NeuCoins</p>
            </div>
            <div>
              <p>Balance: 0 NeuCoin</p>
            </div>
          </div>
          <hr />
          <div className={styles.neucoins}>
            <p>35 NeuCoins to be earned on this order*</p>
            <p>cp Extra 87 NeuCoins for care Plan members</p>
            <p>Add care plan to cart</p>
          </div>
        </div>
        <div><Total total={subTotal}/></div>
        <div className={styles.deliverylocation}>
          <div className={styles.location}>
            <p>Your delivery location</p>
            <p>Ratlam</p>
          </div>
          <div className={styles.location1}>
              <Button styles={button} onClick={handleCheckout}/>
          </div>
        </div>
      </div>
    </div>
  );
};
