import React from "react";

class User2 extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Second Child component did mount");
  }

  render() {
    console.log("Second child Component rendered");
    return <>User 2 component</>;
  }
}

export default User2;
