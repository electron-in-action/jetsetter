import React from 'react';

const Item = (({ packed, id, value, onCheckOff }) => {
  return (
    <article className="Item">
      <input type="checkbox" checked={packed} onChange={onCheckOff} />
      <span>{value}</span>
    </article>
  );
});

export default Item;
