import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/index";

ReactDOM.render(
  <div className="container">
    <div className="row">
      <Card color="blue" shape="square" fill="empty" number="1"/>
      <Card color="blue" shape="triangle" fill="semi" number="2"/>
      <Card color="blue" shape="circle" fill="full" number="3"/>
      <Card color="blue" shape="square" fill="empty" number="3"/>
    </div>
    <div className="row">
      <Card color="red" shape="triangle" fill="empty" number="2"/>
      <Card color="red" shape="circle" fill="semi" number="1"/>
      <Card color="red" shape="square" fill="full" number="1"/>
      <Card color="red" shape="triangle" fill="semi" number="2"/>
    </div>
    <div className="row">
      <Card color="lime" shape="circle" fill="empty" number="3"/>
      <Card color="lime" shape="square" fill="semi" number="3"/>
      <Card color="lime" shape="triangle" fill="full" number="2"/>
      <Card color="lime" shape="circle" fill="full" number="1"/>
    </div>
  </div>,
  document.body
);
