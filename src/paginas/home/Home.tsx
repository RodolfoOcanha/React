import React, { useState } from 'react';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
        <h1>Clica no botão abaixo para resolver a conta 2x10+55</h1>
      {loggedIn ? (
        <h1>Resultado: 75 </h1>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Clique aqui</button>
      )}
    </div>
  );
}
export default Home;