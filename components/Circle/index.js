import React from "react";

export default class CircleComponent extends React.Component {
  render() {
    let elements = [];
    for (var i = 0; i < this.props.number; i++) {
      elements.push(<div className='Card-element'></div>);
    }
    return (
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" fill="yellow"></circle>
      </svg>
    );
  };
}
