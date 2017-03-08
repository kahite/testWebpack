import React from "react";

export default class TriangleComponent extends React.Component {
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

    let elements = [<polygon points="50,10 90,90 10,90" fill={color}></polygon>];
    switch (this.props.fill) {
      case 'semi':
        elements.push(<polygon points="50,20 82.5,85 17.5,85" fill="white"></polygon>)
        elements.push(<polygon points="50,40 67.5,75 32.5,75" fill={color}></polygon>)
        break;
      case 'empty':
        elements.push(<polygon points="50,20 82.5,85 17.5,85" fill="white"></polygon>)
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
