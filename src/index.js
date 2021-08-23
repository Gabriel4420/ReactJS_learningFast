import React from "react";
import { render } from "react-dom";
import Button from "./components/button";
import PropTypes from "prop-types";
import Card from "./components/card";

import { ButtonGroup, Container, CardGroup } from "./styles";

class App extends React.Component {
  state = {
    contador: 0,
    nome: " ",
  };

  adicionar = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  changeText = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <input onChange={this.changeText} />
        <h1>
          {this.state.nome} está contando:{this.state.contador}{" "}
        </h1>
        <CardGroup>
          <Card color="#B55EF7" title="Aprendizado que te ajuda"></Card>
          <Card color="#B55EF7" title="Aprendizado que te ajuda"></Card>
          <Card color="#B55EF7" title="Aprendizado que te ajuda"></Card>
        </CardGroup>

        <br />
        <ButtonGroup>
          <Button color="#5A86ED" press={this.adicionar} text="Adicionar" />
        </ButtonGroup>
      </Container>
    );
  }
}

render(<App />, document.getElementById("app"));
