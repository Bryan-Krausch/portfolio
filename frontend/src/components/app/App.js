import About from '../about/About';
import First from '../first/First'
import Header from '../header/Header';
import ModalMenu from '../header/ModalMenu';
import { useState } from 'react';
import ModalContact from '../header/ModalContact';

function App() {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false)
  const [isOpenContactModal, setIsOpenContactModal] = useState(false)

  return (
    <div className="App w-[full] overflow-x-hidden bg-darkPurple">
      {isOpenMenuModal && <ModalMenu isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal} />}
      {isOpenContactModal && <ModalContact />}

      <div className={`w-[93%] h-full mx-auto`}>  
        <Header isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal}/>
        <main className={`xl:px-[200px] lg:px-[100px] md:px-[80px] sm:px-[60px] px-4 w-full mx-auto ${(isOpenMenuModal || isOpenContactModal ) && "blur-sm lg:blur-none"}`}>
          <First />
          <About />
        </main>
      </div>
    </div>
  );
}

export default App;
