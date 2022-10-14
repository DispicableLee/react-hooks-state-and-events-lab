import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
//============================ light / dark mode =======================================
  const [lightDark, setLightDark] = useState(false)
  function lightDarkMode(e){
    e.preventDefault()
    setLightDark(!lightDark)
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = lightDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button
        onClick={lightDarkMode}
        >{lightDark ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
