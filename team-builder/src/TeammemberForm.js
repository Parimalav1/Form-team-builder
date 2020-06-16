import React, { useState } from 'react'

export default function TeammemberForm(props) {
    // declaring exact props
    const { values, change, submit, clear } = props
    // const [edit, setEdit] = useState();

    return (
        // adding onSubmit event handler
        <form className='first-form' onSubmit={submit} >
        <div className='form-div'>
            <h2>Add a new teammember</h2>
        </div>
        <div className='form-inputs'>
            <h4>Information</h4>
            {/* adding form inputs */}
            <label>Name:&nbsp;
            <input
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={change}
                />
            </label>
            <label>Email:&nbsp;
            <input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={change}
                />
            </label>
            <label>Role:&nbsp;
                {/* adding dropdown for role */}
                <select
                    name='role'
                    value={values.role}
                    onChange={change}
                >
                    <option value> ** Select a role ** </option>
                    <option value='project-manager'>Project Manager</option>
                    <option value='fullstack-webdeveloper'>Fullstack Developer</option>
                    <option value='frontend-engineer'>Fontend Engineer</option>
                    <option value='backend-engineer'>Backend Engineer</option>
                </select>
            </label>
        </div>
        <button style={{margin: '10px 10px', padding: '5px 10px', width: '100px'}} type="submit">Submit</button>
        <button style={{margin: '10px 10px', padding: '5px 10px', width: '100px'}} onClick={clear}>Clear</button>
        </form>
    )
}
