class Developer extends Person {
  constructor(name, surname, knownLanguage) {
	super(name, surname);
    this. knownLanguage = knownLanguage;
  }

  getFullName() {
	return "Dev "+  super.getFullName();
  }
}