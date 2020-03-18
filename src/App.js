import React, { Component } from "react";
import { CardList } from "./components/card-list"; // тухайн компонэнтод байгаа .jsx фөйлын нэр нь index бол энэ комп - ийг дуудахдаа файлын нэрийг бичиж өгөх албагүй
import { SearchBox } from "./components/search-box";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
    // react developer - ийн хувьд хамгийн чухал ажил бол энэхүү state төлвүүдийг аль компонэнтод хадгалах вэ гэдгийг боддож олох явдал юм.
  }
  onSearchChanged = event => {
    this.setState({ searchField: event.target.value });
    // console.log(event.target.value);
  };

  // render() - ийн дараа ажилдаг тусгай функц
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robots: data }));
  }

  render() {
    // console.log(this.state.robots);
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(el =>
      el.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1>Хайлтууд</h1>
        <SearchBox onSearch={this.onSearchChanged} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
