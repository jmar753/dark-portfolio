import { useRef } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SideNav from './components/SideNav';
import Timeline from './components/Timeline';

function App() {

  const ref = useRef(null)
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div className="flex flex-col h-screen bg-neutral-900">
      <Header/>
      <div className="flex flex-row h-screen">
        <SideNav handleClick={handleClick}/>
        <main className="bg-neutral-900 w-[calc(100vw-3.5rem)] overflow-y-auto">
          <Introduction ref={ref}/>
          <About ref={ref}/>
          <Projects ref={ref}/>
          <Timeline ref={ref}/>
          <Contact ref={ref}/>
        </main>
      </div>
    </div>
  );
}

export default App;
