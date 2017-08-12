import React from 'react';
import Item from './Item';

const Items = ({ title, items, onCheckOff, onDelete }) => {
  return (
    <section className="Items">
      <h2>{ title }</h2>
      {items.map(item => (
        <Item
          key={item.id}
          onCheckOff={() => onCheckOff(item)}
          onDelete={() => onDelete(item)}
          {...item}
        />
      ))}
    </section>
  );
};

export default Items;
