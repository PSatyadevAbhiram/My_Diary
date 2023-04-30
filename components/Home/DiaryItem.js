import { Fragment } from "react";
import ReactDatePicker from "react-datepicker";

function DiaryItem() {
    return (
        <Fragment>
            <button>Prev</button>
            <div>
                {props.title}
            </div>
            <ReactDatePicker onChange={dateChangeHandler}></ReactDatePicker>
            <button>Next</button>
            <button>Edit</button>
            <input type="text" value={props.description}></input>
            <div>{props.rating}</div>
            <button>Save</button>
        </Fragment>
    );
}

export default DiaryItem;