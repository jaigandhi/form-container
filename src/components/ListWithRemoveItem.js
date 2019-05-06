import React from 'react';

const initialList = [
  { id: 'a', name: 'jai' },
  { id: 'b', name: 'Bharat' },
  { id: 'c', name: 'Bindu' },
];

const ListWithRemoveItem = () => {
  const [list, setList] = React.useState(initialList);

  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <label>{item.name}</label>
          <button type="button" onClick={() => handleClick(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListWithRemoveItem;