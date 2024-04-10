import React from "react";
import Commonblock from "../Utills/Commonblock";
import '../Styles/About.css'

function About() {
  return (
    <div>
      <Commonblock title={'About'} text={'We are Aboout!'} />

      {/* About-section1-start */}
      <div className="about-section1-outer">
        <div className="container">
          <div className="about-sec1-title">
            <div className="title">WHY DO OUR COUPLES LOVE HOSTING TRAVELERS AT THEIR WEDDINGS?</div>
          </div>
          <div className="about-content-outer row align-items-center">
            <div className="abt-con-item col-lg-4 col-md-6 col-sm-12">
              <div className="item-inner">
                <div className="cont">
                  <div className="title">
                    BUILD CONNECTIONS WITH INTERNATIONAL TRAVELERS
                  </div>
                  <div className="text">
                    "Given the chance, I would love to visit different countries and attend their weddings. Hosting international travelers through JoinMyWedding was a great way to socialize with people from other countries."
                  </div>
                  <div className="loc-date">
                    Namrata Nataraj & Nith Bathi, Bangalore.
                    <br />
                    <span>August 2016</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="abt-con-item col-lg-4 col-md-6 col-sm-12">
              <div className="item-inner">
                <div className="cont">
                  <div className="title">
                    SHOWCASE YOUR CULTURE
                  </div>
                  <div className="text">
                    "My family couldn`t wait to show every thing to our foreign visitors. Our Indian guests already knew about the traditions so talking about it to Someone new really excited them."
                  </div>
                  <div className="loc-date">
                    Urvi Ambavat & Paras Shah, Mumbai.
                    <br />
                    <span>December 2016</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="abt-con-item col-lg-4 col-md-6 col-sm-12">
              <div className="item-inner">
                <div className="cont">
                  <div className="title">
                    GET CONTRIBUTION TO YOUR WEDDING EXPENSES
                  </div>
                  <div className="text">
                    "My family friends they really liked the guests and were so happy to get an opportunity to enjoy the wedding with them and the guests' contributions really made a difference."
                  </div>
                  <div className="loc-date">
                    Biswajit Debdas & Chandrama Dey.
                    <br />
                    <span>Burdwan, December 2016</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to register wedding */}
      <div className="register-outer">
        <div className="container">
          <div className="section-title">HOW HOSTING WORKS</div>
          <div className="register-content row">
            <div className="reg-item col-lg-12 col-sm-12">
              <div className="item-inner">
                <div className="reg-title">
                  1. Register your wedding
                </div>
                <div className="content">
                  Start by creating your listing. Add your wedding details.
                  Make sure you include essential and exciting hints about
                  your wedding that might interest your future guests.
                </div>
                <div className="other-item row">
                  <div className="item col-lg-12 col-md-12 col-sm-12">
                    <div className="item-inner">
                      <div className="title">Please note:</div>
                      <ul>
                        <li>Listing your wedding is free.</li>
                        <li>The exact location of your wedding and your details will only be revealed to people who book for your wedding via our secure website.</li>
                        <li>Before we publish your listing, we will contact you to confirm that all details are correct.</li>
                        <li>In order to facilitate registration for the couples, we allow their third party representative to register the wedding on behalf of the couple, however, please note that JMW reserves the right to contact the couple directly for the purposes associated with the services of JMW, including confirmation of information provided, payment details.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="item col-lg-4 col-md-6 col-sm-12">
                    <div className="item-inner">
                      <div className="title">It's easy to register.</div>
                      <div className="con">
                        Registration takes about 10 minutes. We will ask about your story and details of your wedding in 5 easy steps.
                      </div>
                    </div>
                  </div>
                  <div className="item col-lg-4 col-md-6 col-sm-12">
                    <div className="item-inner">
                      <div className="title">What’s in a listing?</div>
                      <div className="con">
                        You will fill out a short questionnaire about yourself and your partner, as well as about your wedding events and ceremonies. You will be asked to upload a photo or even a video to enrich your listing. All this helps JoinMyWedding guests get a sense of what your wedding will be like.
                      </div>
                    </div>
                  </div>
                  <div className="item col-lg-4 col-md-6 col-sm-12">
                    <div className="item-inner">
                      <div className="title">Ceremony Guide</div>
                      <div className="con">
                        On the registration form, you will be asked to nominate a trusted person who will be able to help your guests on your wedding day and prior to the wedding.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reg-item col-lg-4 col-md-6 col-sm-12">
              <div className="item-inner">
                <div className="reg-title">
                  2. Guests find your listing and book
                </div>
                <div className="content">
                  You’ll get notified via email once a booking is made for your wedding, including guest details. We encourage you to make contact with your guests prior to the wedding.
                </div>
              </div>
            </div>

            <div className="reg-item col-lg-4 col-md-6 col-sm-12">
              <div className="item-inner">
                <div className="reg-title">
                  3. Celebrate with your guests.
                </div>
                <div className="content">
                  Greet your guests and share with them your culture and traditions as you enjoy and cherish every second of this life-changing experience.
                </div>
              </div>
            </div>

            <div className="reg-item col-lg-4 col-md-6 col-sm-12">
              <div className="item-inner">
                <div className="reg-title">
                  4. Receive your wedding gift
                </div>
                <div className="content">
                  Contributions from travelers will be collected at the time of booking and transferred to you a few days after you start your joint journey as a married couple.
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Register your wed */}
      <div className="book-wed-outer">
        <div className="container">
          <div className="book-wed-inner row align-items-center">
            <div className="col-lg-9 col-md-8 wed-book">
              <div className="title">Get ready to meet your guests</div>
              <div className="wed-btn">Register your wedding</div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="wed-img">
                <img src="https://i.postimg.cc/PqSJRFhk/pngtree-beautiful-wedding-quiet-couple-png-image-14289856-removebg-preview.png" alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
