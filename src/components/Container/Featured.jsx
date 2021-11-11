import React from "react";
import styled from "styled-components";
import { useStore } from "../../contexts/Store";
import moment from "moment";

const Featured = ({ store, retrieveFeatured }) => {
  const { getFeaturedArticle } = useStore();
  const newestFeatured = getFeaturedArticle();
  console.log(newestFeatured, "hey");

  const featuredPost = newestFeatured.sort((a, b) => {
    return a.fields.date - b.fields.date;
  });

  const title = featuredPost[0]?.fields.title;
  const content = featuredPost[0]?.fields.content;
  console.log(featuredPost[0], "hello");
  return (
    <Div>
      <Image
        alt="Holistic wellness image"
        src="https://via.placeholder.com/200x100"
      />
      <Info>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <ButtonDiv>
          <ReadMore>Read More</ReadMore>
        </ButtonDiv>
      </Info>
    </Div>
  );
};
export default Featured;

const Div = styled.div`
  border-top: solid;
  border-bottom: solid;
  border-color: black;
  width: 1127px;
  height: 400px;
  display: flex;
`;
const Title = styled.h1`
  font-family: "Playfair Display", serif;
  margin: 20px;
`;

const Content = styled.span`
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  height: 300px;
  width: 500px;
  align-self: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ReadMore = styled.button`
  background-color: transparent;
  border-style: none;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonDiv = styled.div`
  margin-left: 20px;
`;
