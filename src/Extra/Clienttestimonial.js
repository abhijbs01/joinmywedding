import React from 'react'
import TestiMonialsDetails from './TestiMonialsDetails';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../src/Styles/Extra.css'

function Clienttestimonial() {

    const testiMonials = [
        {
            name: 'Dr. Christoph Flamm',
            description: "It was the coolest thing I did in India. The food, the people, the culture - you get everything!"            ,
            address: '35, JoinMyWedding guest from Austria',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Urvi Ambavat and Paras Sah',
            description: "My family couldn't wait to meet our special guests on the big day and explain all the beautiful Indian wedding traditions to them.",
            address: 'JoinMyWedding hosts from Mumbai',
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Niamh Kelly',
            description: 'It was a great way to blend in with the locals and make friends.',
            address: '26, JoinMyWedding guest from Ireland',
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Adam Swanky',
            description: 'The monetary contribution I made was the best and easiest to thank the couple for their hospitality and this extraordinary experience.',
            address: '20, JoinMyWedding guest from US',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]
    //Owl Carousel Settings
    const ClientTestimonial = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };

    return (
        <div>
            <section id="testimonial" className="testimonials pt-70 pb-70">
                <div className="container mt-5">
                    <h4 className="miniTitle text-center">TESTIMONIALS</h4>
                    <div className="text-center ">
                        <h3 className="sectionTitle">What Our Clients are Saying?</h3>
                    </div>
                    <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...ClientTestimonial}>
                                {
                                    testiMonials.length === 0 ?
                                        <div class="item">
                                            <div class="shadow-effect">
                                                {/* <img class="img-circle" src={userPic} /> */}

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                            </div>
                                            <div class="testimonial-name">
                                                <h5>Rajon Rony</h5>
                                                <small>ITALY</small>
                                            </div>
                                        </div> :
                                        testiMonials.map(testiMonialDetail => {
                                            return (
                                                <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />
                                            )
                                        })
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clienttestimonial