import { HeaderExtended } from '@components/Header'
import { Menu } from '@components/Menu'
import { Profile } from '@layouts/Profile'
import { TaskEdit } from '@layouts/TaskEdit'
import { TaskView } from '@layouts/TaskView'
import { Loader } from '@pages/Loader'


function App() {
  return (
    <div className="App">
      <HeaderExtended />
      <Loader />
    </div>
  )
}

export default App
