import { Provider as StoreProvider } from "react-redux";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { Result } from "./components/Result";
import routes from "./router/routes";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <div className="container">
        <StoreProvider store={store}>
          <Router>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.quiz} element={<Quiz />} />
              <Route path={routes.result} element={<Result />} />
            </Routes>
          </Router>
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
