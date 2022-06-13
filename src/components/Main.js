
// component libraries
import { Route } from 'react-router-dom';

//page components
import Index from '../pages/Index.js';
import Show from '../pages/Show.js';

const Main = (props) => {
    return (
        <main>
            <Route exact path="/">
                <Index />
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