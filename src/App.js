import AddNeededSupplies from './components/add_needed_supplies'
import Logo from "./components/logo";
import GetAllNeededSupplies from './components/get_supplies_list'

function App() {
  return (
    <div className="App">
        <GetAllNeededSupplies />

        <Logo />
        <AddNeededSupplies />

    </div>
  );
}

export default App;
