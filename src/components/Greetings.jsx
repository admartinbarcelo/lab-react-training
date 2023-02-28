function Greetings({ lang, children }) {
    const greetings = { en: 'Hello', es: 'Hola', fr: 'Bonjour', de: 'Hallo'};
    const greeting = lang in greetings ? greetings[lang] : 'Hello';
  

  return (
    <div className="greeting">
      {greeting} {children}
    </div>
  );
}

export default Greetings;
