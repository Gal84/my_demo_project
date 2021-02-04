import postService from './PostService.js';

const $postsRow = document.getElementById('posts-row');

export async function renderPosts() {

  try {
    const posts = await postService.getPosts();
    func(posts);
  } catch (err) {
    $postsRow.innerHTML = `<div class="col-12"><i>${err}....</i></div>`;
  }
}
export async function renderSearchedPosts(searchText) {

  try {
    const posts = await postService.searchInPosts(searchText);
    func(posts);
  } catch (err) {
    $postsRow.innerHTML = `<div class="col-12"><i>${err}...</i></div>`;
  }
}
export async function renderByCategoryPosts(category) {

  try {
    const posts = await postService.searchByCategory(category);
    func(posts);
  } catch (err) {
    $postsRow.innerHTML = `<div class="col-12"><i>${err}...</i></div>`;
  }
}
const func = posts => {
  $postsRow.innerHTML = '';
  posts.forEach(post => {
    const { imageUrl, title, category, publishDate, writtenBy, article } = post;
    $postsRow.innerHTML += postService.postItem(imageUrl, title, category, publishDate, writtenBy, article);

  });
}