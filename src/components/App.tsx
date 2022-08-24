import { useEffect, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setTimer((p) => p + 1);
    }, 1000);
  }, [timer]);

  return <h1 style={{ fontSize: "120px", color: "red" }}>Hello {timer}</h1>;
};

export default App;
