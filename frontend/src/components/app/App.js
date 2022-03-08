import About from '../about/About';
import First from '../first/First'
import Header from '../header/Header';
import ModalMenu from '../header/ModalMenu';
import { useState } from 'react';

function App() {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(true)

  return (
    <div className="App w-[full] overflow-x-hidden bg-darkPurple">
      <ModalMenu isOpenMenuModal={isOpenMenuModal} />
      <div className={`w-[93%] h-full mx-auto`}>  
        <Header isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal}/>
        <main className={`xl:px-[200px] lg:px-[100px] md:px-[80px] sm:px-[60px] px-4 w-full mx-auto ${isOpenMenuModal && "blur-sm"}`}>
          <First />
          <About />
        </main>
      </div>
    </div>
  );
}

export default App;
