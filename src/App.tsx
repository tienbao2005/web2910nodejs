import React from 'react';
import './App.css'
import { Route, Router, useRoutes } from 'react-router-dom';
import Add from './competdent/Add';
import List from './competdent/List';
import Edit from './competdent/Edit';
import AdminLayout from './competdent/Layout/admin';
import AddCategory from './competdent/AddCategory';
import ListCategory from './competdent/ListCategory';
import EditCategory from './competdent/Editcategory';
import AdminLayoutClinet from './competdent/Layout/client';
import MovieDetail from './competdent/MovieDetail';

function App() {
const router = useRoutes([
{path:"/add",element:<Add/>},
{path:"/list",element:<List/>},

{path:"/movie/:id",element:<MovieDetail/>},


{path:"/edit/:id",element:<Edit/>},
{path:"dashboard",element:<AdminLayout/>,children:[
    {path:"/dashboard/list",element:<List/>},
    {path:"/dashboard/add",element:<Add/>},
    {path:"/dashboard/edit/:id",element:<Edit/>},
    {path:"/dashboard/categorys/add",element:<AddCategory/>},
    {path:"/dashboard/categorys/list",element:<ListCategory/>},
    {path:"/dashboard/categorys/edit/:id",element:<EditCategory/>},
]},
{path:"/",element:<AdminLayoutClinet/>,children:[
]},
])
return router    
}
export default App
