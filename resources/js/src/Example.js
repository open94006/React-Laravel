import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

const BASE_URL = "React-Laravel/public"

function Example() {
    return (
        <BrowserRouter className="container">
            <Routes path>
                <Route path={BASE_URL}>
                    <Route index element={<Home />}></Route>
                    <Route path="add" element={<Add />}></Route>
                    <Route path="edit/:id" element={<Edit />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
