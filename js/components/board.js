import React from 'react';
import List from './list';
import ListContainer from './list-container';

export default function Board(props) {
  return (
    <div className="board">
    <div className="title">{props.title}</div>
    {props.lists.map((list, index) => (
      <ListContainer key={index} title={list} />
))}

    </div>
  );
}
