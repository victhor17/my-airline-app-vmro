import reducer, { addedFlight, deletedFlight, deletedAllFlights } from './shoppingCartSlice';

test('should got an empty array when initializes the reducer', () => {
  const ExpectedInitState = [];
  expect(reducer(undefined, {})).toEqual(ExpectedInitState);
});

test('Should add an item to the array state', () => {
  const prevState = [];
  const AfterState = {1: ''}
  expect(reducer(prevState, addedFlight(AfterState))).toEqual([AfterState])
})

test('Should delete an item from the state array', () => {
  const prevState = [{1: ''}];
  expect(reducer(prevState, deletedFlight(0))).toEqual([])
})

test('Sould delte all array items from state', () => {
  const prevState = [{a: 'a'}, {b: 'b'}, {c: 'c'}, {d: 'd'}, {e: 'e'}];
  expect(reducer(prevState, deletedAllFlights())).toEqual([])
})