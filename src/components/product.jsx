import './product.css'
import QuantityPicker from './quantityPicker';
import {useState } from 'react';

const Product = (props) => {
    let [quantity,setQuantity] = useState(1);

    let onQuantityChange = (value) => {
        setQuantity(value);
    }


    //add a function to return the total. total = price*quantity
    const getTotal = () => {
        let total = props.data.price * quantity;
        return total;
        return total.toFixed(2)
    };


    return(<div className='product'>
           <img className='productImg' src={'/img/'+props.data.image}></img>
           <h2>{props.data.title}</h2>
           <label>Price: ${props.data.price}</label>
           <label>Total: ${getTotal()}</label>
           <QuantityPicker onChange={onQuantityChange} ></QuantityPicker>
           <button className="btn btn-outline-primary">Add</button>
        </div>);
};

export default Product;