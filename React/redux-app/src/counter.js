import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, res}) => {
    return (
        <div className="content">
        <div className="counter-wrap">
            <h1>{counter}</h1>
        </div>
        <div className="btn-block">
          <button onClick={inc} className = "btn btn-inc">
          </button>
          <button onClick={dec} className = "btn btn-dec">
          </button>
          <button onClick={res} className = "btn btn-res">
          </button>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {counter: state}
}

export default connect(mapStateToProps, actions)(Counter);