import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cookies, { getJSON } from 'js-cookie';
import '../css/Notes.css'

function Notes() {

    const email = Cookies.get("email");
    const pass = Cookies.get("pass");
    const stock = Cookies.get("currentStock");
    const [docs, setDocs] = useState();
    const [currentNotes, setCurrentNotes] = useState([]);

    function addNoteFunction() {
        axios.post(`/api/users/notes/add/${email}/${pass}/${stock}/${note}`).then((res) => {
            console.log(res.data)
            setFeedback(
                <div className="text-success">{res.data}</div>
            );
        }).then(getNotes).catch((err) => {
            console.log(err);
            setFeedback(
                <div className="text-danger">Oops Something Went Wrong</div>
            )
        })
    }
    useEffect(() => {
        getNotes();
    }, [])

    function getNotes() {
        axios.post(`/api/users/notes/get/${email}/${pass}/${stock}`).then((res) => {
            res.data.stock.forEach(element => {
                if (element.Ticker === stock) {
                    setCurrentNotes(element.Notes)
                }
            });

            setDocs(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }

    function removeFunction(element) {

        var removeNote = element;
        console.log(`before api call ${removeNote}`)
        axios.post(`/api/users/notes/remove/${email}/${pass}/${stock}/${removeNote}`).then((res) => {
            console.log(`notes removeFunction api call res: ${res.data}`);
        }).then(getNotes).catch((err) => {
            console.log(`notes removeFunction api call err: ${err}`);
        })
    }
    const [feedback, setFeedback] = useState();

    const [note, setNote] = useState('');
    return (
        <div className="row">
            <div className="card col-6">
                <h3 class="card-title">{stock}</h3>
                <div className="form" onSubmit={addNoteFunction}>
                    <div className="form-group">

                        <input
                            type="text"
                            name="Note"
                            value={note.value}
                            placeholder={"Enter Note Here"}
                            className="form-control input-group-text"
                            onChange={(evt) => { setNote(evt.target.value) }} />

                        {
                            feedback
                        }
                        <button className="btn btn-light addNoteButton col-sm-4" type="submit" onClick={addNoteFunction}>
                            Add Note
                        </button>
                    </div>
                    <ul className="col-7-md list-group list-group-flush">
                        {currentNotes.map((element) => {
                            return (
                                <div className="row  justify-content-center">
                                    <li className="list-group-item col-sm-8">{element}</li>
                                    <button className="btn  removeNoteButton col-sm-2" onClick={() => { removeFunction(element) }}>Remove</button>

                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>


        </div >

    );



} export default Notes; 