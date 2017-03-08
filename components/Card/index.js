import React from "react";
import Circle from "../Circle/index"
import Square from "../Square/index"
import Triangle from "../Triangle/index"

export default class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  };

  render() {
    let shape = <Circle color={this.props.color} fill={this.props.fill}/>;
    switch (this.props.shape) {
      case 'square':
        shape = <Square color={this.props.color} fill={this.props.fill}/>;
        break;
      case 'triangle':
        shape = <Triangle color={this.props.color} fill={this.props.fill}/>;
        break;
      default:
    }

    let elements = [];
    for (var i = 0; i < this.props.number; i++) {
      elements.push(<div className='Card-element'>{shape}</div>);
    }

    return (
      <div className="no-gutters col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className={this.state.selected ? "Card Card--selected": "Card"} onClick={this.select.bind(this)}>
          {elements}
        </div>
      </div>
    );
  };

  select() {
    this.setState({selected: !this.state.selected});
  };
}
