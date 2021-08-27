# CreationalPatterns

Creational patterns concern the process of object creation.

Creational class patterns defer some part of object creation to subclasses, while Creational object patterns defer it to another object.

`Program to an interface, not animplementation.`

Don't declare variables to be instances of particular concrete classes. Instead, commit only to an interface defined by an abstract class. You will find this to be a common theme of the design patterns in this book. You have to instantiate concrete classes (that is, specify a particular implementation) somewhere in your system, of course, and the creational patterns (AbstractFactory(87),
Builder (97), FactoryMethod (107),Prototype (117), and Singleton (127)) let you dojust that. By abstracting the process of object creation, these patterns give you different ways to associate an interface with its implementation transparently at instantiation. Creational patterns ensure that your systemis written in terms ofinterfaces, not implementations.