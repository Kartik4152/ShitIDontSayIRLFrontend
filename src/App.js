import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CreatePost from './components/CreatePost/CreatePost';
import Posts from './components/Posts/Posts';
import Loader from './components/Loader/Loader'
function App() {
  const [rerender,setRerender]=useState(Math.random());
  return (
    <>
    <Loader></Loader>
    <Navbar></Navbar>
    <CreatePost setRerender={setRerender}></CreatePost>
    <Posts rerender={rerender}></Posts>
    </>
  );
}

export default App;
