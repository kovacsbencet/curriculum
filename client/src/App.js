import './App.css';
import './Profile/Profile.css'
import './Experience/Experience.css'
import Profile from './Profile/Profile';
import Experience from './Experience/Experience';

function App() {
  return (
    <div className="wrapper">
      <Profile />
      <Experience />
    </div>
  );
}

export default App;
