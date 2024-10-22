//C#

public class Person {
	public string Name {get; set;}
	public string SurName {get; set;}
}

public class Programmer:Person {
	public String KnownLanguage {get; set;}
}

public void WriteFullName(Person p) {
	Console.WriteLine(p.Name + " " + p.SurName);   
}

var a = new Person();
a.Name = "John";
a.SurName = "Smith";

var b = new Programmer();
b.Name = "Mario";
b.SurName = "Rossi";
b.KnownLanguage = "C#";

WriteFullName(a);	//result: John Smith
WriteFullName(b);	//result: Mario Rossi
