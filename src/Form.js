import React from 'react'



class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: "Say hello",
        value:""

      };

  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});

    }

    handleSubmit(event) {
      
      alert("you said: "+ this.state.value + " The reverse is: "+  reverseString(this.state.value));
      event.preventDefault();
    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
          <h1>
          <Display display={this.state.display} />
          {this.state.value}
          </h1>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            {/* <select name="operator" id="operator" onChange={this.handleOpChange} operator={this.op.operator}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="x">x</option>
              <option value="/">/</option>
            </select>
           
            <input type="number" other_value={this.other.other_value} onChange={this.handleChange} /> */}
          </label>
          <input type="submit" value="Submit" />
          
        </form>
      );
    }
    
  }
  const Display = props => <div><span id="eq">{props.equation}</span><span id="dis">{props.display}</span></div>;
export default Form

function reverseString(str) {
  return str.split("").reverse().join("");}