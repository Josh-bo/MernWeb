import React from 'react';
import one from '../assets/SQI logo.jpeg'

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={one} alt="About" className='w-75 mt-5 h-50' />
                </div>

                <div className="col-md-6">
                    <h3 className="fs-5 mb-0">About us</h3>
                    <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                    <hr className='w-50'/>
                    <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia excepturi repudiandae, mollitia laboriosam soluta architecto, nemo quae perferendis praesentium, nulla rem doloremque sint earum inventore qui dolorum porro ratione culpa magnam! Pariatur magni repellendus tempora nulla necessitatibus quae earum similique sunt natus, ipsa, modi amet recusandae libero dolore possimus!</p>

                    <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>

                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default About;
