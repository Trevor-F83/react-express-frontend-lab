
// react core functionality
import { useState, useEffect } from 'react';

// component libraries
import { Route } from 'react-router-dom';

//page components
import Index from '../pages/Index.js';
import Show from '../pages/Show.js';

const Main = (props) => {

    const [ people, setPeople ] = useState([]);

    const URL = 'http://localhost:4000/people'

    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }

    useEffect(() => {
        getPeople();
    }, []);

    return (
        <main>
            <Route exact path="/">
                <Index people={people} />
            </Route>
            {/*were taking all 3 properties (match, history, location) and spreading them. Props Spreading */}
            {/* history={rp.history} match={rp.match} location={rp.location} this is the long version of <Show {...rp} /> */}
            <Route path="/people/:id" render={(renderProps) => (
            <Show {...renderProps} />
            )} />
        </main>
    );
};
export default Main;