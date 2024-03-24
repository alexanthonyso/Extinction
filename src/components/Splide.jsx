import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "../styles/splide.css";
/* img */
import image1 from "../assets/img/brownbear.png";
import image2 from "../assets/img/polarbear.png";
import image3 from "../assets/img/giantpanda.png";
import image4 from "../assets/img/tortue.jpg";
import image5 from "../assets/img/dugong.png";
import image6 from "../assets/img/beluga.png";
import image7 from "../assets/img/pantheresnebuleuse.png";
import image8 from "../assets/img/tigre.png";
import image9 from "../assets/img/walibiroche.png";
import image10 from "../assets/img/capepenguin.png";
import image11 from "../assets/img/thehawaiianmonkseal.png";
import image12 from "../assets/img/emperorpenguin.png";

function SplideSlider() {
  return (
    <div className="splide-container">
      <Splide
        options={{
          type: "loop",
          perPage: 2,
          perMove: 2,
          pagination: false,
          speed: 2000,
          wheel: true,
          breakpoints: {
            1000: {
              perPage: 1,
              perMove: 1,
              type: "carousel",
              direction: "ttb",
              height: "none",
              wheel: true,
              arrows: false,
            },
          },
          
        }}
      >
        <SplideSlide>
          <h2>EUROPEAN BROWN BEAR</h2>

          <div className="info">
            <p>SCIENTIFIC NAME : URSUS MARITIMUS</p>
            <p>POPULATION : 15 000 </p>
            <p>
              AREA : NORTHERN EUROPE, SOUTHERN SCANDINAVIA, SPAIN, FRANCE,
              EASTERN ROMANIA
            </p>
          </div>
          <img src={image1} alt="european brown bear" />
        </SplideSlide>
        <SplideSlide>
          <div className="slide-wrapper">
            <img src={image2} alt="polar bear" />
            <h2>POLAR BEAR</h2>
            <div className="info-two">
              <p>SCIENTIFIC NAME : URSUS MARITIMUS</p>
              <p>POPULATION : 20 000</p>
              <p> AREA : ARTIC</p>
            </div>
            <img src={image3} alt="giant panda" />
            <h2 className="h2III">GIANT PANDA</h2>
            <div className="info-tree">
              <p>SCIENTIFIC NAME : AILUROPODA MELANOLEUCA</p>
              <p>POPULATION : 1 864 </p>
              <p> AREA : CHINA </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <h2>SEA TURTLE</h2>
          <div className="info">
            <p>SCIENTIFIC NAME : CHELONIOIDEA </p>
            <p>POPULATION : 1 500 000 </p>
            <p> AREA : CENTRAL EUROPE, SCANDINAVIA, CARPATHIANS</p>
          </div>
          <img src={image4} alt="sea turtle" />
        </SplideSlide>
        <SplideSlide>
          <div className="slide-wrapper">
            <img src={image5} alt="dugong" />
            <h2>DUGONG</h2>
            <div className="info-two">
              <p>SCIENTIFIC NAME : DUGONG DUGON </p>
              <p>POPULATION : 78 700</p>
              <p> AREA : AUSTRALIA, PERSIAN GULF, RED SEA, NEW CALEDONIA</p>
            </div>
            <div>
              <img src={image6} alt="beluga" />

              <h2 className="h2III">BELUGA</h2>

              <div className="info-tree">
                <p>SCIENTIFIC NAME : DELPHHINAPTERUS LEUCAS </p>
                <p>POPULATION : 136 000 </p>
                <p> AREA : ARTIC</p>
              </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <h2> BLACK RHINOCEROS</h2>
          <div className="info">
            <p>SCIENTIFIC NAME : BLACK RHINO : DICEROS BICORNIS ,</p>
            <p>POPULATION : 5 000</p>
            <p> AREA : AFRICA</p>
          </div>
          <img src={image7} alt="panthera" />
        </SplideSlide>
        <SplideSlide>
          <div className="slide-wrapper">
            <img src={image8} alt="tiger" />
            <h2>TIGER</h2>
            <div className="info-two">
              <p>SCIENTIFIC NAME : PANTHERA TIGRIS </p>
              <p>POPULATION : 3 890</p>
              <p>
                AREA : HIMALAYAS,SOUTHEAST MAINSLAND ASIA, ISLAND OF
                SUMATRA,CHINA,EASTERN RUSSIA
              </p>
            </div>
            <img src={image9} alt="wallaby" />
            <h2 className="h2III">ROCK WALLABY</h2>
            <div className="info-tree">
              <p>SCIENTIFIC NAME : PETROGALE LATERALIS </p>
              <p>POPULATION : 10 000 </p>
              <p> AREA : AUSTRALIA</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <h2>CAPE PENGUIN</h2>

          <div className="info">
            <p>SCIENTIFIC NAME : URSUS MARITIMUS</p>
            <p>POPULATION : 50 000 </p>
            <p>AREA : AFRICA</p>
          </div>
          <img src={image10} alt="european brown bear" />
        </SplideSlide>
        <SplideSlide>
          <div className="slide-wrapper">
            <img src={image11} alt="polar bear" />
            <h2>THE PUFFIN</h2>
            <div className="info-two">
              <p>SCIENTIFIC NAME : FRATERCULA ARCTICA</p>
              <p>POPULATION : 7 400 000</p>
              <p> AREA : CANADA,ICELAND,IRELAND,FRANCE,SCOTLAND,SCANDINAVIA</p>
            </div>
            <img src={image12} alt="giant panda" />
            <h2 className="h2III">EMPEROR PENGUIN</h2>
            <div className="info-tree">
              <p>SCIENTIFIC NAME : APTENODYTES FORSTERI</p>
              <p>POPULATION : 600 000</p>
              <p> AREA : ANTARCTICA </p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default SplideSlider;
