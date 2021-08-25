import React from 'react'
import Routes from './config/router'
import {useEffect} from 'react'
import PendingBookings from './components/UserBookings/pendingBookings'


function App() {
  useEffect(() => {
    document.title = "Cheap Fly"
  }, [])
  return (
   <>
<Routes/>
   </>
  );
}

export default App;
