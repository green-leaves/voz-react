import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './Home/HomePage.js'
import ForumPage from './Forum/ForumPage.js'

const Authorization = (allowedRoles) => {
    return (WrappedComponent) => {
        return class WithAuthorization extends React.Component {
            constructor(props) {
                super(props)

                // In this case the user is hardcoded, but it could be loaded from anywhere.
                // Redux, MobX, RxJS, Backbone...
                this.state = {
                    user: {
                        name: 'vcarl',
                        role: 'manager'
                    }
                }
            }

            render() {
                const { role } = this.state.user
                if (allowedRoles.includes(role)) {
                    return <WrappedComponent {...this.props} />
                } else {
                    return <Redirect to="/"/>
                }
            }
        }
    }
};

const App = () => (
    <div>
        Header: VozForums
        <main>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/forum/:forumId' component={Authorization(['manager', 'admin'])(ForumPage)} />
            </Switch>
        </main>
    </div>
);

export default App
