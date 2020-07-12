import React from "react";
 
 
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      textarea: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
    
  }

  handleSubmit(event) {
    alert('A name was submitted : ' + this.state.name + ', email : ' + this.state.email+ ', message : ' + this.state.textarea);
    event.preventDefault();
  }
// form contact us

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name :
          <input type="text" value={this.state.name} onChange={this.handleChange('name')} />
        </label>
        <label>
          Email :
          <input type="email" value={this.state.email} onChange={this.handleChange('email')} />
        </label>
        <label className="textarea">
          Message :
          <textarea value={this.state.textarea} onChange={this.handleChange('textarea')}></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default Contact;