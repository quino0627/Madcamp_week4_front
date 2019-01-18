import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Chat, Exchange, Food, Notice, Review, Login } from 'pages';
import Menu from 'components/Menu'

class App extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <Route exact path='/' component={Home} />  {/* exact는 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트 보여준다 */}
                <Route path='/chat' component={Chat} />
                <Route path='/exchange' component={Exchange} />  {/* params는 사용하기 전 꼭 라우트에서 지정 */}
                <Route path='/food' component={Food} />
                <Route path='/notice' component={Notice} />
                <Route path='/review' component={Review} />
                <Route path='/login' component={Login} />
            </div>
        );
    }
}

export default App;