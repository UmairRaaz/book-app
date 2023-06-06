import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

let myStyle = {
  backgroundColor: '#F4EEE0'
}
const AddBook = (props) => {
  const [bookName, setBookName] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [price, setPrice] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const [button, setbutton] = useState(true)

  useEffect(() => {
    let editThisBook = props.bookData.filter((book, index) => index === props.bookEdit)

    if (editThisBook === undefined || editThisBook.length === 0) {
      setBookName("")
      setAuthorName("")
      setPrice("")
    }
    else {
      setBookName(editThisBook[0].bookName)
      setAuthorName(editThisBook[0].authorName)
      setPrice(editThisBook[0].price)
      props.onDeleteBook(props.bookEdit)
    }

  }, [])

  let handleForm = () => {
    props.bookInfo({ bookName, authorName, price });
    setBookName("")
    setAuthorName("")
    setPrice("")
    setSubmitted(true);
    props.editBook(undefined)

  }
  const buttonHandle = () => {
    if (bookName === "" && authorName === "" && price === "") {
      setbutton(true);
    } else {
      setbutton(false);
    }

  };
  return (
    <div className='d-flex justify-content-center my-5 gap-5 p-3'>
      <div className='w-100' style={{ maxWidth: '500px' }}>
        <Form.Control size="lg" onChange={(e) => {
          setBookName(e.target.value);
          buttonHandle();
        }} value={submitted ? "" : bookName} style={myStyle} type="text" placeholder="Enter Name Of Book..." className="mb-3" />
        <Form.Control size="lg" onChange={(e) => {
          setAuthorName(e.target.value);
          buttonHandle();
        }} value={submitted ? "" : authorName} style={myStyle} type="text" placeholder="Enter Name Of Author..." className="mb-3" />
        <Form.Control size="lg" onChange={(e) => {
          setPrice(e.target.value);
          buttonHandle();
        }} value={submitted ? "" : price} style={myStyle} type="text" placeholder="Enter Price Of Book..." className="mb-3" />
        <Button disabled={button} onClick={handleForm} style={{ width: '100%' }} as="input" type="submit" value="Submit" />
      </div>
    </div>

  )
}

export default AddBook