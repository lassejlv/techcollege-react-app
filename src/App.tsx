import Button from "./components/Button";
import Header from "./components/Header";
import MyImage from "./assets/img.png";

function App() {
  return (
    <>
      <Header title="This is the header" />

      <Header title="This is the but second time" />

      <Header title="This is the header but third time" />

      <Header />

      <Button>This is a button</Button>

      <img src={MyImage} loading="lazy" alt="My Image" />
    </>
  );
}

export default App;
