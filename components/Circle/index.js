import React from "react";

export default class CircleComponent extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    let color = 'blue';
    switch (this.props.color) {
      case 'lime':
        color = 'lime';
        break;
      case 'red':
        color = 'red';
        break;
      default:
    }

    let elements = [<circle cx="50" cy="50" r="40" fill={color}></circle>];
    switch (this.props.fill) {
      case 'semi':
        elements.push(<circle cx="50" cy="50" r="35" fill="white"></circle>)
        elements.push(<circle cx="50" cy="50" r="20" fill={color}></circle>)
        break;
      case 'empty':
        elements.push(<circle cx="50" cy="50" r="35" fill="white"></circle>)
        break;
      default:
    }

    return (
      <svg height="100" width="100">
        {elements}
      </svg>
    );
  };
}
