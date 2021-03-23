import React from "react";
import Stats from "./Stats";
// import UserModal from "./UserModal";

export default class Websockets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: "",
      models: [],
      inventory: [],
    };

    this.onError = this.onError.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getName = this.getName.bind(this);
  }

  componentDidMount() {
    this.createWebSocket();
  }

  componentDidUpdate() {
    if (!this.ws) {
      return;
    }

    if (this.ws.readyState === this.ws.CLOSED) {
      this.createWebSocket();
    }
  }

  componentWillUnmount() {
    if (!this.ws) {
      return;
    }
    this.ws.close();
    clearInterval(this.timer);
  }

  onOpen(e) {
    try {
      this.ws.send("ping");
    } catch (err) {
      console.log("Got invalid message from websocket on open", err, e.data);
    }
  }

  onMessage(e) {
    try {
      if (e.data !== "pong") {
        const data = JSON.parse(e.data);
        this.setState({ models: [...this.state.models, data] });
      } else {
        console.log(e.data);
      }
    } catch (err) {
      console.log("Got invalid message from websocket on message", err, e.data);
    }
  }

  onClose(e) {
    if (!e.wasClean) {
      console.log({ error: `WebSocket error: ${e.code} ${e.reason}` });
      this.createWebSocket();
    }
  }

  onError(e) {
    console.log("received websocket error", e);
  }

  createWebSocket() {
    // use ws for http(localhost) and wss for https
    this.ws = new WebSocket("ws://localhost:8080/");
    this.ws.onmessage = function(event) {
          console.log(event.data);
        };
    this.ws.onmessage = e => this.onMessage(e);
    this.ws.onerror = e => this.onError(e);
    this.ws.onclose = e => this.onClose(e);
    this.ws.onopen = e => this.onOpen(e);
  }

  handleClick(text) {
    this.ws.send(
      JSON.stringify({
        store: this.state.store,
        model: text,
        inventory: this.state.inventory,
      }),
    );
  }

  getName(name) {
    this.setState({ store: name });
  }

  render() {
    const { store, models, inventory } = this.state;
    return (
      <>
        <Stats models={models} />
      </>
    );
  }
}