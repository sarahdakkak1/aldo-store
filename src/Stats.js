import React from "react";
import { Card } from "antd";
import './Stats.css';

class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

    this.modelRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {

    this.modelRef.current &&
      this.modelRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }


  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { store, models, inventory } = this.props;
    return (
      <div className="row">
                <tr>
                    <th scope="col">Store </th> 
                    <th scope="col">Model </th>
                    <th scope="col">Inventory  </th>
                </tr>
        <h1 id="store-name">{store}</h1>
        <Card id="model-box">
          {models.map((model, index) => {
              return (
                <table class = 'table table-striped'>
                  <tr>
                      <td>{model.store}</td>
                      <td>{model.model}</td>
                      <td>{model.inventory}</td> 
                  </tr>
                </table>
              );
          })}
        </Card>
      </div>
      
    );
  }
}

export default Stats;