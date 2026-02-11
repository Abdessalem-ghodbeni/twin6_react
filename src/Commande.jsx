import React from "react";

export default class Commande extends React.Component {
  constructor() {
    super();
    console.log("mon composant is ready");
  }
  componentDidMount() {
    console.log("hello i'm here");
  }

  componentDidUpdate() {
    // console.log("le composant a été mis à jour");
  }
  render() {
    return (
      <>
        <h2>mon commande</h2>
      </>
    );
  }
}
