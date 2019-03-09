import React from 'react';
import SocialIcon from '../SocialIcon';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import colors from '../../config/colors';
import me from '../../assets/images/me.jpg';
import styled from 'styled-components';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


const ContactInfo = () => (
  <Wrapper>
    <img
      src={me}
      style={{
        borderRadius: '100%',
        maxWidth: '300px',
        height: '300px',
        margin: '0 auto 20px auto'
      }}
    />
    <div style={{ width: '350px', margin: '0 auto' }}>
      <SocialIcon icon={faTwitter} link={'@KatiaKWheeler'} color={'#1DA1F2'} />
      <SocialIcon
        icon={faLinkedin}
        link={'/in/katiakwheeler/'}
        color={'#0077B5'}
      />
      <SocialIcon
        icon={faMousePointer}
        link={'katiawheeler.com'}
        color={colors.primary}
      />
      <SocialIcon
        icon={faGithub}
        link={'/katiawheeler'}
        color={colors.white}
      />
    </div>
  </Wrapper>
);
export default ContactInfo;
