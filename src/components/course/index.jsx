import React, { Component } from "react";

import "./style.css";

class Course extends Component {
  state = {
    course: null
  };

  componentDidMount = () => {
    fetch("https://1234.mn/api/courses/" + this.props.match.params.id)
      .then(response => response.json())
      .then(data => this.setState({ course: data[0] }));
  };

  render() {
    console.log(this.state.course);
    return (
      <div className="card-container2">
        {this.state.course ? (
          <div>
            <img src={this.state.course.zurag} alt="" />
            <h2> {this.state.course.ner} </h2>
            <p> {this.state.course.price} </p>
            <p> {this.state.course.create_date} </p>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.course.tailbar }}
            />
          </div>
        ) : (
          <p>Түр хүлээнэ үү....</p>
        )}
      </div>
    );
  }
}

export default Course;
