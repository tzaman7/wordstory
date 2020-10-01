import React from 'react';
import ReactDOM from 'react-dom';
import MyCloud from './components/MyCloud';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";


export default function App() {
    return (
        <div>
               
            <div className="app-outer">
            <NavBar />
            <SearchBar />
				<div className="app-inner">
					<MyCloud />
				</div>
			</div>
      </div>
		);
	}


