import React from 'react';
import styled from 'styled-components';
import { demo } from '../../../config';

import articleBackground from '../../../assets/images/article_background.jpg';
import background from '../../../assets/images/background.jpg';

import { Header, Content, Hero, Footer } from '../../organisms';
import { Banner } from '../../atoms';

const p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula velit, luctus et venenatis in, mollis sit amet nisl. Fusce tincidunt libero ut consequat efficitur. Fusce consequat erat sed dui congue, sit amet mattis quam luctus. Aenean iaculis tincidunt congue. Nunc maximus ante urna, non commodo ex egestas at. Ut in est nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo ipsum non quam rutrum, eu ornare mi suscipit. Nulla pretium nunc in vestibulum malesuada. Duis iaculis, sapien in auctor dignissim, sem nibh efficitur tellus, in luctus est eros ac metus. Morbi faucibus purus quis ante tristique, suscipit facilisis dui pharetra. Aliquam lobortis, sem vel faucibus facilisis, tellus ante ultrices arcu, nec efficitur dolor augue gravida nibh. Proin nunc nulla, volutpat nec magna eget, finibus posuere purus.";
const p2 = "Nunc tempus augue ac enim lobortis, ac vestibulum justo euismod. Nullam ante nisl, malesuada sed cursus sed, gravida quis felis. Proin egestas elementum posuere. Nunc convallis, ipsum in dictum posuere, ante lacus consectetur dolor, vel consequat ante lectus non lectus. Proin vel rutrum metus, at volutpat lorem.";
const p3 = "Vestibulum ut sem sit amet augue tristique pulvinar eget ut lacus. Duis ultrices risus pretium volutpat suscipit. In mauris elit, pretium sed fringilla ut, lacinia non libero. In orci arcu, sagittis aliquam malesuada quis, congue nec quam. Praesent porta ex a libero dignissim tincidunt. Sed at felis bibendum turpis suscipit tempor at in est. Aliquam sit amet odio nec neque dapibus porta.";
const p4 = "Pellentesque vulputate enim eget tincidunt rhoncus. Praesent eu ante eget magna elementum iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sed tincidunt nunc, in feugiat est. Aenean orci orci, volutpat in sem quis, tincidunt rhoncus lorem. Nulla pretium iaculis felis, sed tincidunt neque mollis nec. Nullam venenatis lacus a leo hendrerit iaculis. Phasellus vitae mi feugiat, egestas felis a, vehicula sem. Nullam sed mattis orci, sed viverra metus. Aliquam accumsan, augue vehicula facilisis feugiat, dui est condimentum dui, efficitur rutrum metus nibh vel massa. Vivamus congue pellentesque mattis. Sed laoreet bibendum dignissim.";

const content = [p1, p2, p3, p4];

const ArticleWrapper = styled('div')`
  zoom: 70%;
  max-width: 1200px;

  & .logo {
    background: ${demo.secondary};
  }

  & button {
    color: ${demo.grey[600]};
  }

  & .search {
    background: ${demo.primary};
  }
`;

const Article = () => (
  <ArticleWrapper>
    <Header logo='Natural World' />
    <Banner image={articleBackground} height={'185'} />
    <Content title={'Are Volcanoes Really That Dangerous?'} subtitle={'Or are we just invading their territory?'} author={'Jane Doe'} content={content}/>
    <Banner image={background} height={'185'} />
    <Footer />
    </ArticleWrapper>
);

export default Article;
