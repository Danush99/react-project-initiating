import { RouterProvider } from 'react-router-dom'
import './App.css'
import Routes from 'src/navigation/routes';
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={Routes} />
      </Provider>
    </>
  )
}

export default App
