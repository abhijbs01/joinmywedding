import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Styles/Home.css';
import c1 from '../Assets/image/compnay/c1.png';
import c2 from '../Assets/image/compnay/c2.png';
import c3 from '../Assets/image/compnay/c3.png';
import c4 from '../Assets/image/compnay/c4.png';
import c5 from '../Assets/image/compnay/c5.png';
import Clienttestimonial from '../Extra/Clienttestimonial';
import { Link } from 'react-router-dom';

const Home = () => {
  const MainSlider = {
    loop: true,
    margin: 10,
    nav: true,
    autoPlay: true,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  const CompanySlider = {
    loop: true,
    margin: 10,
    nav: false,
    autoPlay: true,
    autoplay: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 5
      },
      1000: {
        items: 5
      }
    }
  };

  const instaslider = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  };


  return (
    <>
      {/* Main Slider */}
      <OwlCarousel className="Main-slider owl-theme" {...MainSlider}>
        <div className="item">
          <div className="content-container">
            <img src="https://i.postimg.cc/L5ZvqYRQ/An-Ultimate-Guide-To-Gujarati-Wedding-Traditions-Rituals-More.avif" alt="images not found"
              height={'600px'} width={'100%'} />
            <div className="text-container">
              <h2>You Haven’t Been to India Until You’ve Been to an <span>Indian Wedding.</span></h2>
              <p>JoinMyWedding gives travelers the chance to be on the guest list of a genuine cultural celebration.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="content-container">
            <img src="https://i.postimg.cc/CL3w6Zqw/weddig2.jpg" alt="images not found"
              height={'600px'} width={'100%'} />
            <div className="text-container">
              <h2>Experience the Splendor of an <span>Indian Wedding</span></h2>
              <p>Join the guest list of this cultural celebration and create unforgettable memories steeped in the colors, flavors, and rhythms of India.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="content-container">
            <img src="https://i.postimg.cc/xjWdBFrr/wedding3.webp" alt="images not found"
              height={'600px'} width={'100%'} />
            <div className="text-container">
              <h2> Explore the Magic of <span>Indian Weddings</span></h2>
              <p>Step into a world of tradition and festivity with JoinMyWedding. Witness the tapestry of rituals, dances, and ceremonies that make Indian weddings a truly magical experience. </p>
            </div>
          </div>
        </div>
      </OwlCarousel>

      {/* Company Slider */}
      <OwlCarousel className="company-slider owl-theme" {...CompanySlider}>
        <div className="item">
          <div className="company-image">
            <img src={c1} alt="company1" />
          </div>
        </div>
        <div className="item">
          <div className="company-image">
            <img src={c2} alt="company2" />
          </div>
        </div>
        <div className="item">
          <div className="company-image">
            <img src={c3} alt="company3" />
          </div>
        </div>
        <div className="item">
          <div className="company-image">
            <img src={c4} alt="company4" />
          </div>
        </div>
        <div className="item">
          <div className="company-image">
            <img src={c5} alt="company5" />
          </div>
        </div>
      </OwlCarousel>

      {/* Home Section-1 */}
      <div className="culuture-outer">
        <div className="container">
          <div className="culuture-conent">
            <div className="title">
              THE ULTIMATE CULTURAL IMMERSION
            </div>
            <div className="text">
              If you're the kind of traveler that seeks out genuine cultural experiences to broaden your horizons and give you a fresh perspective, then a traditional wedding should be at the top of your list.
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 culuture-item">
              <p>It’s the place where all the elements of a culture collide in one, huge, unstaged celebration.

                And, thanks to the Indian couples who want to share their wedding with the world, you can now be on the guest list - and an active participant - of a traditional Indian wedding.</p>
            </div>
            <div className="col-lg-6 culuture-item">
              <p>
                Dress in traditional Indian garb, taste the exotic flavours, dance to the enchanting music, take part in beautiful wedding customs and soak up the incomparable atmosphere as you learn first-hand what it really means to be Indian from the people who know better than anyone - the locals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* client testimonial */}
      <Clienttestimonial />

      {/* Feature Wedding  */}
      <div className="featue-weeding-outer">
        <div className="container">
          <div className="section-title">
            <div className="title">FEATURED WEDDINGS</div>
            <div className="text">Which wedding would you like to join?</div>
          </div>
          <div className="weeding-item">
            <div className="item">
              <div className="item-inner">
                <div className="image-block">
                  <img src="https://storage.googleapis.com/jmw-test-c1ea8.appspot.com/media_v1_4850588442427392_small" alt="wedimage" />
                  <div className="name">Abhimanyu & Priya</div>
                </div>
                <div className="other">
                  <div className="add">
                    Udaipur
                    <span> India</span>
                  </div>

                </div>
                <div className="date">
                  17 to 19 Apr,2024
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="image-block">
                  <img src="https://storage.googleapis.com/jmw-test-c1ea8.appspot.com/media_v1_4850588442427392_small" alt="wedimage" />
                  <div className="name">Abhimanyu & Priya</div>
                </div>
                <div className="other">
                  <div className="add">
                    Udaipur
                    <span> India</span>
                  </div>

                </div>
                <div className="date">
                  17 to 19 Apr,2024
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="image-block">
                  <img src="https://storage.googleapis.com/jmw-test-c1ea8.appspot.com/media_v1_4850588442427392_small" alt="wedimage" />
                  <div className="name">Abhimanyu & Priya</div>
                </div>
                <div className="other">
                  <div className="add">
                    Udaipur
                    <span> India</span>
                  </div>

                </div>
                <div className="date">
                  17 to 19 Apr,2024
                </div>
              </div>
            </div>
          </div>
          <div className="see-all">
            <div className="btn">
              See All upcoming Weddings
            </div>
          </div>
        </div>
      </div>

      {/* More _about join my wedding */}
      <div className="more-about-outer">
        <div className="container">
          <div className="section-title">
            <div className="main-title">
              WANT TO HOST FOREIGN GUESTS AT YOUR WEDDING?
            </div>
            <div className="second-title">
              If you like the thought of sharing your wedding day with foreign travelers who have a keen interest in really understanding the Indian culture, then we would love to hear from you.
            </div>
            <div className="more-all">
              <div className="btn">
                <Link to="/about">More About</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Get inspire on instagram */}
      <div className="inspire-outer">
        <div className="container">
          <div className="section-title">
            <div className="title">
              Get inspired on Instagram
            </div>
          </div>
          <OwlCarousel className="insta-slider my-4 owl-theme" {...instaslider}>
            <div className="item">
              <div className="insta-image">
                <img src="https://i.postimg.cc/0yZZRdVx/instagram-17845460005670459-QWAP.jpg" alt="company1" />
              </div>
            </div>
            <div className="item">
              <div className="insta-image">
                <img src="https://i.postimg.cc/0yZZRdVx/instagram-17845460005670459-QWAP.jpg" alt="company2" />
              </div>
            </div>
            <div className="item">
              <div className="insta-image">
                <img src="https://i.postimg.cc/0yZZRdVx/instagram-17845460005670459-QWAP.jpg" alt="company3" />
              </div>
            </div>
            <div className="item">
              <div className="insta-image">
                <img src="https://i.postimg.cc/0yZZRdVx/instagram-17845460005670459-QWAP.jpg" alt="company4" />
              </div>
            </div>
            <div className="item">
              <div className="insta-image">
                <img src="https://i.postimg.cc/0yZZRdVx/instagram-17845460005670459-QWAP.jpg" alt="company5" />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Home;
