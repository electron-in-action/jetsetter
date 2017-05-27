import React, { Component } from 'react';
import NewItem from './NewItem';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    const { items } = this.state;
    console.log(items);

    return (
      <div className="Application">
        <NewItem
          onSubmit={item => this.setState({ items: [...items, item] })}
        />
        <section className="Items">
          {items.map(item => {
            return <article className="Item" key={item.id}>{item.value}</article>;
          })}
        </section>
      </div>
    );
  }
}

export default Application;
