import React, { Component } from 'react';
import './styles/InstagramPosts.less';

class InstagramPosts extends Component {
  constructor(props) {
    super(props);
    this.finalPosts = [];
    this.getInstagramPosts = this.getInstagramPosts.bind(this);
  }

  getInstagramPosts() {
    this.finalPosts = this.props.setInstagramPosts.map((post, i) => (
      <img alt={i} key={i} src={post.images.thumbnail.url} />
    ));
  };

  render() {
    this.getInstagramPosts();
    return (
      <div>
        <h1>Food Blog</h1>
        <div className='post-wrapper'>
          {this.finalPosts}
        </div>
      </div>
    );
  }
}

export default InstagramPosts;
