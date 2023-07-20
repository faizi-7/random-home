import React from 'react'
import './Cards.scss'
import CardImg1 from '../../assets/crop.png'
import CardImg2 from '../../assets/focal.png'
import CardImg3 from '../../assets/Ai.png'
import CardImg4 from '../../assets/optimisation.png'
import { FaArrowRight } from 'react-icons/fa';

const Cards = () => {
  return (
    <div className="cards">
      <div className="cardsHeading">
        <h1>Our Features</h1>
        <span>The Complete toolkit to covert a image into something useful!</span>
      </div>
      <div className="cardsContainer">
        <div className="card">
          <img src={CardImg1}/>
          <div className="cardContent">
            <div className="cardHeading">Lorem Ipsum</div>
            <div className="cardBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta quia error porro laboriosam rem! Veniam!</div>
            <div className="cardButton">Go to app <FaArrowRight/></div>
          </div>
        </div>
        <div className="card">
          <img src={CardImg2}/>
          <div className="cardContent">
            <div className="cardHeading">Lorem Ipsum</div>
            <div className="cardBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta quia error porro laboriosam rem! Veniam!</div>
            <div className="cardButton">Go to app <FaArrowRight/></div>
          </div>
        </div>
        <div className="card">
          <img src={CardImg3}/>
          <div className="cardContent">
            <div className="cardHeading">Lorem Ipsum</div>
            <div className="cardBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta quia error porro laboriosam rem! Veniam!</div>
            <div className="cardButton">Go to app <FaArrowRight/></div>
          </div>
        </div>
        <div className="card">
          <img src={CardImg4}/>
          <div className="cardContent">
            <div className="cardHeading">Lorem Ipsum</div>
            <div className="cardBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta quia error porro laboriosam rem! Veniam!</div>
            <div className="cardButton">Go to app <FaArrowRight/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards