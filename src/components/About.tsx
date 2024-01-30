import React from "react";
import PageHeader from "./PageHeader/PageHeader";
// import User from "./User";
// import UserClass from "./UserClass";
// import User2 from "./UserClass2";

// Lets convert functional component to class based component

// Functional Component

const About = () => {
  return (
    <>
      <PageHeader title={"About"} />

      {/* <User username={"John Doe"} role={"Developer"} /> */}
      {/* <UserClass username={"Elon Musk"} role={"Businessman"} /> */}
    </>
  );
};

// Class based component

// class About extends React.Component {
//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     console.log("Parent component did mount");
//   }

//   render() {
//     console.log("Parent component Rendered");
//     return (
//       <>
//         <PageHeader title={"About"} />

//         <UserClass username={"Elon Musk"} role={"Businessman"} />

//         {/* <User2 /> */}
//       </>
//     );
//   }
// }

export default About;
