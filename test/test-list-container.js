import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/list-container';

describe('ListContainer component', function() {
  it('should maintain and set state, and render new List items', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<ListContainer cards={[]} onAddInputChanged={function() {}} onAddSubmit={function() {}} />);
    const result = renderer.getRenderOutput();

    const cards = result.props.cards;
    cards.should.be.an('array');

    const addInput = result.props.onAddInputChanged;
    addInput.should.be.a('Function');

    const addSubmit = result.props.onAddInputChanged;
    addSubmit.should.be.a('Function');
  });
});
