import React, { useEffect, useState } from "react"
import styles from "./cart.module.css"
import Button from "../Button";
import { Total } from "./Total";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const OrderSummary = ()=>{
    const navigate = useNavigate()
    const [cartData,setCartData] = useState([]);
    const state=useSelector((state)=>state);
    const button = {
        bg: "#ff6f61",
        text: "PROCEED TO PAYMENT",
        width: "100%",
        br: "0px",
        color: "#ffffff",
        height: "50px",
        fontSize: "18px",
      };
      useEffect(()=>{
        getcart()
      
      },[])

      function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

      async function displayRazorpay(order)
      {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

        //adding
        fetch("https://rzpwing.herokuapp.com/order/pay")
.then((res)=>res.json())
.then((data)=>{

    var options = {
    "key": data.key, // Enter the Key ID generated from the Dashboard
    "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": order, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://rzpwing.herokuapp.com/summary",
        "handler": async function (response){

let myobj={order_id:order,pay:response.razorpay_payment_id}
let res2=await fetch("https://rzpwing.herokuapp.com/verify/payment",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(myobj)
})
let data22=await res2.json()
  if (data22.generatedSignature == response.razorpay_signature) {

    localStorage.removeItem('subtotal');
    alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
        alert("Order placed successfully")
        navigate("/")
  }
  else
  {
    alert("payment not from authentic source")
  }
    },

    "prefill": {
        "name": `${state.username}`,
        "email": `${state.username}@example.com`,
        "contact": "918742254321"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
//     "handler": async function (response){

// let myobj={order_id:order,pay:response.razorpay_payment_id}
// let res2=await fetch("http://localhost:8080/verify/payment",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify(myobj)
// })
// let data22=await res2.json()
//   if (data22.generatedSignature == response.razorpay_signature) {

//     alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature)
//   }
//   else
//   {
//     alert("payment not from authentic source")
//   }
//     },
    

//     "notes": {
//         "address": "Razorpay Corporate Office"
//     },
//     "theme": {
//         "color": "#3399cc"
//     }
};
var rzp1 = new window.Razorpay(options)
rzp1.open()
 }) }
        const getcart = ()=>{
          axios.get(`https://unit-6projectbackend.herokuapp.com/getcart/${state.username}`).then(({data})=>{
              setCartData(data.data[0].cats)
              console.log(data.data[0].Total,"tottal")
          })
        }
        console.log(cartData)
    return (
        <div className={styles.summarymain}>
             <div className={styles.summary}>
                 <p>Order Summary</p>
                 <p>Your Items</p>
                 {cartData.map((ele)=>(
                 <div>
                       <div className={styles.summary1}>
                          Arriving by Wed, 27 Jul info
                       </div>
                       <div className={styles.summary2}>

                         <div className={styles.choose2}>
                             <img height="45px" width="40px" src={ele.imageUrl}/>
                             <div>
                                 <p>{ele.productName}</p>
                                 <p>{ele.shortDesc}</p>
                             </div>
                          </div>
                          <div>
                              <p>{ele.price}</p>
                              <s>MRP{ele.strikedPrice}</s>
                              <p>NeuCoins earned: 6</p>
                          </div>
                       </div>
                     
                 </div>
                  ))} 
             </div>
            
             <div className={styles.rightsummary}>
                 <p>Select Address</p>
                 <div className={styles.choosedata}>
                    <div className={styles.addressdata1}>
                      <div>
                         <img width="30px" src="https://image.shutterstock.com/image-vector/screen-record-button-isolated-on-600w-1457333453.jpg"/>
                         <p>Home</p>
                      </div>
                      <p>nagesh kumawat</p>
                      <p>1234567890</p>
                      <p>Address</p>
                      <p>Ratlam Madhya pradesh-457339</p>
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
                        </div>
                 </div>
                   <Total/>
                    <div onClick={()=>{
                                let r = (Math.random() + 1).toString(36).substring(7);

                                let amount=state.cartdata.reduce((red,ele,ind)=>{
                                    return red+ele.price
                                },0)
                                console.log(amount,"amount")
                                let obj={amount:(amount-(amount*0.15))*100,currency:"INR",receipt:r}
                        
                                fetch("https://rzpwing.herokuapp.com/order/create",{
                                    method:"POST",
                                    headers:{
                                        "Content-Type":"application/json"
                                    },
                                    body:JSON.stringify(obj)
                                })
                                .then((res)=>res.json())
                                .then((data)=>{
                                    if(!data)
                                    {
                                        alert("something went wrong please try later")
                                        return
                                    }
                                    console.log(data,"this")

                                    displayRazorpay(data.data.id)
                                })
                    }} className={styles.proceed}>
                            <Button styles={button}/>
                    </div>
               </div>
        </div>
    )
}