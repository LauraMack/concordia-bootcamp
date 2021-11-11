import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleFeed from "./components/Container/ArticleFeed";
import Featured from "./components/Container/Featured";
import styled from "styled-components";

function App() {
  const store = useStore();

  console.log("TODO: use the store to create the base UI", store);

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />
        <Blog>Blog</Blog>
        <Container>
          <Featured store={store} />
          <ArticleFeed store={store} />
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;

const Blog = styled.h1`
  font-size: 60px;
  margin-left: 130px;
  padding: 20px;
`;
