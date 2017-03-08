import React from "react";

export default class TriangleComponent extends React.Component {
  render() {
    let elements = [];
    for (var i = 0; i < this.props.number; i++) {
      elements.push(<div className='Card-element'></div>);
    }
    return (
      <svg height="100" width="100">
        <polygon points="50,10 90,90 10,90" stroke="black" fill="lime"></polygon>
      </svg>
    );
  };
}
