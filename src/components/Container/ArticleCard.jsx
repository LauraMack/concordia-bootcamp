import React from "react";
import { getAllArticles } from "../../services/contentful";
import styled from "styled-components";

const ArticleCard = ({ title, category }) => {
  return (
    <Div>
      <div>
        <Image
          alt="Holistic wellness image"
          src="https://via.placeholder.com/200x100"
        />
      </div>
      <div>
        <Title>{title}</Title>
        <Category>{category}</Category>
      </div>
    </Div>
  );
};

export default ArticleCard;

const Div = styled.div`
  background-color: white;
  margin: 30px;
  display: inline-block;
  height: 375px;
  width: 500px;
  &:hover {
    border-style: solid;
    border-color: black;
    border-width: 1px;
  }
`;

const Image = styled.img`
  margin: 0 px;
  max-width: 100%;
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  margin: 10px;
`;

const Category = styled.p`
  margin: 10px;
`;
