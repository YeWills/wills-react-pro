import React, { useState, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { injectIntl } from 'react-intl-context';
import { injectIntl } from 'src-intl-context';
import { Button } from 'antd';
import './index.scss';

const propTypes = {
  intl: PropTypes.object.isRequired,
};

function useAA() {
  const [time, sett] = useState(0);
  return {
    time, sett
  };
}


const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return action.cc;
    case 'decrement':
      return action.cc;
    default:
      throw new Error();
  }
}

function Child1({ ac }) {
  console.log(11);
  return <div>child.....{ac}</div>;
}


function NotFound(props) {
  const { intl } = props;
  const [aa, setaa] = useState(1);
  const [bb, setbb] = useState(1);
  const { time, sett } = useAA();

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(12);

  return (
    <div className="view-notFound">
      <div className="view-notFound-errorCode">
          404999990   :{time}
      </div>
      <div onClick={() => { setaa(99998); }}>----{aa}</div>
      <div onClick={() => { setbb((abc) => { return abc + 1; }); }}>%%%%%%  {bb}</div>
      <div onClick={() => { dispatch({ type: 'increment', cc: 99 }); }}>99999999999----  {state.count}</div>
      <div onClick={() => { dispatch({ type: 'increment', cc: 99 }); }}> 9999999999----  {state.count}</div>
      <div onClick={() => { dispatch({ type: 'increment', cc: 1111 }); }}> 9999999999-111---  {state.count}</div>

      <div className="view-notFound-errorDesc">
        {intl.formatMessage({ id: 'notFound_404' })}
      </div>
      <Link to="/" href="/">
        <Button type="primary">
          {intl.formatMessage({ id: 'exception_backToHome' })}
        </Button>
        {/* <Child1 ac={state} cc={[]}/> */}
        <Child1 ac={state} />
      </Link>
    </div>
  );
}

NotFound.propTypes = propTypes;
export default injectIntl(NotFound);
