
import React, { useState } from 'react'

function Form(props) {

    const [input, setInput] = useState();
    const [date, setDate] = useState();


    const handleclick = (event) => {
        event.preventDefault();
        if (input == "") {
            alert("Please enter some text");
            event.preventDefault();
        }
        else if (date == "") {
            alert("Please enter the date");
            event.preventDefault();
        }
        else {
            props.addTodo(input, date)
            setInput("");
            setDate("");
        }
    }


    return (
        <div>
            <form >
                <input id="input" type="text" name="inputText" placeholder="Write todo here" value={input} onChange={(event) => setInput(event.target.value)} />
                <input id="inputdate" type="date" name="inputDate" value={date} onChange={(event) => setDate(event.target.value)} />
                <button id="addtodo" variant="primary" type="submit" onClick={handleclick}>Add</button>
            </form>
        </div>
    )
}

export default Form;
