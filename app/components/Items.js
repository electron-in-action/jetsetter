import React from 'react';
import Item from './Item';

const Items = ({ title, items, onCheckOff }) => {
  return (
    <section className="Items">
      <h2>{ title }</h2>
      {items.map(item => (
        <Item
          key={item.id}
          onCheckOff={() => onCheckOff(item)}
          {...item}
        />
      ))}
    </section>
  );
};

export default Items;
