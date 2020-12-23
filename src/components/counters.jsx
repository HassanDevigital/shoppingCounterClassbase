import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleIncrement = (parameterObj) => {
    const newArray = [...this.state.counters];
    const indexnumber = newArray.indexOf(parameterObj);
    newArray[indexnumber] = { ...parameterObj };
    newArray[indexnumber].value++;
    this.setState({ counters: newArray });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const rmainings = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: rmainings });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset All
        </button>
        {this.state.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              value={counter}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
