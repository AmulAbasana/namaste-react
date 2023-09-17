import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor called");
  }

  componentDidMount() {
    console.log("About componentDidMount called");
  }

  render() {
    console.log("About render called : ");
    return (
      <div>
        {/* <User name="Amul" location="Ahmedabad" /> */}
        <UserClass name="First" location="Ahmedabad Class" />
        <UserClass name="Second" location="Ahmedabad Class" />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <User name="Amul" location="Ahmedabad" />
//       <UserClass name="Amul Class" location="Ahmedabad Class" />
//     </div>
//   );
// };

export default About;

/*
  - Parent constructor
  - Parent render
  - First constructor
  - First render
  - First WriteToUs constructor
  - First WriteToUs render
  - Second constructor
  - Second render
  - Second WriteToUs constructor
  - Second WriteToUs render
  - First WriteToUs componentDidMount
  - First componentDidMount
  - Second WriteToUs componentDidMount
  - Second componentDidMount
  - Parent componentDidMount
  */
