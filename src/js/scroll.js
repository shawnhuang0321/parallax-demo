
import $ from 'jquery'

let last_scroll_position = 0;

const bg_1_height = document.querySelector('.bg-1').scrollHeight;
const bg_2_height = document.querySelector('.bg-2').scrollHeight;

const content_1 = document.querySelector('#content-1');
const content_2 = document.querySelector('#content-2');
const content_3 = document.querySelector('#content-3');

window.addEventListener('scroll', (e) => {
  last_scroll_position = window.scrollY;
  if (last_scroll_position >= (bg_1_height + content_1.scrollHeight + bg_2_height + content_2.scrollHeight)) {
    content_3.classList.add('popup-enter');
  }
  if (last_scroll_position >= (bg_1_height + content_1.scrollHeight)) {
    content_2.classList.add('popup-enter');
  }
  if (last_scroll_position >= (0.65 * bg_1_height)) {
    if (content_1.classList.length !== 2) {
      content_1.classList.add("popup-enter");
    }
  }
});