import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectAllContact, clearAllContact, deleteAllContact} from '../../actions/contactAction';
import Contact from './Contact'

const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector((state) => state.contacts.contacts);
    const selectedContacts = useSelector((state) => state.contacts.selectedContacts)
    console.log(contacts);

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)))
        }
        else{
            dispatch(clearAllContact())
        }
    }, [selectAll])

    return (
        <div>
            {
                selectedContacts.length >0 ? (
                    <button
                     className="btn btn-danger mb-3"
                     onClick={()=>dispatch(deleteAllContact())}>Delete All</button>
                ):null
            }
            <div>
                <table className="table shawdow">
                    <thead className=" text-black">
                        <tr>
                            <th scope="col">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        id="selectAll"
                                        type="checkbox"
                                        className="custom-control-input"
                                        value={selectAll}
                                        onClick={() => setSelectAll(!selectAll)}
                                    />
                                    <label
                                        htmlFor="selectAll"
                                        className="custom-control-label">
                                    </label>
                                </div>
                            </th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact) => (
                                <Contact
                                    contact={contact}
                                    key={contact.id}
                                    selectAll={selectAll}

                                />
                            ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contacts
