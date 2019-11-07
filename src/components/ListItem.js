import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
  render() {
    const { text, handleDelete } = this.props
    return (
      <li className="ListItem">
        {text}
        {' '}
        <button onClick={handleDelete}>
          Delete
        </button>
      </li>
    );
  }
}

export default ListItem;
