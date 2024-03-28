import { useRef, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SideNav from './components/SideNav';
import Timeline from './components/Timeline';

function App() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const handleClick = () => {
    ref4.current?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div className="flex flex-col h-screen bg-neutral-900">
      <Header/>
      <div className="flex flex-row h-screen">
        {}
        <SideNav handleClick={handleClick} ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5}/>
        <main className="bg-neutral-900 w-full md:w-[calc(100vw-3.5rem)] overflow-y-auto space-y-20">
          <Introduction id="Introduction" ref={ref1}/>
          <About id="About" ref={ref2}/>
          <Projects id="Projects" ref={ref3}/>
          <Timeline id="Timeline" ref={ref4}/>
          <Contact id="Contact" ref={ref5}/>
        </main>
      </div>
    </div>
  );
}

export default App;
