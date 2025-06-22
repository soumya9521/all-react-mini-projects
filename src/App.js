
import './App.css';
import DetailsInputForm from './Components/Form/DetailsInputForm.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./Store/store.js"
import Details from './Components/DetailsPage/Details.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store} >
          <Routes>
            <Route path='/' element={<DetailsInputForm />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </Provider>
      </div>
    </Router>

  );
}

export default App;
