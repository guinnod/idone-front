import { Header } from "./components/Header/Header"
import { CardList } from "./components/CardList/CardList"
import { LoginButton } from "./components/Login/ui/LoginButton"
import { LoginPassword } from "./components/Login/ui/LoginPassword"
function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
      <LoginButton text={'SignIn'} />
      <LoginPassword placeholder='Create password' />
    </div>
  )
}

export default App
