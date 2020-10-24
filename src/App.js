import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    defaultWelcome: '',
    number: 0,
  }

  render() {
    // 1. Korzystajac z metod cyklu zycia komponentu podmien defaultWelcome na tekst 'Witamy' przy montowaniu komponentu
    // 2. wyswietl defaultWelcome i number pobierajac go ze state w divie o klasie App
    // 3. dodaj button ktory na zdarzeniu onClick bedzie powiekszal number o 1
    // 4. Korzystajac z metod cyklu zycia komponentu wyswietl alert ktory bedzie wyswietlal komunikat ze number jest juz wiekszy od 10, jesli number przekroczy ta wartosc
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
