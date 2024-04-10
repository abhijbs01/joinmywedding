import React from "react";
import Commonblock from "../Utills/Commonblock";
import "../Styles/Wedding.css";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
function Wedding() {
  return (
    <>
      <Commonblock
        title={"ALL WEDDINGS"}
        text={"Choose the wedding you would like to join"}
      />

      {/* Wedding Section-1*/}
      <div className="wedding-section-outer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6 col-sm-12 col-xs-12  ">
              <div className="item">
                <div className="alert-item">
                  <div className="title">Santosh & Priyanka's wedding</div>
                  <div className="alert-box">
                    <div className="icon">
                      <ReportProblemIcon />
                    </div>
                    <p>
                      Santosh & Priyanka have already celebrated their wedding
                      in India, therefore invitations are closed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="wed-book-price">
                  <div className="prc-title">
                    Your contribution always acts as a gift to the couple and
                    includes entry to all ceremonies on all days.{" "}
                  </div>
                  <div className="prc">
                    $250 USD <span>per person</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="oth-wed">
                  <div className="title">
                    Interested in visiting another wedding?
                  </div>
                  <div className="btn">Let us match you with a wedding</div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="wed-per-image">
                <div className="image-block">
                  <img
                    src="https://storage.googleapis.com/jmw-test-c1ea8.appspot.com/media_v1_6194443041374208_medium"
                    alt="wedperimage"
                  />
                  <div className="wed-per-name">Sumit & Aisha's wedding</div>
                </div>
              </div>
              <div className="wedding-day">
                <div className="wedding-item">
                  <div className="item-inner">
                    <div className="day">Day1</div>
                    <div className="date">Sunday, March 31, 2024</div>
                    <div className="loc">Gujarat</div>
                  </div>
                </div>
                <div className="wedding-item">
                  <div className="item-inner">
                    <div className="day">Day2</div>
                    <div className="date">Monday, April 01, 2024</div>
                    <div className="loc">Gujarat</div>
                  </div>
                </div>
                <div className="wedding-item">
                  <div className="item-inner">
                    <div className="day">Day3</div>
                    <div className="date">Tuesday, April 02, 2024</div>
                    <div className="loc">Gujarat</div>
                  </div>
                </div>
              </div>
              <div className="Wedding_about">
                <div className="content">
                  <div className="title">About the hosts</div>
                  <div className="name">Santosh & Priyanka's story</div>
                  <div className="int">
                    It's a arranged marriage in Indian culture and its a wedding
                    form Nashik Maharashtra India It's conduct near grapes farm
                    and near beautiful nature
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wedding-detail-information */}
      <div className="wedding-details-outer">
        <div className="container">
          <div className="wed-daily">
            <div className="title">DAILY ITINERARY</div>
            <div className="other">
              <div className="oth">
                Main language(s) of the wedding:<span>Marathi</span>
              </div>
              <div className="oth">
                Diet:<span>No</span>
              </div>
              <div className="oth">
                Alcohol offered:<span>No</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="wed-day-item">
                <div className="item-inner">
                  <div className="base">
                    <div className="d">Day1</div>
                    <div className="date">Wednesday, April 3, 2024</div>
                    <div className="loc">Nasik</div>
                  </div>
                  <div className="time">
                    Starting time (approximately):- <b>4:00 PM</b>
                    <br />
                    Venue and host contact details will be disclosed upon
                    booking.
                  </div>
                  <div className="rules">
                    <div className="rl">
                      Accommodation :-<b>Not included</b>
                    </div>
                    <div className="rl">
                      Transportation :-<b>Not included</b>
                    </div>
                  </div>
                  <div className="fun">
                    <div className="fun-title">Haldi</div>
                    <div className="text">
                      In this event groom and bride will bath with turmeric
                      powder and its a very old culture of Nashik Maharashtra
                      and dance on sambhal
                    </div>
                    <div className="fun-mus">
                      <div className="mus">
                        Music / dancing:-<b>Yes</b>
                      </div>
                      <div className="mus">
                        Dress code:-<b>Traditional indian</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="wed-day-item">
                <div className="item-inner">
                  <div className="base">
                    <div className="d">Day2</div>
                    <div className="date">Wednesday, April 3, 2024</div>
                    <div className="loc">Nasik</div>
                  </div>
                  <div className="time">
                    Starting time (approximately):- <b>4:00 PM</b>
                    <br />
                    Venue and host contact details will be disclosed upon
                    booking.
                  </div>
                  <div className="rules">
                    <div className="rl">
                      Accommodation :-<b>Not included</b>
                    </div>
                    <div className="rl">
                      Transportation :-<b>Not included</b>
                    </div>
                  </div>
                  <div className="fun">
                    <div className="fun-title">Haldi</div>
                    <div className="text">
                      In this event groom and bride will bath with turmeric
                      powder and its a very old culture of Nashik Maharashtra
                      and dance on sambhal
                    </div>
                    <div className="fun-mus">
                      <div className="mus">
                        Music / dancing:-<b>Yes</b>
                      </div>
                      <div className="mus">
                        Dress code:-<b>Traditional indian</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="wed-day-item">
                <div className="item-inner">
                  <div className="base">
                    <div className="d">Day3</div>
                    <div className="date">Wednesday, April 3, 2024</div>
                    <div className="loc">Nasik</div>
                  </div>
                  <div className="time">
                    Starting time (approximately):- <b>4:00 PM</b>
                    <br />
                    Venue and host contact details will be disclosed upon
                    booking.
                  </div>
                  <div className="rules">
                    <div className="rl">
                      Accommodation :-<b>Not included</b>
                    </div>
                    <div className="rl">
                      Transportation :-<b>Not included</b>
                    </div>
                  </div>
                  <div className="fun">
                    <div className="fun-title">Haldi</div>
                    <div className="text">
                      In this event groom and bride will bath with turmeric
                      powder and its a very old culture of Nashik Maharashtra
                      and dance on sambhal
                    </div>
                    <div className="fun-mus">
                      <div className="mus">
                        Music / dancing:-<b>Yes</b>
                      </div>
                      <div className="mus">
                        Dress code:-<b>Traditional indian</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wedding;
