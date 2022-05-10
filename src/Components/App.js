import React from "react";
import Header from "./Header";
import Body from "./Body";
import Rating from "./Rating";
import Submit from "./Submit";
import "../sass/main.scss";
class App extends React.Component {
  render() {
    return (
      <main className="component">
        <Header />
        <Body />
        <Rating />
        <Submit />
      </main>
    );
  }
}

export default App;
