import React, { Component } from 'react';

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  handleSubmit(event) {
    const { onSubmit } = this.props;
    const { value } = this.state;

    event.preventDefault();
    onSubmit({ value, packed: false, id: Date.now() });
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input type="text" value={value} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

NewItem.defaultProps = {
  onSubmit: () => {}
};

export default NewItem;
