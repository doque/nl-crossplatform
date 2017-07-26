import React from "react";
import styled from "styled-components/primitives";

const logoUrl = "http://i.imgur.com/EZc3lRP.png";

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2d2d2d;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 50px;
  text-align: center;
  margin: 10px;
  color: #61dafb;
  font-weight: bold;
`;

const Description = styled.Text`
  font-size: 25px;
  color: #e9e9e9;
  font-style: italic;
`;

const Logo = styled.Image``;

export default class Demo extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Welcome to React</Title>
        <Logo
          source={{
            uri: logoUrl,
            width: 200,
            height: 200
          }}
        />
        <Description>Awesome!</Description>
      </Wrapper>
    );
  }
}
