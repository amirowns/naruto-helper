import './App.css';
import Unit from './Unit'
import Unit2 from './Unit2'
import Searchbar from './Searchbar'
import { useState } from 'react'

const App = () => {

    const [value, setValue] = useState("NormalNaruto");

    return (
        <div className="app">
            <div className="search">
                <Searchbar handleChange={setValue}
                value={value} />
            </div>
            <div className="container">
                <Unit value={value} />
            </div>
        </div>
    )
}

export default App;