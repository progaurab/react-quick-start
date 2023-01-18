import './App.css';
import ExportExcel from './Excelexport';
import ExcelExportData from './data'

function App() {
  return (
    <div className='App'>
      <h1 style={{marginTop: "20%"}}> Export Excel</h1>

      <ExportExcel excelData={ExcelExportData} fileName={"Excel Export"}/>
    </div>
  );
}

export default App;
