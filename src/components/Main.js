
// react core functionality
import { useState, useEffect } from 'react';

// component libraries
import { Route } from 'react-router-dom';

//page components
import Index from '../pages/Index.js';
import Show from '../pages/Show.js';

const Main = (props) => {

    const [ people, setPeople ] = useState(null);

    const URL = 'http://localhost:4000/people/'

    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    };

    const createPeople = async (person) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(person)
        });
        getPeople();
    };

    useEffect(() => {
        getPeople();
    }, []);

    const updatePeople = async (updatedPerson, id) => {
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(updatedPerson)
        });
        getPeople();
    }

    const deletePeople = async (id) => {
        await fetch(URL + id, {method: 'DELETE'});
        getPeople(); 
    }

    useEffect(() => {
        getPeople();
    }, []);

    return (
        <main>
            <Route exact path="/">
                <Index people={people} createPeople={createPeople} />
            </Route>
            {/*were taking all 3 properties (match, history, location) and spreading them. Props Spreading */}
            {/* history={rp.history} match={rp.match} location={rp.location} this is the long version of <Show {...rp} /> */}
            <Route path="/people/:id" render={(renderProps) => (
            <Show 
            {...renderProps} 
            people={people} 
            updatePeople={updatePeople}
            deletePeople={deletePeople}
                />
            )} />
        </main>
    );
};
export default Main;