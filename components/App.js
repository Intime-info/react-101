import React from 'react';
import ReactDOM from 'react-dom';

import Pet from './Pet';
import SearchParams from './SearchParams';


const App = () => {

    return (
        <div>
            <h1> Adopt Me! </h1>

            {/* HOOKS = KANCA */}
            <SearchParams />

        </div>
    )

};


ReactDOM.render(React.createElement(App), document.querySelector("#root"));

export default App;