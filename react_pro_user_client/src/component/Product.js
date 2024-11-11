//use Client;
import React, {useState, useEffect} from "react";
import { getItems } from '../api/apiService';

const Product = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const response = await getItems();
        setItems(response.data);
    };

    return (
        <>
            <section>
                <div className='py-3'>
                    <div className="row justify-content-center">
                        {items.map(item => (
                            <div className="card m-3" style={{width: '18rem'}} key={item.id}>
                                {/* <img src={item.imageUrl} className="card-img-top" alt={item}></img> */}
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <div className="card-body">
                                        <span className="fs-5 card-link">£{item.price}</span>
                                        <span className="fs-6 card-link">In Stock: {item.stock}</span>
                                    </div>
                                    <a href="/" className="btn btn-warning">Add to basket</a>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Product;