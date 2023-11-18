import React , {useState} from 'react'
import {Modal} from 'react-bootstrap' 
import items from '../fooditems'
import axios from 'axios';

//const { MongoClient } = require("mongodb");

// var data = {"roti":"20"}
// data = JSON.parse(JSON.stringify(data));
// db.collection("Orders").insertOne(data,(err,collection)=>{
//     if(err)
//     {
//         throw err
//     }
//     console.log("data inserted");
// })

export default function Item({item}){
    // const { MongoClient } = require("mongodb");
    const [quantity,setquantity]=useState(1)//takes care of counting the number of items selected and update the price
    const [varient,setvarient]=useState('half')//depending on the size the price changes
    const [show, setShow] = useState(false);//show variable is used to launch the modal

    const handleClose = () => setShow(false);//using set state will be false b4 clicking the card
    const handleShow = () => setShow(true);
    const handleSubmit = (name,cost) => { 
        console.log(name)
        console.log(cost)
        let data = {
            name: name,
            cost: String(cost)
        }
        axios.post('http://localhost:1000/setitems', data, { 
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'data-type': 'application/json',

          }})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) { 
            console.log(error);
          });


    }

    return(
        <div style={{margin:'70px'}} className="shadow-lg p-3 mb-5 bg-white rounded">{/* items styling */}
            <div onClick={handleShow}>{/* handleShow shows the modal on clicking on name or image*/}
                <h1>{item.name}</h1>{/* item name in the page*/}
                <img src = {item.image} className= "img-field" style={{height:"200px",width:"250px"}}></img>
            </div>
            <div className='flex-container'></div>{/* flex container for each item */}
                <div className='w=100 m-1'>
                     { <select value={varient} onChange ={(e)=>(setvarient(e.target.value))}> 
                        {item.varient.map(varient=>{
                            return <option value= {varient}>{varient}</option>// selecting which size you want food ,unable to run this
                        })}
                    </select>   }
                </div>
                <div className='w=100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x,i)=>{
                            return<option value ={i+1}>{i+1}</option>//Quantity selection only till 10
                        })}
                    </select>
                </div>

                <div className = "flex-container" >
                    <div className='m-1 w-100'>
                         {  <h1 className='mt-1'>Price : {item.price[0][varient]*quantity}Rs/-</h1> }{/* Calculating item price*quantity*how many */}
                    </div>
                    <div className='m-1 w-100'>
                        <button className='btn' onClick = {() => handleSubmit(item.name,item.price[0][varient]*quantity)}>ADD TO CART</button>
                    </div>
                </div>
                
                <Modal show={show}>{/*modal for showing the description while clicking the card */}
                <Modal.Header closeButton onClick={handleClose}>{/* for close button in the head*/ }
                    <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src = {item.image} className="img-fluid" style={{height:"300px"}}></img>
                    <p>{item.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>{/* for close button in bottom*/ }
                </Modal.Footer>
                </Modal>

        </div>
    )
}

//form control controls the size of the boxes quanity and varients line 23
//m-1 margin 10 w-100 width 
//line -9 style margin is for the whole body
//at 55