import React from "react";

class WriteToUsClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.name + " WriteToUs constructor called");

    this.state = {
      text: "",
    };
  }

  componentDidMount() {
    console.log(this.props.name + " WriteToUs componentDidMount called");
  }

  render() {
    console.log(this.props.name + " WriteToUs render called");
    const { text } = this.state;
    return (
      <div>
        <p>Write to Us: </p>
        <textarea
          value={text}
          maxLength={100}
          inputMode="text"
          onChange={(e) => {
            this.setState({
              text: e.target.value,
            });
          }}
        ></textarea>
        <p>{text.length}/100</p>
      </div>
    );
  }
}

export default WriteToUsClass;
