
import UserDataForm from './forms/userData';
import FileInput from './forms/FileInput'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>User Data Form</h1>
     <UserDataForm/>
      <h1> File input form</h1>
     <FileInput/>
    </div>
  );
}

export default App;
