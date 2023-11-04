import React from "react";
import "./style.css";

export default function Desktop ()  {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <button className="button-open-links" type="button" >
          <img className="img" alt="Button open links" src="home.jpeg" />
          </button>
          <button className="button-open-links" type="button" >
          <img className="img" alt="Button open links" src="contact.jpeg" />
          </button>
          <button className="button-open-links" type="button" >
          <img className="img" alt="Button open links" src="about.jpeg" />
          </button>

          <button className="button-open-links_1" type="button" >
            Sign up
          </button>
          <button className="button-open-links_1" type="button" >
            Login 
          </button>
        </div>
        <div className="overlap">
          <p className="step-into-a-world-of">
            <span className="text-wrapper">
              <br />
            </span>
            <span className="span">
              <br />
              Step into a world of creativity and artistry, where every piece tells a unique story. Our passion for
              handicrafts drives us to curate a collection that celebrates the beauty of handcrafted items. From
              intricately woven textiles to meticulously carved wooden treasures, our store is a treasure trove of
              exquisite craftsmanship.
            </span>
          </p>
          <div className="text-wrapper-2">WELCOME</div>
        </div>
      </div>
    </div>
  );
};
<script>
function myfunction() {
    console.log("CLICKED")}
</script>
