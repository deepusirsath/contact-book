import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import shortid from 'shortid';

import { addContact } from "../../actions/contactAction";

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const createContact = (e) => {
        e.preventDefault();
        const new_contact ={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email,
        }
        dispatch(addContact(new_contact));
        history.push("/")
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contacts</div>
            <div className="card-body">
                <form onSubmit={(e) => createContact(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary">Create contact</button>
                </form>
            </div>

        </div>
    )
}

export default AddContact;
