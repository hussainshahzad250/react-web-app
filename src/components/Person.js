import React, { Fragment } from "react";
import { AST_PropAccess } from "terser";

export const Person = props => {
  return (
    <div>
      <form>
        <label htmlFor="new-todo">What needs to be done?</label>
        <input id="new-todo" value={props.data.name} />
        <button onClick={props.buttonHandler} type="button">
          Add #{props.data.id}
        </button>
      </form>
    </div>
  );
};
