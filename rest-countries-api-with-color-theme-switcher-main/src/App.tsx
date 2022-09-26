import { useDesignContext } from "./context/DesignContext";

function App() {
  const { design } = useDesignContext();

  if (design) {
    return (
      <div className="min-h-screen bg-blue1 flex justify-center">
        <div className="max-w-[412px]">
          <img
            src="/design/mobile-design-home-light.jpg"
            alt="mobile-design-home-light"
            className="w-full object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
