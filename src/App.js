import React, { Component } from "react";
import { CardList } from "./components/card-list"; // тухайн компонэнтод байгаа .jsx фөйлын нэр нь index бол энэ комп - ийг дуудахдаа файлын нэрийг бичиж өгөх албагүй
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  // render() - ийн дараа ажилдаг тусгай функц
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robots: data }));
  }

  render() {
    console.log(this.state.robots);
    return (
      <div className="App">
        <h1>Хайлтууд</h1>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
