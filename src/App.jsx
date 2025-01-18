import '../index.css'
import Navbar from './components/Navbar'
import Route from './components/Route'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Post from './pages/Post'

function App() {

  return (
    <div>
      <Navbar />
      {/* Required using GCP Storage or S3 to route blog posts linked externally. 
          When a user visits a blog post link from an external source, the route will be /posts/:id.
          If this index.html path does not exist, the path will not be found. The cloud storage (GCP Storage or S3)
          will need to be configured to route to the index.html file automatically, triggering this route.
          Once this is picked up, the Route component will render the Post component with the correct post id.
      */}
      <Route path="/index.html">
        <Home />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/posts">
        <Post />
      </Route>
    </div>
  )
}

export default App
