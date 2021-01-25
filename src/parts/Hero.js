import React from 'react';

import ImageHero from 'assets/images/img-hero.jpg';
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icon/ic_cities.svg';
import IconTravelers from 'assets/images/icon/ic_traveler.svg';
import IconTreasure from 'assets/images/icon/ic_treasure.svg'; 
import Button from 'elements/Button/index'; 
import FormatNumber from 'utils/formatNumber';

export default function Hero(props) { 
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth'
    })
  }

  return (
    <section className="container pt-5"> 
      <div className="row align-items-center"> 
        <div className="col-auto pr-5" style={{ width: 500 }}> 
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br/>
            Start Next Vacation
          </h1>
          <p className="mb-4 font-wight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
              We provide what you need to enjoy your holiday with family.
              Time to make another memorable moments.
              Your money can return but your time is not.
          </p>
          <Button className="btn" hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now
          </Button> 

          <div className="row" style={{ marginTop: 80}}>
            <div className="col-auto" style={ {marginRight: 35}}>
              <img src={IconTravelers} alt={props.data.travelers}/>
              <h6 className="mt-3">{FormatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">travelers</span></h6>
            </div>
            <div className="col-auto" style={ {marginRight: 35}}>
              <img src={IconTreasure} alt={props.data.treasures}/>
              <h6 className="mt-3">{FormatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">treasure</span></h6>
            </div>
            <div className="col-auto">
              <img src={IconCities} alt={props.data.cities}/>
              <h6 className="mt-3">{FormatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">cities</span></h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5"> 
          <div style={{ width: 520, height: 410}}> 
            <img src={ImageHero} alt="House" className="img-fluid position-absolute" style={{ margin: "-30px 0 0 -30px", zIndex: 1}}/> 
            <img src={ImageHeroFrame} alt="House Frame" className="img-fluid position-absolute" style={{ margin: "0 -15px -15px 0"}}/> 
          </div>
        </div>
      </div>
    </section>
  );
}
