import About from '../about/About';
import First from '../first/First'
import Header from '../header/Header';

function App() {
  return (
    <div className="App w-[full] overflow-x-hidden bg-darkPurple">
      <div className='w-[93%] h-full mx-auto'>  
        <Header />
        <main className='lg:px-[150px] px-4 w-full mx-auto'>
          <First />
          <About />
        </main>
      </div>
    </div>
  );
}

export default App;
