class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      { "class": "fluid-container" },
      React.createElement(
        "h2",
        null,
        "CLASSIFICA SERIE A ALTERNATIVA"
      ),
      React.createElement(
        "div",
        { "class": "tasti", id: "tasti" },
        React.createElement(
          "h4",
          null,
          "Alternativa, tradizionale o somma?"
        ),
        "\"Alternativa\" ",
        React.createElement("input", { type: "radio", name: "classifica", id: "alt", defaultChecked: true }),
        "\"Tradizionale\" ",
        React.createElement("input", { type: "radio", name: "classifica", id: "trad" }),
        "Somma delle due ",
        React.createElement("input", { type: "radio", name: "classifica", id: "somma" }),
        React.createElement(
          "h3",
          null,
          "Selezione giornata"
        ),
        "Fino Giornata 9",
        React.createElement("input", { type: "radio", name: "giornata", id: "giornata9", defaultChecked: true }),
        React.createElement("br", null),
        "Fino Giornata 8",
        React.createElement("input", { type: "radio", name: "giornata", id: "giornata8" }),
        React.createElement("br", null),
        "Fino Giornata 7",
        React.createElement("input", { type: "radio", name: "giornata", id: "giornata7" }),
        React.createElement("br", null),
        "Fino Giornata 6",
        React.createElement("input", { type: "radio", name: "giornata", id: "giornata6" }),
        React.createElement("br", null),
        "Fino Giornata 5",
        React.createElement("input", { type: "radio", name: "giornata", id: "giornata5" }),
        React.createElement("br", null),
        "Fino Giornata 4",
        React.createElement("input", { type: "radio", name: "giornata", id: "giornata4" }),
        React.createElement("br", null),
        React.createElement(
          "button",
          { onclick: "avviaprogramma()", id: "avviatore" },
          "Avvia calcoli"
        )
      ),
      " ",
      React.createElement(
        "div",
        { id: "indicatorezona" },
        React.createElement(
          "h3",
          null,
          "Qui verranno mostrati i risultati"
        )
      ),
      React.createElement("div", { id: "Risultati" })
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
