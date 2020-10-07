import React from 'react';
import Paper from '@material-ui/core/Paper';

import './TagEntry.css'

function TagEntry(props) {
    const exampleText = () => {
        let text = "";

        for(const line of props.example) {
            text += props.tag + "  " + line + "\r\n"
        }
        return text
    }

    return (
        <div>
            <h3>{props.tag}</h3>
            <p className='tagDesc'>
                {props.description}
            </p>
            <Paper elevation={1} className='tagExample'>
                {exampleText()}
            </Paper>
        </div>
    )
}

export default TagEntry;
