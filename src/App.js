import Home from "./pages/home/Home";
import Notes from "./pages/notes/Notes"
import ToDo from "./pages/to-do/ToDo"
import Remainder from "./pages/remainder/Remainder"
import Labaled from "./pages/Labaled/Labaled"
import Favourates from "./pages/favourates/Favourates"
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom'
import Loading from "./pages/loadingPage/Loading";


function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route path='user/loading' element={<Loading />} />
        <Route path=":username/notes" element={<Notes/>} />
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
