import React from 'react';

const Post = ({ title, content, image }) => {
  return (
    <article className="post">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Post;