class Ping {
  static pingStatic(text) {
    console.log(this.name, text)
  }

  constructor(params) {
    this.name = params.name;
  }
  ping(text) {
    console.log(this.name, text)
  }
}

console.log(Ping);

const first = new Ping({name: "1st"})
const second = new Ping({name: "2st"})
const third = new Ping({name: "3st"})
console.log(first);
console.log(second);
console.log(third);

first.ping("seperate")
second.ping("seperate")
third.ping("seperate")

Ping.pingStatic("cant acces instances. a wanted satic to call a function in each instances");