import Home from "./pages/home/Home";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom'
import Loading from "./pages/loadingPage/Loading";
import User from "./pages/User/User";
import MenuForNotes from './components/notes-menu/MenuForNotes'


function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route path='user/loading' element={<Loading />} />
        <Route path=":username/notes" element={<User/>} />
        <Route path="menu" element={<MenuForNotes/>} />
      </Route>
    )
  )

  return (
    <>
      <div className='App'>
        <RouterProvider router={route} />
      </div>
    </>
  );
}

const Root = () => {
  return (
    <>
      <div>

      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
