import React from "react";
import styles from "./Sales.module.css";

const Sales = () => {
  return (
    <div>
      <div
        style={{
          minHeight: "35rem",
          background: "#E37383",
          paddingTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <header>
          <p
            style={{
              color: "white",
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            GOLDEN SCALING GATEWAY for Etsy Sellers
          </p>
          <p
            style={{
              color: "white",
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "500",
              margin: "5px",
            }}
          >
            Skyrocket/Grow your Etsy Business by finding the Winning Products
            and Copying them for your Instant Success
          </p>
          <section style={{ textAlign: "center" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              frameborder="0"
              allowfullscreen
              style={{ maxWidth: "100%" }}
            />
          </section>
        </header>
      </div>

      <div className="benefits" class={styles.benefits}>
        <div className="card" style={{ width: "60rem" }}>
          <img
            src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-sales.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title">Discover the Secret Method</h2>
            <ul
              className="list-group list-group-flush"
              style={{ textAlign: "left", fontWeight: "450" }}
            >
              <li className="list-group-item">
                ✔ Find Winning Products in less than 2 minutes
              </li>
              <li className="list-group-item">
                ✔ Check which Products are getting Eyeballs and Attention
              </li>
              <li className="list-group-item">
                ✔ Discover the Rising Stars in your Niche
              </li>
              <li className="list-group-item">
                ✔ Analyze any listing to see its performance & insider hidden
                details
              </li>
              <li className="list-group-item">
                ✔ Find the Conversion Rate of the Products
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "20rem",
          background: "#E37383",
          paddingTop: "20px",
          marginTop: "30px",
          color: "white",
        }}
      >
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <p style={{ fontSize: "40px", fontWeight: "700" }}>
                Simple way to Unlock Etsy Success in Minutes without Trial and
                Error
              </p>
            </div>
            <p style={{ fontSize: "25px", fontWeight: "400" }}>
              Say goodbye to trial and error. Scale your Etsy business today
              with our powerful solution.
            </p>
          </div>
          <div
            style={{ marginTop: "20px", fontWeight: "700", fontSize: "30px" }}
          >
            <div class="row " style={{ height: "5rem" }}>
              <div class="col card me-2 pt-3"> Buy once, Use Forever</div>
              <div class="col card me-2 pt-3">Works on Cloud</div>
              <div class="col card me-2 pt-3"> Unlocks Exponential Growth</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center mt-5">
        <div class="row ">
          <div class="col card pt-2" style={{ marginRight: "10px" }}>
            <section className="why-us-section">
              <blockquote>
                <p>
                  "I used to struggle with finding winning products on Etsy.
                  This solution has transformed my business and boosted my
                  confidence." - John decisions
                  <br />
                  <br />
                  From the Desk of: Amit Miglani
                </p>
              </blockquote>
            </section>
          </div>
          <div class="col card pt-2">
            <section className="why-us-section">
              <h2>Why Choose Us?</h2>
              <p>
                It's a proven fact that finding winning products is the key to
                Etsy success. With over 9.86 million sellers on Etsy, proper
                research is crucial. Our solution eliminates the guesswork,
                saves you time, and helps you make data-driven decisions for
                your business.
              </p>
            </section>
          </div>
        </div>
      </div>
      <section class="card mt-5">
        <h2
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          The Winning Formula
        </h2>

        <ul
          class="list-group list-group-flush"
          style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}
        >
          <li class="list-group-item" style={{ color: "#E0115F" }}>
            Go to Quora and look for what people are asking
          </li>
          <li
            class="list-group-item"
            style={{ color: "rgba(224, 17, 95, 0.7)" }}
          >
            Go to Facebook Ads Library and find out what people are running ads
            on...
          </li>
          <li class="list-group-item" style={{ color: "#E0115F" }}>
            Go to Google Ads Library and find the ads being run on different
            products
          </li>
          <li
            class="list-group-item"
            style={{ color: "rgba(224, 17, 95, 0.7)" }}
          >
            Then find out what people are commenting on ads one by one
          </li>
          <li class="list-group-item" style={{ color: "#E0115F" }}>
            Go to Google Trends and search for Increasing/Decreasing Markets
          </li>
          <li
            class="list-group-item"
            style={{ color: "rgba(224, 17, 95, 0.7)" }}
          >
            And then pinpoint the winning product in less than 60 seconds at the
            click of a button
          </li>
        </ul>
        <div
          class="card-footer"
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#A0A0A0",
            textAlign: "center",
          }}
        >
          <p>
            Our solution simplifies this process, removing manual effort and
            frustration. Find winning niches and products within minutes and
            start boosting your sales and income.
          </p>
        </div>
      </section>

      <section className="cta-section" class="card mt-5">
        <h2
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Ready to Scale Your Etsy Business?
        </h2>

        <div
          class="card"
          style={{
            background: "#E37383",
            color: "white",
            fontSize: "20px",
            margin: "5px",
            fontWeight: "500",
          }}
        >
          <ul>
            <hr />
            <li>
              Remove the manual effort and frustration of second guessing your
              business winners
            </li>
            <hr />
            <li>Find Winning Niches within first 2 minutes</li>
            <hr />
            <li>
              PinPoint the Winning Product in less than 60 seconds at the click
              of a Button
            </li>
            <hr />
            <li>
              Go from No Product to your first sale with literally zero trial
              and error
            </li>
            <hr />
            <li>
              Get back the lost time and hours with finding winners faster so
              that you can enjoy the new found time with family
            </li>
            <hr />
            <li>
              Reduce your anxiety and get a peaceful sleep knowing your business
              is growing
            </li>
            <hr />
            <li>
              Your Bank account starts flourishing as your product selections
              turns into River of revenue / flowing river of income
            </li>
            <hr />
            <li>
              Your bank account grows, ensuring a rock-solid future, while also
              swinging open doors to exciting investments and unforgettable
              experiences
            </li>
            <hr />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sales;
