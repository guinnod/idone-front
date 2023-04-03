import { HeaderExtended } from '@components/Header'
import { Menu } from '@components/Menu/Menu'
import { PersonsCard } from '@layouts/PersonsCard'
import { SelectPerson } from '@components/SelectPerson/SelectPerson'
import { Profile } from '@layouts/Profile'
import { TaskEdit } from '@layouts/TaskEdit'
import { TaskView } from '@layouts/TaskView'
import { SignIn } from '@pages/Auth'
import { Home } from '@pages/Home'
import { Loader } from '@pages/Loader'
import { Tasks } from '@pages/Tasks'
import { Workspace } from '@pages/Workspace'


function App() {
  return (
    <div className="App">
      <Tasks />
    </div>
  )
}

export default App
