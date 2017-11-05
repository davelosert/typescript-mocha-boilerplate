import {expect} from 'chai';
import {add} from './example-code';

describe('Example Code Spec', () => {
  it('should run mocha', () => {
	expect(true).to.be.true;
  });

  it('handles imports from other file correctly',() => {
    expect(add(2,3)).to.equal(5);
  });
});