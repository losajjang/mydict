import "./App.css";
import Header from "./Header";
import Cards from "./Cards";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import AddCard from "./AddCardPage";
import CardDetail from "./CardDetail";



function App() {

  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <Cards />
          </Route>
          <Route path="/carddetail/:id" exact>
            <CardDetail CardDetail={CardDetail} />
          </Route>
          <Route path="/addcard" exact>
            <AddCard />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 0;
  background-color: #fff5ee;
  height: 1fr;
`;

export default App;
