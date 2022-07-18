import './scripts/index';
import gsap from 'gsap';
import Swiper from 'swiper';
import sumTwoValues, { BASE_URL as BASE_HELPERS_URL } from './scripts/helpers';
import { BASE_URL, SLIDER_SETTINGS } from './scripts/settings';
import * as GLOBAL_SETTINGS from './scripts/settings';

import './style.scss';

const animatedItems = [
  document.querySelector('.title'),
  document.querySelector('.card-title'),
  document.querySelector('#form'),
  document.querySelector('.card-description'),
  document.querySelector('.tags'),
];

gsap.set(animatedItems, { opacity: 0, y: 50 });
gsap.to(animatedItems, { opacity: 1, y: 0, duration: 0.9, stagger: 0.2 });

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});

// console.log(sumTwoValues(2, 2));
// console.log(BASE_URL);
// console.log(BASE_HELPERS_URL);
console.log(GLOBAL_SETTINGS);
console.log(GLOBAL_SETTINGS.BASE_URL);
