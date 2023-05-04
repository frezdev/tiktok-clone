import { Route, Switch } from 'wouter'
import FeedVideos from './components/FeedVideos'
import Upload from './pages/Upload'
import SingUp from './pages/SingUp'
import './App.css'

function App () {
  return (
    <div className='App'>
      <main>
        <Switch>
          <Route path='/'>
            <FeedVideos />
          </Route>
          <Route path='/upload'>
            <Upload />
          </Route>
          <Route path='/sing-up'>
            <SingUp />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
