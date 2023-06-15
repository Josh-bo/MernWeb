import React from 'react';

function Home() {
    return (
        <>
            <section id='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                                Feel the Fresh Business Perspective
                            </h1>
                            <p className='lead text-center fs-4 mb-5  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit et, mollitia sint corporis eligendi deleniti perspiciatis! Vero harum, quasi libero dolor iure cumque accusantium, adipisci repellendus, earum ratione quod.
                            </p>

                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light rounded-pill me-4 px-4 py-2">Get Quote</button>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
