import React from 'react';
import { useSelector } from "react-redux";
import Contact from './Contact'

const Contacts = () => {
    const contacts = useSelector((state) => state.contacts);
    console.log(contacts);
    return (
        <div>
            <div>
                <table className="table shawdow">
                    <thead className="bg-danger text-white">
                        <tr>
                            <th scope="col">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className="custom-control-label"></label>
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
                               <Contact contact={contact}/> 
                            ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contacts
