import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <>
      <h1 className="title">Hello world</h1>

      <button onClick={() => setClicked(!clicked)}>Click me!</button>

      {clicked && <>{Date.now()}</>}
    </>
  );
}

export default App;
