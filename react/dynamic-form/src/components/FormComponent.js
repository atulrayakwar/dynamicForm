import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FormComponent() {
    const [formFields, setFormFields] = useState([]);

    useEffect(() => {
        async function fetchFormFields() {
            const response = await axios.get('/api/forms');
            setFormFields(response.data);
        }
        fetchFormFields();
    }, []);

    return (
        <div>
            <h2>Dynamic Form</h2>
            <form>
                {formFields.map(field => (
                    <div key={field._id}>
                        <label htmlFor={field.fieldName}>{field.fieldName}</label>
                        <input type={field.fieldType} id={field.fieldName} name={field.fieldName} />
                    </div>
                ))}
            </form>
        </div>
    );
}

export default FormComponent;
