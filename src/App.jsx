import { Board } from "./components/Board/Board"
import { CardList } from "./components/CardList/CardList"
import { Header } from "./components/Header/Header"
import { Menu } from "./components/Menu/Menu"
import colors from './assets/styles/colors.json'

function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
      <Menu />
      <Board text='Uni project' color={colors.azure}/>
    </div>
  )
}

export default App
