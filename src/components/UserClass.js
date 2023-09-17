import React from "react";
import WriteToUsClass from "./WriteToUsClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.name + " constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount called");
  }

  render() {
    console.log(this.props.name + " render called");
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <p>Location: {location}</p>
        <p>Contact: On Email</p>
        <WriteToUsClass name={name} />
      </div>
    );
  }
}

export default UserClass;
