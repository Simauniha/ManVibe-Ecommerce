import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'

function Home() {
    return (
        <>
            {/* <Navbar />
            <section className="hero">

                <div className="hero-overlay">

                </div>

                <div className="hero-content">
                    <h1>Upgrade Your Style</h1>
                    <p>Discover premium fashion curated for modern men.</p>
                    <button className="hero-btn">Shop Now</button>
                </div>

            </section> */}
            <Navbar />
            {/* <div className="img-conatainer">


                <div className="row">
                    <div className="col-sm-6">
                        <div className="line-classn hi"></div>

                        <h1 className="hi">
                            Build Perfect body
                            <br /> Shape for good and
                            <br /> Healthy life.
                        </h1>
                        <Link
                            className="hi btn nav-last-hover-button  hover-button mt-5"
                            to="/register"
                        >
                            <p className="btn-text">BECOME A MEMBER</p>
                        </Link>
                    </div>
                    <div className="col-sm-6"></div>
                </div>
            </div> */}
            <section class="home">
                <div class="home-content">
                    <h1>Welcome to My Website</h1>
                    <p>This is my homepage</p>
                </div>
            </section>
        </>
    )
}

export default Home
