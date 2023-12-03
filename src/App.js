import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import { FaMapMarkerAlt,FaDonate } from 'react-icons/fa';
import Web3 from "web3";
import ABI from "./Roxw.json";
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [reviews, setReviews] = useState([]); 
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [connected,setConnected]=useState(true);
  const[chef,setChef]=useState({});
  const[description,setDescription]=useState("");
  const [ethAmount, setEthAmount] = useState('');
  const[fb,setFb]=useState("");
  const[insta,setInsta]=useState("");
  const[twitter,setTwitter]=useState("");
  const [state,setState]=useState({
    web3:null,
    contract:null
  })
  const init =async()=>{
    try{
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({method:'eth_requestAccounts'});
      const contract = new web3.eth.Contract(
          ABI,
          "0xe6E9e1aAEE0446f23BbDA2E431A9F64FaC9c8670"
      );
       setConnected(false);
       console.log(contract);
       setState({web3:web3,contract:contract});
    }catch(error){
      alert("Please Install Metamask");
    }
      
    }
    const donateEth=async(event)=>{
      event.preventDefault();
      
      try{
          
          const eth = document.querySelector("#eth").value;
          const weiValue=state.web3.utils.toWei(eth,"ether");
          const accounts = await state .web3.eth.getAccounts();
          await state.contract.methods.donate().send({from:accounts[0],value:weiValue,gas:480000});
          alert("Transaction Succesful");
      }
      catch(error){
        alert("Transaction Not Succesful");
     }
       }
  useEffect(() => {
    axios.get("http://localhost:3001/api/restaurants")
      .then((response) => {
        setName(response.data.restaurant.name);
        setLocation(response.data.restaurant.location.address);
        setChef(response.data.restaurant.chef)
        setDescription(response.data.restaurant.ambiance.description);
        setFb(response.data.restaurant.online_presence.social_media.facebook);
        setInsta(response.data.restaurant.online_presence.social_media.instagram);
        setTwitter(response.data.restaurant.online_presence.social_media.twitter);
        console.log(description);
        console.log(response.data.restaurant.chef)
      
        
        
        const simplifiedMenu = response.data.restaurant.menu.categories.map((category) => ({
          name: category.name,
          items: category.items.map((item) => ({
            name: item.name,
            description: item.description,
            price: item.price
          })),
        }));
        setMenuItems(simplifiedMenu);

       
        const simplifiedReviews = response.data.restaurant.reviews.map((review) => ({
          customer_name: review.customer_name,
          rating: review.rating,
          comment: review.comment
        }));
        setReviews(simplifiedReviews);

        console.log(simplifiedReviews); 
        
       
      })

      
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  

  return (
    <div>

<div className="navbar">
     <div className="brand" style={{ fontSize: '1.5em', marginBottom: '0', fontFamily: 'YourCoolFont, sans-serif' }}>{name}</div>
     <button className="connectBTN" onClick={init} disabled={!connected}>{connected ? "Connect Metamask" : "Connected" }</button>
        <div className="links">
        <a href={`https://www.google.com/maps/place/${location}`} target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt />
       
      </a>
          <a href={`${fb}`}target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href={`${insta}`}target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href={`${twitter}`}target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
        <div className="project-intro" style={{ textAlign: 'center', marginTop: '0px', padding: '100px', backgroundColor: 'black', backgroundImage: 'url("https://c1.wallpaperflare.com/preview/503/206/378/fire-chilli-paprika-food.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <h1 style={{ color: 'white', fontSize: '6.5em', marginBottom: '0', fontFamily: 'YourCoolFont, sans-serif' }}>{name}</h1>
        <h2 style={{ color: 'white', fontSize: '1.5em', marginBottom: '0', fontFamily: 'YourCoolFont, sans-serif' }}>{description}</h2>
      </div>

      <div className="project-section">
        <h1>Our Top 3 Items</h1>
        <div className="card-wrapper">
        
        
        <div className="project-card">
          <div className="card-img">
            <img src={"https://bloximages.chicago2.vip.townnews.com/idahopress.com/content/tncms/assets/v3/editorial/6/a5/6a515073-f3ed-57d3-9090-01700ab50f60/5f10bdb89d094.image.jpg?crop=1662%2C1247%2C0%2C0&resize=1662%2C1247&order=crop%2Cresize"} alt="" />
          </div>
          <div className="card-text">
            <h3>Truffle Butter Escargot</h3>
          </div>
        </div>

        <div className="project-card">
          <div className="card-img">
            <img src={"https://i.redd.it/cafe-spice-chicken-tikka-masala-with-saffron-rice-v0-ef8h738a0u0b1.jpg?width=518&format=pjpg&auto=webp&s=b0be048a51a3cb5de1301daae276bdddcb47d982"} alt="" />
          </div>
          <div className="card-text">
            <h3>Saffron-Spiced Chicken Tikka Masala</h3>
          </div>
        </div>

        <div className="project-card">
          <div className="card-img">
            <img src={"https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/12/19/1/CCUTG308_Hazelnut-Chocolate-Birthday-Cake-with-Vanilla-Ice-Cream-Figs-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1374701067711.jpeg"} alt="" />
          </div>
          <div className="card-text">
            <h3>Chocolate Hazelnut Decadence</h3>
          </div>
        </div>
      </div>
  </div>
  <div className="chef-container">
        <h1>Meet our Chef</h1>
        <div className="card-wrapper">
          
           <div className="project-card">
          
          <div className="card-img">
            <img src={"https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=612x612&w=0&k=20&c=ZtYaFLtiRkuA6mQ8HK05xjZNvpb4ev2BS9g2Uc6mdww="} alt="" />
          </div>
          <div className="card-text">
            <h2 style={{textAlign: 'center'}}>{chef.name}</h2>
            
          
          </div>
        </div>
        </div>

      </div>
     

      <div className="menu-container">
        <h1>Restaurant Menu</h1>
        {menuItems.map((category, index) => (
          <div className="menu-category" key={index}>
            <h2>{category.name}</h2>
            <div className="menu-category-wrapper">
              {category.items.map((item, itemIndex) => (
                <div className="project-card menu-item" key={itemIndex}>
                  <div className="card-text">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
          <form onSubmit={donateEth}>
      <label >
      NOW ACCEPTING CRYPTOCURRENCY
    </label>
        <input
          id="eth"
          type="text"
          value={ethAmount}
          onChange={(e) => setEthAmount(e.target.value)}
          placeholder="0.0"
        />
     
      <button type="submit">Pay</button>
    </form>

      </div>


      
     

     
      <div className="reviews-container">
        <h1>Customer Reviews</h1>
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <h3>{review.customer_name}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}

  
      </div>

    
    </div>
  );
}

export default App;
