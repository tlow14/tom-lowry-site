import './App.css'
import ResumePage from './pages/ResumePage'
import basicData from './resumeInfo/basicData'

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>{basicData.name}</h1>
        <p>{basicData.title}</p>
      </header>
      <main className="main-content">
        <ResumePage />
      </main>
      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} {basicData.name}</p>
      </footer>
    </div>
  );
}

export default App
