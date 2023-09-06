import React from 'react'
import './App.css'
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Fisk"}
        firstName={"Michael"}
        age={41}
        hair={"Dirty Blonde"}
      />
      <PersonCard
        lastName={"Fisk"}
        firstName={"Rindy"}
        age={40}
        hair={"Light Auburn"}
      />
      <PersonCard
        lastName={"Cook"}
        firstName={"David"}
        age={65}
        hair={"none"}
      />
      <PersonCard
        lastName={"Fisk"}
        firstName={"Azriel"}
        age={13}
        hair={"Dirty Blonde"}
      />
      <PersonCard
        lastName={"Jordan"}
        firstName={"Lisa"}
        age={63}
        hair={"Black"}
      />
    </div>
  );
}

export default App
