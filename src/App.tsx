import { Button } from './components/Button';
import Header from './components/Header';
import MyImage from './assets/img.png';
import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Header title="This is the header" />

      <Header title="This is the but second time" />

      <Header title="This is the header but third time" />

      <Header />

      <Button onClick={() => setModalOpen(!modalOpen)}>{modalOpen ? 'Close' : 'Open'} Modal</Button>

      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Count + 1
      </Button>

      {count}

      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center"
          onClick={() => setModalOpen(!modalOpen)}
        >
          <h1 className="text-4xl text-white">This is a modal</h1>
          <p>This is the content of the modal, click to close it again!</p>
        </div>
      )}

      <img src={MyImage} loading="lazy" alt="My Image" />
    </>
  );
}

export default App;
