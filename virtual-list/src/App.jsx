import VirtualList from "./Components/VirtualList";

function App() {
  const LIST = Array.from({ length: 100000 }, (_, index) => index + 1);

  return (
    <>
      <VirtualList list={LIST} height={922} width={600} itemHeight={78} />
    </>
  );
}

export default App;
