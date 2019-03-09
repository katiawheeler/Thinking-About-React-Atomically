import React from 'react';
import styled from 'styled-components';
import { demo } from '../../../config';
import { Button } from '../../atoms';

import defaultBlog from '../../../assets/images/blog_placeholder.png'

const Container = styled('div')`
  width: 400px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;

  & h4 {
    margin: 5px 0px;
    font-size: 18px;
  }

  & button {
      background: ${demo.primary};
      max-width: 200px;
      margin: 0 auto;
      font-size: 14px;
  }
`;

const BlogImage = styled('img')`
  width: 300px;
  height: 200px;
  margin: 0 auto;
`;

const ReadMore = styled('a')`
  font-size: 12px;
  color: ${demo.secondary};
`;

const BlogPost = ({ image = defaultBlog, title }) => (
  <Container>
    <BlogImage src={image} />
    <h4>{title}</h4>
    <Button primary>Read More ></Button>
  </Container>
);

export default BlogPost;
