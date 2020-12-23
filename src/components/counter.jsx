import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.classes()}> {this.formateCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.value)}
          className=" btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.value.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  classes() {
    const { value } = this.props.value;
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.props.value;
    return value === 0 ? "zero" : value;
    // let value = count === 0 ? "zero" : count;
    // localStorage.setItem("value", value);
    // let items = localStorage.getItem("value");
    // return items;
  }
}

export default Counter;
