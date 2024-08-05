import Layout from "./components/Layout/Layout";
import useTheme from "./lib/hooks/useTheme";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Layout />
      {/* <div style={{ background: "var(--accent)", color: "var(--dark)" }}>
        <h1 style={{ color: "var(--primary)" }}>Hello, World!</h1>
        <p>This is an example component.</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div> */}
    </>
  );
}

export default App;
