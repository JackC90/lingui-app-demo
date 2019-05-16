import React, { Component } from "react";
import List from "../../components/List/List";

export class Main extends Component {
  render() {
    const content = {
      name: 'Wilson',
      date: Date.now(),
      value: 5,
    };

    return (
      <div className="App">
        <header className="App-header">
          <List content={content} />
        </header>
      </div>
    );
  }
};

export default Main;