import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavigationButtons = () => {
    const [active, setactive] = useState(false)
    const [active2, setactive2] = useState(true)

    let listButton = () => {
        setactive2(true)
        setactive(false)
    }

    let addButton = () => {
        setactive(true)
        setactive2(false)
    }
    return (
        <div className="d-flex justify-content-center my-5 gap-5">
            <Link to="/book-app">
                <Button variant={active ? "dark" : "light"} active={active} onClick={listButton} size="lg" className="me-2">List Of Books</Button>
            </Link>

            <Link to="/addBook">
                <Button variant={active2 ? "dark" : "light"} active={active2} onClick={addButton}  size="lg">Add New Book</Button>
            </Link>
        </div>
    );
};

export default NavigationButtons;
