import React, { Component } from "react";
import axios from "axios";
import FoodElement from "../components/";
import { FoodColumn } from "../components/";
import { Modal, Button } from "antd";
import "../components/Food.css";
const token = "gArHoycVk4OMqAfR8G2MNfCIIXBHmfsu61mEldQCKyCrh93WXy";

class Food extends Component {
  state = { visible: false, schoolTitle: "KOREA" };

  showModal = strrr => {
    console.log("strrr is " + strrr);
    this.setState({
      visible: true,
      schoolTitle: strrr
    });
    console.log("ASDFASDF" + this.state.visible);
    this.setState({
      schoolTitle: strrr
    });
    console.log(this.state.schoolTitle);
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <div className="school__buttons">
          <Button
            className="school__button"
            type="primary"
            onClick={() => this.showModal("DGIST")}
            title="DGIST"
          >
            Open DGIST
          </Button>
          <Button
            className="school__button"
            type="primary"
            onClick={() => this.showModal("KAIST")}
            title="KAIST"
          >
            Open KAIST
          </Button>
          <Button
            className="school__button"
            type="primary"
            onClick={() => this.showModal("UNIST")}
            title="UNIST"
          >
            Open UNIST
          </Button>
          <Button
            className="school__button"
            type="primary"
            onClick={() => this.showModal("GIST")}
            title="GIST"
          >
            Open GIST
          </Button>
          <Button
            className="school__button"
            type="primary"
            onClick={() => this.showModal("POSTECH")}
            title="POSTECH"
          >
            Open POSTECH
          </Button>
        </div>
        <Modal
          title={this.state.schoolTitle}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <FoodColumn title={this.state.schoolTitle} />
        </Modal>
        {/* <div className="food__content">
          <FoodColumn title="DGIST" />
          <FoodColumn title="KAIST" />
          <FoodColumn title="UNIST" />
          <FoodColumn title="GIST" />
          <FoodColumn title="POSTECH" />
        </div> */}
      </div>
    );
  }
}

export default Food;
