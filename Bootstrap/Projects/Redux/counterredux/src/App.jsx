import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Displaycounter from "./components/Displaycounter";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {


  // const dispatch = useDispatch();
  // const state = useSelector((store) => store.counter);
  const {privacy} = useSelector((store) => store);
  return (
      <Header>
        <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
        <div className="col-lg-6 mx-auto">
          {privacy ? <Privacy />  : <Displaycounter />}
          <Controls />
          {/* <button onClick={() => dispatch({type: "INCREMENT"})}>AGAIN INCREMENT</button>
          <button onClick={() => dispatch({type: "MULTIPLY"})}>MULTIPLY</button> */}

          {/* <h1>Here I am again: {state}</h1> */}
        </div>
      </Header>
  );
}

export default App;
