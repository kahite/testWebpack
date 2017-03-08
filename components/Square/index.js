import React from "react";

export default class SquareComponent extends React.Component {
  render() {
    let elements = [];
    for (var i = 0; i < this.props.number; i++) {
      elements.push(<div className='Card-element'></div>);
    }
    return (
      <svg height="100" width="100">
        <rect width="80" height="80" stroke="black" fill="red" x="10" y="10"></rect>
      </svg>
    );
  };
}
