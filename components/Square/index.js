import React from "react";

export default class SquareComponent extends React.Component {
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

    let elements = [<rect width="80" height="80" fill={color} x="10" y="10"></rect>];
    switch (this.props.fill) {
      case 'semi':
        elements.push(<rect width="70" height="70" fill="white" x="15" y="15"></rect>)
        elements.push(<rect width="40" height="40" fill={color} x="30" y="30"></rect>)
        break;
      case 'empty':
        elements.push(<rect width="70" height="70" fill="white" x="15" y="15"></rect>)
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
