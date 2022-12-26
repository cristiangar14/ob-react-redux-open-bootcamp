import './App.css';
import TodoContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer/>
        <TodoFormContainer/>
        {/* Filter Options contain Filter container */}
        <FilterOptions/>
      </header>
    </div>
  );
}

export default App;
