import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SideNav from './components/SideNav';
import Timeline from './components/Timeline';


function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <div className="flex flex-row h-screen">
        <SideNav/>
        <main className="bg-neutral-900 w-[calc(100vw-3.5rem)] overflow-y-auto">
          <Introduction/>
          <About/>
          <Projects/>
          <Timeline/>
          <Contact/>
        </main>
      </div>
    </div>
  );
}

export default App;
