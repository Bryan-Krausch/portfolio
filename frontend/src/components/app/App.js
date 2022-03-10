import About from '../about/About';
import First from '../first/First'
import Header from '../header/Header';
import ModalMenu from '../header/ModalMenu';
import { useState } from 'react';
import ModalContact from '../header/ModalContact';

function App() {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false)
  const [isOpenContactModal, setIsOpenContactModal] = useState(false)

  const [transition, setTransition] = useState('opacity-1')
  const [startTransition1, setStartTransition1] = useState('left-[-100vw]')
  const [startTransition2, setStartTransition2] = useState('left-[-100vw]')
  const [startTransition3, setStartTransition3] = useState('left-[-100vw]')

  setTimeout(() => {
    setStartTransition1('left-0')
  }, 0)

  setTimeout(() => {
    setStartTransition2('transition-[left] duration-500 left-0')
  }, 300)

  
  setTimeout(() => {
    setStartTransition3('transition-[left] duration-500 left-0')
  }, 600)
  

  setTimeout(() => {
    setTransition('transition-opacity duration-[1s] opacity-0')
  }, 1300)


  return (
    <div className="App w-[full] overflow-x-hidden bg-darkPurple">

      <div id='transition' className={transition}>
        <div className={`bg-purple-500 transition-all ${startTransition1} ease-in-out duration-300`} style={styleTransition}></div>
        <div className={`bg-darkPurple transition-all ${startTransition2} ease-in-out  duration-300`} style={styleTransition}></div>
        <div className={`bg-black transition-all ${startTransition3} ease-in-out duration-300`} style={styleTransition}></div>
      </div>

      <ModalMenu isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal} />
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

const styleTransition= {
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  top: '0',
  zIndex: '1000'
}

export default App;
