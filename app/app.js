import { renderPosts, renderSearchedPosts, renderByCategoryPosts } from './asyncPosts.js';

const $searchPostsField = document.getElementById('search-posts-field');
const $categoryPicker = document.getElementById('category-picker');

renderPosts();

$searchPostsField.addEventListener('input', event => {

  let searchText = event.target.value.trim();

  if (searchText.length > 0) {

    renderSearchedPosts(searchText);

  } else {
    renderPosts();
  }

});

$categoryPicker.addEventListener('change', event => {

  let category = event.target.value;

  if (category != '') {

    renderByCategoryPosts(category);

  } else {
    renderPosts();
  }

});
let d = new Date();
document.getElementById('footer').innerHTML += d.getFullYear();

