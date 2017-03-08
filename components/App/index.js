import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/index";

ReactDOM.render(
  <div className="container">
    <div className="row">
      <Card color="Red" shape="square" prop3="full" number="1"/>
      <Card color="Blue" shape="triangle" prop3="empty" number="2"/>
      <Card color="Red" shape="circle" prop3="semi" number="3"/>
      <Card color="Red" shape="circle" prop3="semi" number="1"/>
    </div>
    <div className="row">
      <Card color="Red" shape="triangle" prop3="full" number="3"/>
      <Card color="Blue" shape="circle" prop3="empty" number="2"/>
      <Card color="Red" shape="square" prop3="semi" number="1"/>
      <Card color="Red" shape="triangle" prop3="semi" number="2"/>
    </div>
    <div className="row">
      <Card color="Red" shape="circle" prop3="full" number="2"/>
      <Card color="Blue" shape="triangle" prop3="empty" number="1"/>
      <Card color="Red" shape="triangle" prop3="semi" number="1"/>
      <Card color="Red" shape="square" prop3="semi" number="3"/>
    </div>
  </div>,
  document.body
);
