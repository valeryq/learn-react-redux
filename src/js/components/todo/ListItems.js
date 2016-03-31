import React, { Component } from 'react';
import Item from './Item';

export default class extends Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map((item) => {
            return <Item key={ item.id } id={ item.id } value={ item.text } complete={ item.complete } onClick={ this.props.onClickItem } />
          })
        }
      </ul>
    )
  }
}