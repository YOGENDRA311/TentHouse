import React from "react";
import "./Home.css";
import SimpleImageSlider from "react-simple-image-slider";

function Home() {
  const image = [
    {
      url: "./images/2.jpg",
    },
    // {
    //   url: "./images/3.jpg",
    // },
    // {
    //   url: "./images/4.jpg",
    // },
    // {
    //   url: "./images/5.jpg",
    // },
    {
      url: "./images/6.jpg",
    },
    {
      url: "./images/7.jpg",
    },
    {
      url: "./images/8.jpg",
    },
    {
      url: "./images/9.jpg",
    },
  ];

  return (
    <div className="home">
      <img
        src="http://starutsavevents.com/blog/wp-content/uploads/2020/03/newtent-house-image.jpg"
        alt=""
      />
      <div className="home__galary">
        <h3>Galary</h3>
        <div className="galary__images">
          <SimpleImageSlider
            width={900}
            height={500}
            images={image}
            showBullets={true}
            showNavs={true}
          />
        </div>
        <h3>Community</h3>
        <div className="community">
          <div className="community__people">
            <img className="people__image" src="./images/owner.jpg" alt="" />
            <p>Name:-MAHAVEER SINGH</p>
            <h3>Founder and Owner</h3>
            <h4>Mobile No.:- 9950946749</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              cupiditate laboriosam provident repudiandae enim quibusdam dolorem
              cumque officia, id aliquam optio cum, incidunt odio repellat ipsum
              explicabo corrupti deserunt, ullam porro? Rem quia dignissimos
              obcaecati mollitia nostrum quaerat ducimus eaque minima ex sint
              repellat, praesentium id at culpa libero. Culpa.
            </p>
          </div>
          <div className="community__people">
            <img className="people__image" src="./images/1st.png" alt="" />
            <p>Name:-LALIT SINGH</p>
            <h3>Side Manager</h3>
            <h4>Mobile No.:- 6375422034</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              cupiditate laboriosam provident repudiandae enim quibusdam dolorem
              cumque officia, id aliquam optio cum, incidunt odio repellat ipsum
              explicabo corrupti deserunt, ullam porro? Rem quia dignissimos
              obcaecati mollitia nostrum quaerat ducimus eaque minima ex sint
              repellat, praesentium id at culpa libero. Culpa.
            </p>
          </div>
          <div className="community__people">
            <img className="people__image" src="./images/manager.jpg" alt="" />
            <p>Name:-YOGENDRA SINGH</p>
            <h3>Manager</h3>
            <h4>Mobile No.:- 6375422034</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              cupiditate laboriosam provident repudiandae enim quibusdam dolorem
              cumque officia, id aliquam optio cum, incidunt odio repellat ipsum
              explicabo corrupti deserunt, ullam porro? Rem quia dignissimos
              obcaecati mollitia nostrum quaerat ducimus eaque minima ex sint
              repellat, praesentium id at culpa libero. Culpa.
            </p>
          </div>
        </div>

        <h3>Contact Us</h3>
        <div className="contact">
          <div className="title">
            <p>
              Let's Contact With <span>Us</span>
            </p>
          </div>
          <div className="number">
            <p>
              Call:- <span>9950946749</span> or Enquiry
              <button>Get In Touch</button>
            </p>
          </div>
        </div>

        <h3>Plans</h3>
        <div className="plans">
          <div className="plan__types">
            <img src="./images/9.jpg" alt="" />
            <h4>Fiber Stage</h4>
            <p>
              Fiber Stage with Entry snd Lighting. open pandal 75*90 with
              sidewall and 45 feet entry. 65kv genrator and home decoration
              included.
            </p>
            <p>price: 1,50,000 INR</p>
            <button>Book Now</button>
          </div>
          <div className="plan__types">
            <img src="./images/8.jpg" alt="" />
            <h4>open Pandal with Entry 90ft.</h4>
            <p>
              Fiber Stage with Entry snd Lighting. open pandal 75*90 with
              sidewall and 45 feet entry. 65kv genrator and home decoration
              included.
            </p>
            <p>price: 1,30,000 INR</p>
            <button>Book Now</button>
          </div>
          <div className="plan__types">
            <img src="./images/4.jpg" alt="" />
            <h4>Fiber stage, Pack Pandal and Entry </h4>
            <p>
              Fiber Stage with Entry snd Lighting. open pandal 75*90 with
              sidewall and 45 feet entry. 65kv genrator and home decoration
              included.
            </p>
            <p>price: 2,50,000 INR</p>
            <button>Book Now</button>
          </div>
          <div className="plan__types">
            <img src="./images/2.jpg" alt="" />
            <h4>Fiber Stage and Gajuba</h4>
            <p>
              Fiber Stage with Entry snd Lighting. open pandal 75*90 with
              sidewall and 45 feet entry. 65kv genrator and home decoration
              included.
            </p>
            <p>price: 3,00,000 INR</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
