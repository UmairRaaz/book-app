
import { useEffect, useState } from 'react';
import './App.css';
import AddBook from './Components/AddBook';
import ListOfBooks from './Components/ListOfBooks';
import NavbarComponent from './Components/NavbarComponent';
import NavigationButtons from './Components/NavigationButtons';
import { BrowserRouter as Router, Routes, Route,  useLocation, Navigate } from 'react-router-dom';
import LoginPanel from './Components/LoginPanel';
import Register from './Components/Register';


function App() {

  const [booksInfo, setBooksInfo] = useState(() => {
    const localStored = JSON.parse(localStorage.getItem('bookData'));
    return localStored || [];
  });
  const [editIndex, setEditIndex] = useState("")
  const [isLogin, setisLogin] = useState(false)
  const bookDetails = (data) => {
    setBooksInfo((prev)=>[...prev, data])
  }
  const deleteBook = (index) => {
    const newBookList = [...booksInfo];
    newBookList.splice(index, 1);
    setBooksInfo(newBookList);
  };

  let editBook = (index) => {
    setEditIndex(index)
  }
  useEffect(() => {
    localStorage.setItem("bookData", JSON.stringify(booksInfo));
  }, [booksInfo]);


  const Navigation = () => {
    const location = useLocation();
    const shouldRenderNavigationButtons = location.pathname !== '/LoginPanel' && location.pathname !== '/Register';
    return shouldRenderNavigationButtons ? <NavigationButtons /> : null;
  };

  let isUserLogin = (data) => {
    setisLogin(data)
  }

  return (
    <div className="App" style={{backgroundColor : "#393646", minHeight: '100vh'}}>
      <NavbarComponent />
      <Router>
      {/* <NavigationButtons /> */}
      <Navigation />
        <Routes>
          <Route path="/book-app" element={<ListOfBooks bookData={booksInfo} bookInfo={bookDetails} onDeleteBook={deleteBook} editBook={editBook} />} />

          <Route path="/addBook" element={ isLogin ? (<AddBook bookInfo={bookDetails} bookEdit={editIndex} bookData={booksInfo} onDeleteBook={deleteBook} editBook={editBook} />) : ( <Navigate to="/LoginPanel"  />)}
        />

          <Route path='/LoginPanel' element={<LoginPanel checklogin={isUserLogin}  />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
        
      </Router>
    </div>
  );
}


export default App;
