import useTheme from "./lib/hooks/useTheme";
import Home from "./screens/Home";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div>
      <Home />
      <h1 style={{ color: "var(--primary)" }}>Hello, World!</h1>
      <p>This is an example component.</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
