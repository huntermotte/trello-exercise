import React from 'react';
import Card from './card';

export default function List(props) {
  return (
    <div className="card-list">
      <div className="title">{props.title}</div>
        <Card cards="Here is some card text" />
        <Card cards="This is some card text" />
        <Card cards="More card text" />
        {props.cards.map((card, index) => (
          <Card key={index} cards={card} /> ))}
          <form onSubmit={(event) => {
            event.preventDefault();
            props.onAddSubmit()
          }}>
          <input type="text" name="cardInput" onChange={(event) => {
            const userInput = event.currentTarget.value
            props.onAddInputChanged(userInput)}} />
          <input type="submit" />
    </form>
    </div>
  );
}
