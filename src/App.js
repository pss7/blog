import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          ReactBlog
        </h4>
      </div>
      <button onClick={() => {

        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);

      }}>정렬버튼</button>

      <button onClick={() => {

        let copy = [...글제목];
        copy[0] = '여자코트추천';
        글제목변경(copy);

      }}>글수정</button>

      {

        글제목.map((a, i) => {

          return (
            <div className="list">
              <h4 onClick={() => {

                setModal(!modal); setTitle(i);

              }}>{글제목[i]}
                <span onClick={(e) => {

                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);

                }}>👍</span>
                {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.shift(i, 1);
                글제목변경(copy);
              }}>글삭제</button>
            </div>
          )

        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value)
      }} />



      <button onClick={() => {

        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);

      }}>글발행</button>

      {
        modal === true ? <Modal 글제목변경={글제목변경} title={title} 글제목={글제목} /> : null
      }

    </div>
  )
}

function Modal(props) {

  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )

}

/*
class Class extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'park',
      age: 31
    }
  }
  render() {

    return (

      <div>안녕{this.state.age}
        <button onClick={()=>{

        this.setState({ age : 32})

        }}></button>
      </div>


    )
  }
}
*/

export default App;
