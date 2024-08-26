import { Button } from './components/Button';
import Header from './components/Header';
import MyImage from './assets/img.webp';
import { useRef, useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello World!');
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Header title="This is the header" />

      <Header title="This is the but second time" />

      <Header title="This is the header but third time" />

      <Header />

      <div className="flex flex-col my-3">
        {!editMode ? (
          <>
            {' '}
            <h1 className="text-3xl font-bold">{message}</h1>
            <span className="text-blue-500 underline" onClick={() => setEditMode(true)}>
              Click to edit
            </span>
          </>
        ) : (
          <>
            <input type="text" ref={inputRef} defaultValue={message} className="outline-none border-none text-gray-500 bg-none" />
            <Button
              onClick={() => {
                if (inputRef.current) {
                  const { value } = inputRef.current;
                  console.log(value);

                  setMessage(value);
                  setEditMode(false);
                  alert('Beskeden blev ændret!');
                }
              }}
            >
              Save
            </Button>
          </>
        )}
      </div>

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
