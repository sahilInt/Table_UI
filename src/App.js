import logo from './logo.svg';
import './App.css';
import TableHomescreen from './Container/TableHomescreen/TableHomescreen';
import PersonalPatientFileScreen from './Container/PersonalPatientFileScreen/PersonalPatientFileScreen';
import WeightChart from './Components/WeightChart/WeightChart';
import LineChart from './Components/LineChart/LineChart';

function App() {
  return (
    <div className="App">
    <PersonalPatientFileScreen/>
    {/*
    
      <TableHomescreen/>
      <WeightChart/>
      <LineChart/>
    */}
    </div>
  );
}

export default App;
