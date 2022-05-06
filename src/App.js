import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddItem from './Pages/AddItem/AddItem';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ManageItem from './Pages/ManageItem/ManageItem';
import ManageItems from './Pages/ManageItem/ManageItems';
import AllItemShow from './Pages/AllItemsShow/AllItemShow';
import AllItemsShow from './Pages/AllItemsShow/AllItemsShow';


function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blogs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/additem' element={<AddItem/>}/>
          <Route path='/allitemsshow' element={<AllItemsShow></AllItemsShow>}></Route>
          <Route path='/manageitem/:id' element={<ManageItem/>}/>
          <Route path='/manageitems' element={<ManageItems/>}/>
          <Route path='/additem' element={<AddItem/>}/>
          <Route path='*' element={<NotFound/>}/>
       </Routes>
    </div>
  );
}

export default App;
