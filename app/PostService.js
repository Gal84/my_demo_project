import PromiseService from './PromiseService.js';
import { posts } from './posts.js';

class PostService extends PromiseService {

  getPosts() {
    return this.getDataAsPromise(posts, 'No post found');
  }

  searchInPosts(searchText) {
    const relevantPosts = posts.filter(post => post.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1);
    return this.getDataAsPromise(relevantPosts, 'No post found');
  }

  searchByCategory(category) {
    const relevantPosts = posts.filter(post => post.category === category);
    return this.getDataAsPromise(relevantPosts, 'No post found');
  }

  postItem(imageUrl, title, category, publishDate, writtenBy, article) {
    return `
      <div class="col-md-6 my-2">
        <div class="card post-card-wrp">
          <img height="359" src="${imageUrl}" class="card-img-top"
            alt="post image">
          <div class="card-body">
            <h5 class="card-title mb-0">${title}</h5>
            <small>
              <span><i class="fa fa-tag " aria-hidden="true"></i> ${category}</span>
              <span class="ml-2"><i class="fa fa-calendar" aria-hidden="true"></i> ${publishDate}</span>
              <span class="ml-2"><i class="fa fa-user-circle" aria-hidden="true"></i> ${writtenBy}</span>
            </small>
            <p class="card-text mt-2">${article}</p>
          </div>
        </div>
      </div>`;
  }

}

export default new PostService();