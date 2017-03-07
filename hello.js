import React from "react";

export default class HelloComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  };

  render() {
    return (
      <div>
          Hello!<br />
	  prop1: {this.props.prop1}<br/>
	  prop2: {this.props.prop2}<br/>
	  selected: {(this.state.selected == true)? 'true' : 'false'}
      </div>
    );
  };
}
