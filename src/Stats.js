import React from "react";
import { Card } from "antd";

class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

    this.modelRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidUpdate() {

    this.modelRef.current &&
      this.modelRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  handleClick() {
    this.props.handleClick(this.state.text);
    this.setState({ text: "" });
  }

  handleEnter() {
    this.handleClick();
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { store, models, inventory } = this.props;
    return (
      <div id="model-window">
        <h1 id="store-name">{store}</h1>
        <Card id="model-box">
          {models.map((model, index) => {
              return (
                <div key={index} className="model">
                  <h1>{model.store}</h1>
                  <h2>{model.model}</h2>
                 <h3>{model.inventory}</h3> 
                </div>
              );
          })}
        </Card>
      </div>
    );
  }
}

export default Stats;