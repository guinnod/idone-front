import { Board } from "./components/Board/Board"
import { CardList } from "./components/CardList/CardList"
import { Header } from "./components/Header/Header"
import { Menu } from "./components/Menu/Menu"
import colors from './assets/styles/colors.json'
import { LoginPassword } from "./components/Login/LoginPassword"
import { LoginButton } from "./components/Login/LoginButton"
import cool_guy from './assets/icons/CoolGuy.svg'
import { PersonsCard } from "./components/SelectPerson/PersonsCard"
import { Loader } from "./pages/Loader/Loader"
import {SignIn} from './pages/Auth/SignIn'
import { Home } from "./pages/Home/Home"

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
