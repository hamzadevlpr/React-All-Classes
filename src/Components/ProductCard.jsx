import axios from 'axios';
import { AiOutlineShoppingCart, AiFillStar } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.log("Server not responding:", error);
            })
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);
    return (
        <>
            {
                loading ?
                    <div className="flex justify-center items-center h-[75vh]">
                        <ClipLoader
                            color="#000"
                            loading={loading}
                            size={80}
                        />
                    </div>
                    :

                    <div className="flex justify-center items-center flex-wrap">
                        {products.map((product,index) => (
                            <>
                                <div key={index} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl">
                                    <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center" href="#">
                                        <img className="object-cover " src={product.thumbnail} alt="product image" />
                                        <span className="absolute top-0 left-0 m-2 rounded-full bg-red-300 px-2 text-center text-sm font-medium text-white">{Math.floor(product.discountPercentage)}% OFF</span>
                                    </a>
                                    <div className="mt-4 px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
                                            <span className="text-xs font-bold tracking-tight text-slate-900">Brand: {product.brand}</span>
                                        </a>
                                        <div className="mt-2 mb-5 flex items-center justify-between">
                                            <p>
                                                <span className="text-2xl font-bold text-slate-900">${Math.ceil((Math.abs(((product.price * product.discountPercentage) / 100) - product.price)))} </span>
                                                <span className="text-sm font-medium text-slate-900 line-through">${product.price}</span>
                                            </p>
                                            <div className="flex items-center">
                                                {/* display rating stars according to rating number */}
                                                {new Array(Math.trunc(product.rating)).fill(null).map(() => (
                                                    <AiFillStar color='#F6BE00' />
                                                ))}
                                                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating}</span>
                                            </div>
                                        </div>
                                        <button  className="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 ">
                                            <AiOutlineShoppingCart size={26} className='mr-5' />
                                            Add to cart</button>
                                    </div>
                                </div>
                            </>
                        ))
                        }
                    </div>

            }



        </>
    );
};

export default Products;
