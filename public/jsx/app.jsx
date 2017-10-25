class App extends React.Component {
  render()  {
  return (
    <div class="fluid-container">
      <h2>CLASSIFICA SERIE A ALTERNATIVA</h2>
    <div class="tasti" id= "tasti">
      <h4>Alternativa, tradizionale o somma?</h4>
      "Alternativa" <input type="radio" name="classifica" id="alt" defaultChecked />
    "Tradizionale" <input type="radio" name="classifica" id="trad" />
      Somma delle due <input type="radio" name="classifica" id="somma" />
      <h3>Selezione giornata</h3>
    Fino Giornata 9<input type="radio" name="giornata" id="giornata9" defaultChecked /><br />
    Fino Giornata 8<input type="radio" name="giornata" id="giornata8" /><br />
    Fino Giornata 7<input type="radio" name="giornata" id="giornata7" /><br />
    Fino Giornata 6<input type="radio" name="giornata" id="giornata6" /><br />
    Fino Giornata 5<input type="radio" name="giornata" id="giornata5" /><br />
    Fino Giornata 4<input type="radio" name="giornata" id="giornata4" /><br />
    <button onclick="avviaprogramma()" id="avviatore">Avvia calcoli</button>

    </div> <div id="indicatorezona" ><h3>Qui verranno mostrati i risultati</h3></div>
    <div id="Risultati">

    </div>
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'));
