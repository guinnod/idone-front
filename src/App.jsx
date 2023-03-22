import { CreateButton } from "./components/ui/CreateButton"
import { HomeButton } from "./components/ui/HomeButton"
import { Logo } from "./components/ui/Logo"
import { NotifyButton } from "./components/ui/NotifyButton"
import { SearchInput } from "./components/ui/SearchInput"
import { SideButton } from "./components/ui/SideButton"

function App() {
  return (
    <div className="App">
      <Logo />
      <CreateButton />
      <HomeButton />
      <SideButton />
      <NotifyButton />
      <SearchInput />
    </div>
  )
}

export default App
