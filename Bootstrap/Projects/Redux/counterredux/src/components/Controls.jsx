import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../Store/counter";
import { privacyActions } from "../Store/privacy";

const Controls = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={() => dispatch(counterActions.increment())}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={() => dispatch(counterActions.decrement())}
        >
          -1
        </button>
        {/* <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={() => counterActions}
        >
          0
        </button> */}
        <button
          type="button"
          className="btn btn-warning btn-lg px-4 gap-3"
          onClick={() => dispatch(privacyActions.toggle())}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" placeholder="enter number" ref={inputRef} />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={() => {
            dispatch(counterActions.add({ num: inputRef.current.value }));
            inputRef.current.value = "";
          }}
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={() => {
            dispatch(counterActions.sub({ num: inputRef.current.value }));
            inputRef.current.value = "";
          }}
        >
          SUBTRACT
        </button>
      </div>
    </>
  );
};

export default Controls;
