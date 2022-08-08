import React, { Component } from "react";
import styled from "styled-components";
import "../index.css";
import psBackg from "./assets/ps.jpg";

const GamesWishlist = styled.div`
  background: url(${psBackg});
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: solid;
  background-color: yellowgreen;
  width: 100%;
  height: 100vh;

  h1 {
    color: black;
    text-shadow: 3px 2px 0px lightblue;
  }

  input {
    border-width: 6px;
  }

  button {
    margin-left: 3px;
    border-radius: 5px;
    width: 70px;
    height: 2.1vw;
    background-color: lightgray;
    box-shadow: 3px 3px 0px black;
    &:hover {
      cursor: pointer;
    }
  }

  li {
    margin-top: 20px;
    margin-left: 20px;
    text-decoration: none;
    font-weight: bold;
  }
`;
const WishList = styled.div`
  button {
    color: red;
    background-color: transparent;
    border: none;
    box-shadow: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
class Main extends Component {
  state = {
    game: "",
    gameList: [],
  };
  handleChange = (event) => {
    this.setState({
      game: event.target.value,
    });
  };

  add = () => {
    if (this.state.game !== "") {
      this.setState({
        gameList: this.state.gameList.concat({
          game: this.state.game,
          id: Date.now(),
        }),
        game: "",
      });
    }
  };

  ClearAll = () => {
    this.setState({
      gameList: this.state.gameList.filter((item) => item.gameList),
    });
  };

  remove = (id) => {
    this.setState({
      gameList: this.state.gameList.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <GamesWishlist>
        <h1>Wish List</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            onChange={this.handleChange}
            value={this.state.game}
            placeholder="Game Name"
          />
          <button onClick={this.add}>Add</button>
          <button onClick={() => this.ClearAll()}>ClearAll</button>
          <ol>
            {this.state.gameList.map((item) => (
              <WishList>
                <li>
                  {item.game}
                  <button onClick={() => this.remove(item.id)}>X</button>
                </li>
              </WishList>
            ))}
          </ol>
        </form>
      </GamesWishlist>
    );
  }
}

export default Main;
