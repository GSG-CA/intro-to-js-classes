# Classes

Classes are a template for creating objects. They encapsulate data with code to work on that data.

![classes](https://camo.githubusercontent.com/9027a49b80ae079ede23392148213bb2841d71a857020b48717aeb128a39a661/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f64726976652d7669657765722f414a63354a6d5473504751577a6b32626651555a3537696631674a38677073564f59354c30715a435435495a7133375133746a5765735134626b32754256655a316672634849476c347a6f57526a593d77323536302d6831323936)

Objects in programming languages provide us with an easy way to model data. Let’s say we have an object called user. The user object has **properties**: values that contain data about the user, and **methods**: functions that define actions that the user can perform. This focus on “objects” and “actions” is the basis of **Object Oriented Programming (OOP) .**

**OOP** describes a way to write programs. This way focuses on data: stored as object properties, and actions: stored as object methods. The notion behind this way of writing code is that it more closely reflects how we think in reality. In OOP, everything is an object, and any actions we need to perform on data (logic, modifications, e.c.t) are written as methods of an object.

## OOP before ES6

```js
function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

Person.prototype.work = function () {
  console.log(`${this.name} is working 😫`);
};

const ahmed = new Person("Ahmed", 55, 168);

console.log(`age : ${ahmed.age}`);

const abdallah = new Person("Abdallah", "IDK", "IDK");

console.log(abdallah);

abdallah.work();
```

## OOP with Classes

```js
class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  work() {
    console.log(`${this.name} is working 😫`);
  }
}

const ahmed = new Person("Ahmed", 55, 168);

console.log(`age : ${ahmed.age}`);

const abdallah = new Person("Abdallah", "IDK", "IDK");

console.log(abdallah);

abdallah.work();
```

## Static methods vs Instance methods

Static methods belong to a class and don’t act on its instances. This means that they can’t be called on instances of the class. Instead, they're called on the class itself. They are often utility functions, such as functions to create or clone objects.

Instance methods belong to the class prototype, which is inherited by all instances of the class. As such, they act on class instances and can be called on them.

```js
const arr = [1, 2, 3]; // An Array instance

Array.isArray(arr); // Static method of Array
arr.push(4); // Instance method of Array
```

#### how can we make a static method ?!

##### Before ES6

```js
function Person(name) {
  this.name = name;
}

Person.myStaticMethod = function () {
  console.log(`Hello world, I am a static method !`);
};
```

##### After ES6

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  static myStaticMethod() {
    console.log(`Hello world, I am a static method !`);
  }
}
```

## Inheritance

Classes can also inherit from other classes. The class being inherited from is called the **parent**, and the class inheriting from the parent is called the **child**.

Class inheritance is a way to inherit the functionality of another class and extend it. We create a child class with the extends keyword.

#### Inheritance with classes

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  work() {
    console.log(`${this.name} is working 😫`);
  }

  sleep() {
    console.log(`${this.name} is sleeping 😴`);
  }
}

class Mentor extends Person {
  constructor(name, session) {
    super(name);
    this.session = session;
  }

  work() {
    console.log(`${this.name} enjoys teaching ${this.session} 😄`);
  }
}

const abdallah = new Mentor("Abdallah", "Computer Science");

abdallah.work();
abdallah.sleep();
```

#### Inheritance before classes

```js
function Person(name) {
  this.name = name;
}

Person.prototype.work = function () {
  console.log(`${this.name} is working 😫`);
};

Person.prototype.sleep = function () {
  console.log(`${this.name} is sleeping 😴`);
};

function Mentor(name, session) {
  Person.call(this, name);
  this.session = session;
}

Mentor.prototype = Object.create(Person.prototype);

Mentor.prototype.work = function () {
  console.log(`${this.name} enjoys teaching ${this.session} 😄`);
};
```
