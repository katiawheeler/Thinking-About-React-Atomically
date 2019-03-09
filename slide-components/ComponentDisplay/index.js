import React from 'react';
import { Button, Input, Label } from '../../demo/atoms';
import styled from 'styled-components';
import { colors } from '../../config';

const FlexDiv = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  zoom: ${props => props.zoom ? '75%' : '100%'};
  width: 100%;
  min-height: 60px;
`;

const Info = styled('div')`
  text-transform: uppercase;
  color: ${colors.grey[200]};
`;

const AlteredInput = styled('div')`
  max-width: 200px;
`;

const Component = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`

const defaultComponents = [
  {
  component: <Label>Search the site</Label>,
  name: "Label"
  },
  {
  component: <AlteredInput>
        <Input placeholder={'Enter keyword...'} />
      </AlteredInput>,
  name: "Input"
  },
  {
  component: <Button style={{margin: 0}} primary>Search</Button>,
  name: "Button"
  },
]

const Container = styled('div')`
  width: 100%;
  max-width: 1000px;
  min-width: 800px;
`

const ComponentDisplay = ({ components = defaultComponents, zoom }) => (
  <Container>
  { components.map((component, i) => <FlexDiv zoom={zoom} key={i}><Component>{component.component}</Component><Info>{component.name}</Info></FlexDiv>) }
  </Container>
);

export default ComponentDisplay;
