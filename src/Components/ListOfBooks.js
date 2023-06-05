import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const ListOfBooks = (props) => {
  const navigate = useNavigate();
  const handleClick = (index) => {
    props.editBook(index);
    navigate('/addBook');
  };
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const fullDate = `${month}/${day}/${year}`
  return (
    <>
      <div className='p-5'>
        {props.bookData.length > 0 ? (
          <div className="d-flex gap-5 p-10 flex-wrap">
            {props.bookData.map((book, index) => (
              <div key={index} style={{ background: '#95afc0', width: '300px', padding: '30px', borderRadius: '10px', color: 'white' }}>
                <h5>{book.bookName}</h5>
                <p>Author: {book.authorName}</p>
                <p>Price: {book.price}</p>
                <p>Date: {fullDate}</p>
                <Button onClick={() => handleClick(index)} variant="outline-light">Edit</Button>{' '}
                <Button onClick={() => props.onDeleteBook(index)} variant="outline-light">Delete</Button>{' '}
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <p className="font">No Book Available, Please Add Some Book</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ListOfBooks