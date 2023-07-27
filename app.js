// Zakładamy, że już wczytaliśmy skrypty React.js

// Definiujemy komponenty dla różnych kategorii
const Home = () => <h1>Witaj na stronie głównej!</h1>;

const Dochody = () => (
  <div>
    <h1>O nas</h1>
    <div className="Dochody">
      <h3>Nasza historia</h3>
      <p>
        Tutaj możesz umieścić opis historii twojej firmy, jak i kiedy została założona,
        co jest jej główną misją i wizją.
      </p>

      <h3>Nasz zespół</h3>
      <p>
        Opisz swoją ekipę, ich umiejętności, doświadczenie i wkład w rozwój firmy.
      </p>

      <h3>Nasze cele</h3>
      <p>
        Przedstaw cele twojej firmy, długoterminowe plany i ambicje.
      </p>
    </div>
  </div>
);

const wydatki = () => (
  <div>
    <h1>Usługi</h1>
    <p>
      Tutaj możesz umieścić informacje na temat swoich usług i co oferujesz klientom.
    </p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Kontakt</h1>
    <p>
      Skontaktuj się z nami w celu uzyskania dodatkowych informacji.
    </p>
  </div>
);

// Funkcja do renderowania odpowiedniej zawartości na stronie
const renderContent = (category) => {
  switch (category) {
    case 'about':
      return <About />;
    case 'services':
      return <Services />;
    case 'contact':
      return <Contact />;
    default:
      return <Home />;
  }
};

// Komponent głównego kontenera
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: 'home', // Domyślna kategoria (strona główna)
    };
  }

  // Obsługa zmiany kategorii
  handleCategoryChange = (category) => {
    this.setState({ currentCategory: category });
  };

  render() {
    const { currentCategory } = this.state;

    return (
      <div>
        <div id="navbar">
          {/* Pasek nawigacyjny, jak wcześniej */}
          <ul>
            <li><a href="#home" onClick={() => this.handleCategoryChange('home')}>Strona główna</a></li>
            <li><a href="#dochody" onClick={() => this.handleCategoryChange('dochody')}>dochody</a></li>
            <li><a href="#wydatki" onClick={() => this.handleCategoryChange('wydatki')}>wydatki</a></li>
            <li><a href="#oszczedzanie" onClick={() => this.handleCategoryChange('oszczedzanie')}>oszczedzanie</a></li>
            <li><a href="#inwestycje" onClick={() => this.handleCategoryChange('inwestycje')}>inwestycje</a></li>
            <li><a href="#kalkulator" onClick={() => this.handleCategoryChange('kalkulator')}>kalkulator</a></li>
          </ul>
        </div>
        <div id="content">
          {/* Wyrenderuj zawartość na podstawie aktualnej kategorii */}
          {renderContent(currentCategory)}
        </div>
      </div>
    );
  }
}

// Wywołujemy renderowanie komponentu App
ReactDOM.render(<App />, document.getElementById('root'));