import React, { Component } from 'react';
import NewItem from './NewItem';
import Item from './Item';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.markAsPacked = this.markAsPacked.bind(this);
  }

  markAsPacked(item) {
    const otherItems = this.state.items.filter(other => other.id !== item.id);
    const updatedItem = { ...item, packed: !item.packed };
    console.log(item, updatedItem, otherItems);
    this.setState({ items: [updatedItem, ...otherItems] });
  }

  render() {
    const { items } = this.state;
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);

    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <section className="Items">
          <h2>Unpacked Items</h2>
          {unpackedItems.map(item => (
            <Item
              key={item.id}
              onCheckOff={() => this.markAsPacked(item)}
              {...item}
            />
          ))}
        </section>
        <section className="Items">
          <h2>Packed Items</h2>
          {packedItems.map(item => (
            <Item
              key={item.id}
              onCheckOff={() => this.markAsPacked(item)}
              {...item}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Application;
