import {createStore} from 'redux';

// Reducer

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RES':
      return 0;
    default:
      return state;
  }
}

// Store

let store = createStore(counter);

// Function

const inc = () => ({type:'INC'});
const dec = () => ({type:'DEC'});
const res = () => ({type:'RES'});

// Check onclick

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('res').addEventListener('click', () => {
  store.dispatch(res());
});

// Update counter

const update = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);