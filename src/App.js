import Home from "./pages/home/Home";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom'
import Loading from "./pages/loadingPage/Loading";
import User from "./pages/User/User";
import Test from './Test'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route path='user/:userid' element={<Loading />} />
        <Route path=":username/notes" element={<User/>} />
        <Route path="test" element={<Test/>} />
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
