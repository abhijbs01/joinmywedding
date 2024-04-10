import React from "react";
import "../Styles/Contact.css";
import { Button, FormControl, Grid, TextField } from "@mui/material";
import contact_image from "../Assets/contact.svg";
import Commonblock from "../Utills/Commonblock";

function Contactus() {
  return (
    <div>
     <Commonblock title={'CONTACT US'}  text={'Who are we?'}/>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Get in touch with us</h3>
                    <div id="form-message-warning" className="mb-4" />
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <FormControl
                      sx={{
                        m: 1,
                        p: 0,
                        minWidth: 120,
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#0b8e8d",
                          },
                          "&:hover fieldset": {
                            borderColor: "#0b8e8d",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#0b8e8d",
                            borderWidth: "2px",
                          },
                        },
                        size: "small",
                      }}
                    >
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Full Name"
                              variant="outlined"
                              fullWidth
                              id="name"
                              placeholder="Name"
                              InputLabelProps={{
                                style: { color: "#0b8e8d" },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Email Address"
                              variant="outlined"
                              fullWidth
                              id="email"
                              placeholder="Email"
                              InputLabelProps={{
                                style: { color: "#0b8e8d" },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              label="Subject"
                              variant="outlined"
                              fullWidth
                              id="subject"
                              placeholder="Subject"
                              InputLabelProps={{
                                style: { color: "#0b8e8d" },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              label="Message"
                              variant="outlined"
                              InputLabelProps={{
                                style: { color: "#0b8e8d" },
                              }}
                              fullWidth
                              multiline
                              rows={4}
                              id="message"
                              placeholder="Message"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              type="submit"
                              style={{ background: "#0b8e8d" }}
                            >
                              Send Message
                            </Button>
                            <div className="submitting" />
                          </Grid>
                        </Grid>
                      </form>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 ">
              <div className="contact-image-block my-auto">
                <img src={contact_image} alt="imagecontact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
