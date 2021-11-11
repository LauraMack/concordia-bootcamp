import React from "react";
import { StoreContext } from "../../contexts/Store";
import {
  getAllArticles,
  getArticlesByCategory,
} from "../../services/contentful";
import ArticleCard from "./ArticleCard";

import styled from "styled-components";

//PaginatedArticleList

const ArticleFeed = ({ store }) => {
  const [moreArticles, setMoreArticles] = React.useState(6);
  const handleLoadMore = () => {
    setMoreArticles(moreArticles + 6);
  };
  return (
    <Div>
      <CategoryDiv>
        <Categories>Categories</Categories>
      </CategoryDiv>
      <CategoryButton>
        <ViewButton>VIEW ALL</ViewButton>
        <Button>HEALTH AND WELLNESS</Button>
        <Button>FOR ORGANIZATIONS</Button>
        <Button>LIFE AT DIALOGUE</Button>
        <Button>PRODUCT UPDATES</Button>
        <Button>NEWS</Button>
        <Button>HUMANIZING HEALTHCARE</Button>
      </CategoryButton>
      <Divtwo>
        {store.articles
          .slice(0, moreArticles ? moreArticles : store.articles.length)
          .map((article, index) => {
            const singleArticle = article;
            const title = singleArticle.fields.title;
            const category = singleArticle.fields.category;
            return (
              <ArticleCard
                singleArticle={singleArticle}
                title={title}
                category={category}
              />
            );
          })}
      </Divtwo>
      <ButtonDiv>
        <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      </ButtonDiv>
    </Div>
  );
};

export default ArticleFeed;

const Div = styled.div`
  background-color: #fdd9b5;
`;

const LoadMore = styled.button`
  height: 50px;
  width: 200px;
  font-family: "Playfair Display", serif;
  background-color: transparent;
  border-radius: 40px;
  color: black;
  border-color: black;
  border-width: 2px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1120px;
  background-color: transparent;
  border-style: none;
`;

const CategoryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1120px;
  padding: 20px;
`;

const Categories = styled.h2`
  font-size: 35px;
`;

const CategoryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  padding: 20px;
  flex-flow: row wrap;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #add8e6;
  margin: 10px;
  padding-left: 40px;
  padding-right: 40px;
  width: max-content;
  border-radius: 70px;
  height: 50px;
  text-align: center;
  border-style: none;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border-color: #add8e6;
    border-style: solid;
    border-width: 3px;
  }
`;

const ViewButton = styled.button`
  background-color: transparent;
  border-color: #add8e6;
  margin: 10px;
  padding-left: 40px;
  padding-right: 40px;
  width: max-content;
  border-radius: 70px;
  height: 50px;
  text-align: center;
  border-style: solid;
  border-width: 3px;
  font-size: 16px;
  cursor: pointer;
`;

const Divtwo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
