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
import AllItemsShow from './Pages/AllItemsShow/AllItemsShow';
import MyItems from './Pages/MyItems/MyItems/MyItems';
import { Toaster } from 'react-hot-toast';
import ManageMyItem from './Pages/MyItems/ManageMyItem/ManageMyItem';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
       <Header></Header>
       <Toaster></Toaster>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/managemyitem/:id' element={
            <RequireAuth>
              <ManageMyItem/>
            </RequireAuth>
          }/>
          <Route path='/allitemsshow' element={<AllItemsShow/>}/>

          <Route path='/manageitem/:id' element={
          <RequireAuth>
            <ManageItem/>
          </RequireAuth>}/>

          <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems/>
          </RequireAuth>}/>
          <Route path='/additem' element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>}/>
          <Route path='/myitems' element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>}/>
          <Route path='*' element={<NotFound/>}/>
       </Routes>
    </div>
  );
}

export default App;
