import useAvatarGradient from '@sinups/agg';

function App() {
  const AvatarGradient = useAvatarGradient('33');
  return (
    <div className="App">
      <code>{AvatarGradient}</code>
      <div
        style={{
          background: AvatarGradient,
          width: '100px',
          height: '100px',
          borderRadius: '50%',
        }}
      ></div>
    </div>
  );
}

export default App;
