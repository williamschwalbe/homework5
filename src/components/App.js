import React from 'react'

import Intro from './Intro'
import Blogs from './Blogs'
const App = () => (
  <>
    <div className="py-4 mx-4">
      <Intro />
    </div>
    <div className="py-4 mx-4">
      <Blogs />
    </div>
  </>
)
export default App