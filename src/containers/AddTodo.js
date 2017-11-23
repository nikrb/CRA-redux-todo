import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let AddTodo = ({ dispatch}) => {
  let input;
  return (
    <form onSubmit={e=>{
        e.preventDefault();
        if (!input.value.trim()){
          return;
        }
        dispatch( addTodo( input.value));
        input.value = "";
      }}
    >
      <input ref={node=>{ input = node;}} />
      <button type="submit" >
        AddTodo
      </button>
    </form>
  );
};

// connect missing params (first and second)
// first param: no subscribe to store changes
// second param: dispatch added to component props
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
AddTodo = connect()(AddTodo);

export default AddTodo;
