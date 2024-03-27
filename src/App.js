import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SideNav from './components/SideNav';
import Timeline from './components/Timeline';

import { useRef, useEffect } from 'react';
import { useInView } from "framer-motion";


function App() {

  const ref = useRef(null);
  const isInView = useInView(ref)

  useEffect(() => {
    if(isInView){
        console.log("lmao")
    }
}, [isInView])

  return (
    <div className="flex flex-col h-screen bg-neutral-900">
      <Header/>
      <div className="flex flex-row h-screen">
        <SideNav/>
        <main className="bg-neutral-900 w-[calc(100vw-3.5rem)] overflow-y-auto">
          <Introduction id="Introduction"/>
          <About id="About"/>
          <Projects id="Projects"/>
          <Timeline id="Timeline"/>
          <Contact id="Contact"/>
        </main>
      </div>
    </div>
  );
}

export default App;
