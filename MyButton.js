// 리액트 컴포넌트 기본구조(버튼)
function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
            { onClick: () => setIsClicked(true) },
                isClicked ? 'Clicked!' : 'Click here!'
    )
}

// 리액트 돔의 렌더 함수 이용 -> 리액트 컴포넌트를 돔 컨테이너에 렌더링하는 코드
// 스크립트 태그를 사용해서 컴포넌트 태그를 가져와도 컴포넌트가 화면에 보이는 것이 아니기 때문
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);