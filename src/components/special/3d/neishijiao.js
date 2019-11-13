import React, { Component } from 'react'
import './neishijiao.less'

export default class Neishijiao extends Component {
  componentDidMount() {
    var carousel = document.querySelector('.carousel');
    var cellCount = 9;
    var selectedIndex = 0;
    
    function rotateCarousel() {
      var angle = selectedIndex / cellCount * -360;
      carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
    }
    
    var prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener( 'click', function() {
      selectedIndex--;
      rotateCarousel();
    });
    
    var nextButton = document.querySelector('.next-button');
    nextButton.addEventListener( 'click', function() {
      selectedIndex++;
      rotateCarousel();
    });
    
    //"rotateY(-450deg)"
    var reg = /(rotate\w)\((\d+)\)/ig
    var str = "rotateZ(89)"
    str.replace(reg,function (a,b,c) {
       console.log(a,b,c)
      
    });
  }
  render() {
    return (
        <div>
            <div className="scene">
                <div className="carousel">
                    <div className="carousel__cell">1</div>
                    <div className="carousel__cell">2</div>
                    <div className="carousel__cell">3</div>
                    <div className="carousel__cell">4</div>
                    <div className="carousel__cell">5</div>
                    <div className="carousel__cell">6</div>
                    <div className="carousel__cell">7</div>
                    <div className="carousel__cell">8</div>
                    <div className="carousel__cell">9</div>
                </div>
            </div>
            <p style={{textAlign:'center'}}>
                <button className="previous-button">Previous</button>
                <button className="next-button">Next</button>
            </p>
        </div>
    )
  }
}
