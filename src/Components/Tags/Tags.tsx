import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function Tags() {
    return <div role="presentation" onClick={handleClick}></div>
}

export default Tags;
