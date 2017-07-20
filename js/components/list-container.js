import React, { Component } from 'react';
import List from './list';

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      cards: []
    }
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  onAddInputChanged(text) {
    this.setState({ text })
  }

  onAddSubmit() {
    this.setState({ cards: [...this.state.cards, this.state.text] })
  }

    render() {
      return (
        <List cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />
      )
    }

}
