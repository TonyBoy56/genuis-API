import { Genius } from './../src/scripts.js';

describe ('Genius', () => {
  let genius = new Genius();

  test ('this should that we recieve a response from the API call', () => {
    expect(genius.getAPI()).toEqual(0);
  });
});