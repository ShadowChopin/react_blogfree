/* eslint-disable*/   // 터미널창 warning 제거 코드

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {

  let post = '강남 우동 맛집';

  let [a,변경이요] = useState(['남자 코트 추천','망포동 우동맛집','리액트독학']);
  let [따봉,따봉변경] = useState(0);
  let [따봉3, 따봉변경3] = useState(0);

  function 함수() {
    console.log(1);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:'16px'}}>ReactBlog</h4>
      </div>

      <div class="back color-24">
        <div class="row columns">
            <ul class="menu align-center expanded text-center SMN_effect-24">
              <li><a href=""><span>Home</span></a></li>
              <li><a href=""><span>About</span></a></li>
              <li><a href=""><span>Gallery</span></a></li>
              <li><a href=""><span>Notes</span></a></li>
              <li><a href=""><span>Contact</span></a></li>
            </ul>
          </div>
      </div>

      <div className="list">
        <h4>{a[0]} <span onClick={함수}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]} <span onClick={() => {console.log(1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]} <span onClick={() => {따봉변경3(따봉3+1)}}>👍</span> {따봉3} </h4>
        <p>2월 17일 발행</p>
      </div>

      <button onClick={()=>{
        let sortman = [...a].sort();
        변경이요(sortman);
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...a];
        copy[0] = '여자 코트 추천';
        변경이요(copy);
      }}>글 수정</button>

      <Modal></Modal>
      <Modal/>

    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  );
} //Function-return 안에는 항상 하나의 태그로 시작해서 하나의 태그로 끝나야함
  //<div></div> 이후에 <div></div>를 병렬로 붙이면 안됨
  //굳이 병렬로 쓰고싶다면 앞뒤에 <> </> 삽입해서 쓰면됨




export default App;

{/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div> */}
