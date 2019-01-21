import React, { Component } from "react";
import "./Food.css";

class FoodElement extends Component {
  _renderMenus = () => {
    const mmmm = this.props.menus.map((menu, index) => {
      if (menu.description.includes("http")) {
        return <img className="menu__img" src={menu.description} alt="" />;
      } else {
        return <div>{menu.description}</div>;
      }
    });
    return mmmm;
  };
  render() {
    return (
      <div className="food__element">
        <span>{this.props.name}</span>
        {this._renderMenus()}
      </div>
    );
  }
}

export default FoodElement;
