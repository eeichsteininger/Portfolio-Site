var app = document.getElementById('email');

var typewriter = new Typewriter(app, {
  delay: 50,
});

typewriter
  .typeString('Erster Buchstabe meines Vornamens.Mein Nachname (at) gmx.net')
  .start();
