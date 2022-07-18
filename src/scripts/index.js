/**
const cardTitleRef = document.querySelector('.card-title');
const cardRef = document.querySelector('.card');
const titleRef = document.querySelector('.title');

const tagRef = document.querySelector('[data-name="Css"]');
// console.log(cardRef.contains(cardTitleRef));
// console.log(cardRef.contains(titleRef));
console.log(tagRef.dataset);

cardRef.addEventListener('click', (event) => {
  console.dir(event.target.children);
});
*/

const formRef = document.querySelector('#form');
const tagsRef = Array.from(document.querySelectorAll('.tag'));
const featureNameRef = document.querySelector('[data-selected]');
const tagsContainerRef = document.querySelector('.tags');

const handleClick = (event) => {
  const { target } = event;
  console.log(target);
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  // console.log(currentTarget);
  // const currentTarget = event.currentTarget;
  const { name } = target.dataset;
  // const name = currentTarget.dataset.name;
  featureNameRef.textContent = name;
};

const handleAddTag = (event) => {
  event.preventDefault();
  const { target } = event;
  const feature = target.elements.feature;
  const value = feature.value;

  const tag = document.createElement('button');
  tag.classList.add('tag');
  tag.textContent = value;
  tag.dataset.name = value;
  tag.addEventListener('click', handleClick);
  tagsContainerRef.append(tag);
};

/** 
 *   Без делегування подій
tagsRef.forEach((tag) => {
  tag.addEventListener('click', handleClick);
});
*/

tagsContainerRef.addEventListener('click', handleClick);

formRef.addEventListener('submit', handleAddTag);
