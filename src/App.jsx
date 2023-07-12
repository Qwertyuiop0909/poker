import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="leftborder" />
      <div className="rightborder" />
      <div className="downborder" />
      <Main />
    </div>
  )
}

export default App
