import logo from './logo.svg';
import './App.css';
import TableHomescreen from './Container/TableHomescreen/TableHomescreen';
import PersonalPatientFileScreen from './Container/PersonalPatientFileScreen/PersonalPatientFileScreen';
import WeightChart from './Components/WeightChart/WeightChart';

function App() {
  return (
    <div className="App">
    <PersonalPatientFileScreen/>
    {/*
    
      <TableHomescreen/>
      <WeightChart/>
    */}
    </div>
  );
}

export default App;
