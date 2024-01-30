import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
      data: "",
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Interval");
    }, 1000);

    // How can we make API call here -

    // const data = async() => fetch('URL');

    // const dataJson = data.json()

    // this.setState({
    //     data: dataJson,
    // })

    // console.log("Child Component Did Mount")
  }

  render() {
    const { username, role } = this.props;
    // console.log("Child Component Rendered")

    return (
      <>
        <h2>User Class Component</h2>
        <p>Welcome {username}</p>
        <p>Role : {role}</p>
        <h3>Count: {this.state.count}</h3>
        <h3>Count2: {this.state.count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase
        </button>
      </>
    );
  }
}

export default UserClass;
