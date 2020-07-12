import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory,
    useLocation
  } from 'react-router-dom';
import Topic from './Topic';

export default function Topics() {
    const history = useHistory();
    let match = useRouteMatch();

    console.log(match);

    return (
        <div className="App">
            <header className="App-header">
                Topics
            </header>

            <div className="App">
                <header className="App-header">
                    <ul> 
                        <div style={{ cursor: 'pointer' }} onClick={() => history.push('/about')}>NAVIGATE</div>
                        <li><Link to={`${match.url}/asdasdasd`}>asdasdasd</Link></li>
                    </ul>
                </header>

                <Switch>
                    <Route path={`${match.url}/:topicId`}>
                        <Topic/>
                    </Route>
                    <Route path={match.url}>
                        <h1>Tolong pilih topiknya cuyyy</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}