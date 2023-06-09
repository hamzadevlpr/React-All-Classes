import axios from "axios";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function News() {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    useEffect(() => {
        const url = 'https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=3c4205869amshee9cf450d99f537p120c2cjsn369d32ceb5da&rapidapi-host=imdb-top-100-movies.p.rapidapi.com';

        axios.get(url)
            .then((response) => {
                console.log(response.data)
                setNews(response.data);
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
            {/* <ClipLoader color="#140e0e" loading={loading} size={80} /> */}

            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap ">
                        {
                            news.map((article, index) => {
                                return (
                                    <>
                                        <div class="movie-card">

                                            <a href="./movie-details.html">
                                                <figure class="card-banner">
                                                    <img src={article.image} alt="Free Guy movie poster" />
                                                </figure>
                                            </a>

                                            <div class="title-wrapper">
                                                <a href="./movie-details.html">
                                                    <h3 class="card-title">Free Guy</h3>
                                                </a>

                                                <time datetime="2021">2021</time>
                                            </div>

                                            <div class="card-meta">
                                                <div class="badge badge-outline">4K</div>

                                                <div class="duration">
                                                    <ion-icon name="time-outline" role="img" class="md hydrated" aria-label="time outline"></ion-icon>

                                                    <time datetime="PT115M">115 min</time>
                                                </div>

                                                <div class="rating">
                                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>

                                                    <data>7.7</data>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default News