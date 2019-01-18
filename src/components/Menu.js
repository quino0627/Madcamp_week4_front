import React from 'react';
import { Link } from 'react-router-dom';

// 앱에서 다른 라우트로 이동, Link 컴포넌트 쓰면 새로고침 안됨, a href 쓰면 새로고침 된다
// NavLink: 설정한 url 활성화되면 특정 스타일 혹은 클래스 지정, 중첩가능한 것은 exact, 활성화될 때 특정 클래스 설정은 activeClassName

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>이름(ST)</Link></li>
                <li><Link to='/notice'>공지</Link></li>
                <li><Link to='/review'>후기</Link></li>
                <li><Link to='/exchange'>교류</Link></li>
                <li><Link to='/chat'>채팅</Link></li>
                <li><Link to='/food'>식당</Link></li>
                <li><Link to='/login'>로그인</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;
