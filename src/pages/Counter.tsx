import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement } from '../store/reducers/counterReducer';
// import { incrementAsync } from '../store/actions/counterActions';


function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="text-center">
            <div className="text-4xl font-bold">{count}</div>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                className="px-4 py-2 bg-red-500 text-white rounded mt-2"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}

export default Counter;