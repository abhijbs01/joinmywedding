import React, { useEffect } from 'react'
import Commonblock from '../Utills/Commonblock'
import '../Styles/Faq.css'

function Faq() {

  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");

    const toggleAccordion = function () {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true");
      }
    };

    items.forEach((item) => item.addEventListener("click", toggleAccordion));

    return () => {
      items.forEach((item) =>
        item.removeEventListener("click", toggleAccordion)
      );
    };
  }, []);



  return (
    <div>
      <Commonblock title={'FAQ'} text={'Frequently asked questions'} />


      <div className="main-Frequently">
        <div className="container">

          <div className="inner-Frequently mb-4">
            <div className="section-title">
              <h4>ABOUT JOIN MY WEDDING
              </h4>
              <div class="bar"></div>
            </div>
            <div className="row align-items-center justify-content-between justify-content-sm-center">
              <div
                className="col-lg-12 col-md-12  col-sm-12 col-xs-12 Frequently-text "
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="accordion">
                  <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false">
                      <span className="accordion-title">
                        What is JoinMyWedding.com about?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        JoinMyWedding.com is a place for exchanging immersive experiences to transcend the traditional cultural relationship between traveler and local, making our societies more vibrant and diverse. We enable locals to open up their weddings to foreigners; a life event which does not exist for the travelers, but they are welcomed to be part of it.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-2" aria-expanded="false">
                      <span className="accordion-title">
                        What inspired the idea of inviting people to join others' weddings?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Orsi Parkanyi, founder: “I was born and grew up in Hungary, but lived in Australia for 11 years. Moved there when I was in my early twenties, and during those years, I missed out on all of my friend's weddings that happened in Hungary. A few years ago, I was visiting family, and got to talk with a girl who told me about all the amazing weddings she was going to attend that summer. She also shared that a few years back, she attended a traditional Indian wedding in India, and that it was the most amazing experience of her life. So the idea formed, what if there was a way for people to join authentic weddings around the world.”
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-3" aria-expanded="false">
                      <span className="accordion-title">
                        What role can weddings play in connecting people across cultures?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        A wedding is a public display of optimism. A wedding is a beautiful union. It's not just a union of two souls, but their families and communities as well. Every culture has their very own unique wedding celebration: a traditional wedding is a tribute to one's ancestral family and culture that we believe people would love to share with others. As one of our first users put it “we would love to open up our culture and wedding for people around the world”. It is JoinMyWedding's earnest, humble effort and mission to bring the world, possibly a little closer, by helping young couples share their rich culture and most special day with keen, interested global travelers and thereby building deeper global connections, respect and togetherness and a global family by open-up their weddings.
                      </p>
                      <p>Hence at JoinMyWedding we cherish our tagline: <b>Celebrate Together.</b></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="inner-Frequently mb-4">
            <div className="section-title">
              <h4>ABOUT INDIAN WEDDINGS
              </h4>
              <div class="bar"></div>
            </div>
            <div className="row align-items-center justify-content-between justify-content-sm-center">
              <div
                className="col-lg-12 col-md-12  col-sm-12 col-xs-12 Frequently-text "
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="accordion">
                  <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false">
                      <span className="accordion-title">
                        What is the motivation of Indian couples to participate?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Couples in India love the concept. Our list of weddings is growing organically by the day. Most of the people heard about us from the media (we have very wide media coverage all across India and internationally), but recently more and more registrations come through word of mouth and Facebook shares / referrals.
                      </p>
                      <p>   The motivation of registering couples are diverse: the majority of them share our vision about the uniqueness of their traditions and love the idea of opening up cultural weddings and get people connected through the experience - they are proud to be Indian, and would love to showcase their rich culture. Some of them work for multinational companies, having daily relationships with people from Europe or the US, but have never met any. Others love the idea to gain back some of the wedding expenses, which are huge in India (just imagine hosting 1000+ people over three days).</p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-2" aria-expanded="false">
                      <span className="accordion-title">
                        How is a typical Indian wedding look like?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">

                      <p>There are more than 300 types of different weddings in India, so it is nearly impossible to introduce all of them. India celebrates around 11 million weddings a year, of which about 80% are Hindu weddings.</p>

                      <p>The most common titles that you will find under each JoinMyWedding wedding listing are:</p>

                      <p> <b>Sangeet:</b> The Sangeet ceremony is one of the most enjoyable ceremonies, full of dance, music and laugh. It is exclusively for women. Female relatives and friends sing folk songs about marriage and bride. They tell jokes and bless the bride for a prosperous married life. The environment quite often becomes emotional as the bride and her mother experience the separation from each other. The Sangeet is closed with snacks and sweet dishes.</p>

                      <p>   Please read more about Sangeet:
                        <a href="http://www.culturalindia.net/weddings/wedding-rituals/sangeet-ceremony.html"
                          style={{ color: '#078e8d' }}>
                          http://www.culturalindia.net/weddings/wedding-rituals/sangeet-ceremony.html
                        </a>
                      </p>

                      <p>
                        <b>Mehendi (Mehndi): </b>
                        Mehendi is mostly for women, where talented artists are painting hennas for the ladies. This beautiful henna expresses your participation in the celebration and shows your intention of sharing love and happiness. Moreover, it also makes you really pretty.
                      </p>

                      <p>
                        Please read more about Mehndi:
                        <a href="http://www.culturalindia.net/weddings/wedding-rituals/mehndi-ceremony.html"
                          style={{ color: '#078e8d' }}>
                          http://www.culturalindia.net/weddings/wedding-rituals/mehndi-ceremony.html
                        </a>
                      </p>



                      <p>
                        <b> Wedding:</b> An Indian Hindu wedding is strictly observed according to the ancient cultural norms laid down in the Vedas. In the Indian society a wedding is not just the coming together of two people. In fact, a wedding also brings two families closer, which thereafter share a bond of respect and affection.
                      </p>

                      <p>
                        Please read more about Wedding traditions:
                        <a href="http://www.culturalindia.net/weddings/wedding-traditions/index.html"
                          style={{ color: '#078e8d' }}>
                          http://www.culturalindia.net/weddings/wedding-traditions/index.html
                        </a>
                      </p>

                      <p><b>Reception:</b> the Reception is a grand party, filled with good music and is often called as a “food paradise”. Unlike all the ceremonies, the reception does not include any rituals. While weddings in India are primarily organized by the bride's family, however, the reception might be an exception. Reception ceremony is typically celebrated just after the main wedding day, as the first public appearance of the newlyweds after their marriage. During the event the bride gets to know the acquaintances and associates of the groom's family, and she represents herself as an important member of her new family.
                      </p>

                      <p>
                        Please read more about the Reception:
                        <a href="http://www.culturalindia.net/weddings/wedding-rituals/reception-ceremony.html"
                          style={{ color: '#078e8d' }}
                        >
                          http://www.culturalindia.net/weddings/wedding-rituals/reception-ceremony.html
                        </a>
                      </p>

                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-3" aria-expanded="false">
                      <span className="accordion-title">
                        What does happen over several days on an Indian wedding?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Weddings in India vary regionally, the religion and per personal preferences of the bride and groom. They are festive occasions in India, and in most cases celebrated with extensive decorations, colors, music, dance, costumes and rituals that depend on the religion of the bride and the groom, as well as their preferences.[1] India celebrates about 10 million weddings per year,[2] of which about 80% are Hindu weddings..
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="inner-Frequently mb-4">
            <div className="section-title">
              <h4>CONTRIBUTIONS
              </h4>
              <div class="bar"></div>
            </div>
            <div className="row align-items-center justify-content-between justify-content-sm-center">
              <div
                className="col-lg-12 col-md-12  col-sm-12 col-xs-12 Frequently-text "
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="accordion">
                  <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false">
                      <span className="accordion-title">
                        What can I purchase on JoinMyWedding.com?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        On JoinMyWedding.com you can purchase an invitation to a real traditional wedding. Now we focus on India, enabling travelers to join weddings all across India.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-2" aria-expanded="false">
                      <span className="accordion-title">
                        What does the contribution include?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Contribution including entry to all ceremonies and wedding related activities on the given day, all taxes and meals. The price does not include transport and accommodation. No hidden costs on payment.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-3" aria-expanded="false">
                      <span className="accordion-title">
                        How does the booking process look like?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Select a wedding from JoinMyWedding.com, select the days you want to attend and how many people would join (including you). Then complete the purchase via PayPal. JoinMyWedding has a NO CASH policy. All payments should go through the JoinMyWedding PayPal, we have no agents working with cash. If you have questions or having problems with payment, get in touch with us via 
                        <a href="contact@joinmywedding.com.">contact@joinmywedding.com.</a>

                       
                      </p>
                      After confirmation of payment, you receive a detailed wedding profile with exact location, details of your hosts and contact person appointed by the hosts to greet and take care of you prior and during the event.
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-3" aria-expanded="false">
                      <span className="accordion-title">
                        Where does the contribution go?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        60% of the contribution goes to the couples as a contribution to their wedding costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="inner-Frequently mb-4">
            <div className="section-title">
              <h4>BEFORE THE WEDDING / PREPARATION
              </h4>
              <div class="bar"></div>
            </div>
            <div className="row align-items-center justify-content-between justify-content-sm-center">
              <div
                className="col-lg-12 col-md-12  col-sm-12 col-xs-12 Frequently-text">
                <div className="accordion">
                  <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false">
                      <span className="accordion-title">
                        Can I talk to the couple before I arrive to the venue?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Definitely, and we encourage you to do so! We ask all couples to appoint a friend or family member who will take care of travelers’ special needs.
                      </p>
                      <p>After confirmation of payment, you receive a detailed wedding profile with the details of this contact person appointed by the couple to greet and take care of you prior and during the event. Please feel free to give him / her a call, send an e-mail or connect via Facebook - the earlier you are connected, the better you can prepare together for the event. You can address anything e.g., from transportation to gifts, via food and dress code. If you are lucky, you can even get some help in finding some nice local dress to wear on the ceremonies.

                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-2" aria-expanded="false">
                      <span className="accordion-title">
                        Am I expected to bring a present?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Travelers frequently ask us what to bring to the couple as a wedding gift, beyond buying the ticket as a contribution to their wedding costs. If you want to give something personal, you can either bring a small souvenir from your home country or bring a flower
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-3" aria-expanded="false">
                      <span className="accordion-title">
                        Am I expected to wear traditional Indian attire?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        We encourage you to do so. On one hand, this is a gesture towards the couple to show your genuine interest and respect of their culture, and on the other hand, this helps you to explore the culture to a greater extent. If you cannot arrange traditional Indian clothes, you can either ask your contact person if they can lend you a set, or just wear something symbolic (e.g., a scarf).
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false">
                      <span className="accordion-title">
                        How does JoinMyWedding operate with couples?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        We reach out to all registered couples to discuss their wedding details. Among many other things, we talk through the location/venue, dress code, and the exact program. We check if the couples are capable to host foreigners, so we expect them to speak good English and assign a family member as a dedicated point of contact to JoinMyWedding guests.
                      </p>
                    </div>

                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false">
                      <span className="accordion-title">
                        How can JoinMyWedding help with travel arrangements?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        We have already engaged a selection of premium inbound travel partners, who can join you to the selected wedding, if you would like to get such a service. We can help you with finding the most suitable travel partner after identifying your needs. For more information, please contact us: contact@joinmywedding.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inner-Frequently mb-4">
            <div className="section-title">
              <h4>CANCELLATION
              </h4>
              <div class="bar"></div>
            </div>
            <div className="row align-items-center justify-content-between justify-content-sm-center">
              <div
                className="col-lg-12 col-md-12  col-sm-12 col-xs-12 Frequently-text "

              >
                <div className="accordion">
                  <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false">
                      <span className="accordion-title">
                        What happens if the wedding is cancelled?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Weddings in India are a mainstay in the social calendar of the whole community - so it is highly unlikely that a wedding is cancelled. However, in case of event cancellation, the buyer is entitled to full refund of the contribution.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-2" aria-expanded="false">
                      <span className="accordion-title">
                        What happens if I cannot join the wedding?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>To allow a smooth, calm and relaxing preparation of the wedding, full cancellation is only accepted until 30 days prior the event. In case of cancellation within 30 days, 50% of the contribution will be charged to the buyer</p>
                      <p>n case of no show up without any prior notification, the full contribution will be taken from the buyer’s account. No further penalty charges are applied.</p>
                      <p>However, travelers can always decide to contribute to a couple’s wedding even if they cannot attend in person.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="inner-Frequently mb-4">
            <div className="section-title">
              <h4>TECHNICAL TROUBLESHOOTING

              </h4>
              <div class="bar"></div>
            </div>
            <div className="row align-items-center justify-content-between justify-content-sm-center">
              <div
                className="col-lg-12 col-md-12  col-sm-12 col-xs-12 Frequently-text "
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="accordion">
                  <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false">
                      <span className="accordion-title">
                        I can't log in to the site
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>Currently we exclusively support Facebook logins for user authentication on our site.</p>
                      <p>To log in, the site redirects your browser to Facebook, where you can authorize JoinMyWedding to access a limited set of your Facebook information — specifically, your profile picture, email address, and phone number. No other details are shared.</p>
                      <p>Sometimes, certain mobile browsers can hinder the Facebook login process, preventing the opening of a new tab or the smooth return to the JoinMyWedding site with the necessary login information. These could cause you trouble with logging in to our site.</p>
                      <p>If you encounter login issues, consider trying to sign in using a different browser on the same device or to attempt logging in from a different mobile device or a desktop computer.</p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-2" aria-expanded="false">
                      <span className="accordion-title">
                        I got stuck during the wedding registration process
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        If you're facing challenges during the wedding registration process, please follow these steps for a quicker resolution:</p>
                      <ol>
                        <li>Take a screenshot of the registration step where you're encountering issues. Ensure that all entered data is clearly visible.
                        </li>
                        <li>Send us an email at contact@joinmywedding.com. In your email, please describe the issue briefly and attach the screenshot you captured.</li>
                      </ol>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-3" aria-expanded="false">
                      <span className="accordion-title">
                        I'm unable to upload the wedding photo during registration
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Here are some quick tips if you are encountering difficulties while uploading your event photo:
                      </p>
                      <ol>
                        <li><b>Check Your Format: </b>Ensure your image is in one of the accepted formats: JPEG (.jpg, .jpeg), PNG (.png), HEIC (.heic), or WebP (.webp).</li>
                        <li><b>Size Matters:</b> Keep your image file under 12 Mb. If your file is larger, consider compressing it or choosing a different image.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div >



  )
}

export default Faq
