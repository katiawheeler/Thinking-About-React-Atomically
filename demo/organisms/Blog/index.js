import React from 'react';
import styled from 'styled-components';
import { BlogPost } from '../../molecules';
import { demo } from '../../../config';


import forest from '../../../assets/images/forest.jpg';
import volcano from '../../../assets/images/volcano.jpg';
import mountain from '../../../assets/images/mountain.jpg';

const Container = styled('div')`
  background: ${demo.white};
  color: ${demo.black};
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InnerContainer = styled('div')`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const defaultBlogs = [
  {
    image: forest,
  title: 'Best Forest Hiking of 2019',
},
  {
    image: volcano,
  title: 'Are Volcanoes Really That Dangerous?',
},
  {
    image: mountain,
  title: 'Mountains are Climbing Higher',
},
]

const Blog = ({blogs = defaultBlogs}) => (
  <Container>
    <InnerContainer>
    {blogs.map((blog, i) => <BlogPost key={i + blog.title} title={blog.title} image={blog.image} />)}
    </InnerContainer>
  </Container>
);

export default Blog;
