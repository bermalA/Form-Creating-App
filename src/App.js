import {HTML5Backend} from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Page from "./Pages/Form/Page";
import Login from "./Pages/Login/Login";


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Login />
      </div>
    </DndProvider>
  );
}

export default App;
