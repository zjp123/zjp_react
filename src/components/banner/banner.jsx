import React, {Component} from 'react';
// import {render} from 'react-dom';
import ReactSwiper from 'reactjs-swiper';
// import './sass/example.scss'; // 自定义 css
import './baner.less'

const ReactSwiperExample = () => {
  const items = [{
    image: require('../../imgs/banner2.png'),
    title: '图片1',
    link: 'http://jd.com'
  }, {
    image: require('../../imgs/banner3.png'),
    title: '图片2',
  }, {
    image: require('../../imgs/banner5.png'),
    title: '图片3',
    link: 'http://jd.com'
  }];

  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
  return (
    <ReactSwiper swiperOptions={swiperOptions} showPagination={true} items={items}
    className="swiper-example"     />
  );
};

export default ReactSwiperExample

