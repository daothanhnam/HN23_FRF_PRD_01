let price: number = 1.9234;

let fname: string = "john doe";

let isGraduated: boolean = false;

let colors: string[] = ["Red", "Green", "Blue"];

let x: any = JSON.stringify("john doe");

x.toFixed();

fname = x;

// unknown tương tự any, điểm khác là trước khi sử dụng phải assertion kiểu dữ liệu
let y: unknown = 111;

y = "marry doe";

// type assertion: có 2 cú pháp(as, <>)

(y as string).split(" "); // dùng as

(<string>y).split(" "); // dùng <>

(y as number).toFixed(2);

fname = y as string;

price = y as number;

function add(a: number, b?: number): number {
  b = b ?? 0;
  return a + b;
}

let result = add(1, 2);

console.log(result);

function sayHi(name: string, msg: string = "Hi"): void {
  console.log(`${msg} from ${name}`);
}

sayHi(fname);

// type union
let userID: number | string = "A62GE";

userID = 12345;

let userIDArr: (number | string)[] = ["A62GE", 12345];

// tuple: là một array mà cố định số lượng, thứ tự và kiểu dữ liệu

let tupleArr: [string, number] = ["abc", 1];
// tupleArr.push(12);

let todo: {
  title: string;
  completed: boolean;
  method1?: () => string;
  method2?: () => void;
  readonly x: string;
} = {
  title: "Buy some eggs",
  completed: false,
  x: "abc",
};

todo.title = "buy some apples";

// interface => shape của một object, nó định nghĩa object có những property gì, method gì nhưng không định nghĩa
// nó hoạt động thế nào (logic),

// class => shape của một object nhưng đi kèm luôn logic

interface vehicle {
  engine: string;
  color: string;
  start: () => void;
  move: () => void;
  stop: () => void;
}

// không tạo dc instance từ một interface (không thể new), trong khi đó class thì có thể tạo ra instance (dùng new)
// let v1 = new Vehicle();

let motoBike: vehicle = {
  engine: "Động cơ xăng 4 thì",
  color: "Black",
  start: function () {
    ///
  },
  stop: function (): void {
    ///
  },
  move: function (): void {
    ///
  },
};

let electrictBike: vehicle = {
  engine: "",
  color: "",
  start: function (): void {
    ///
  },
  move: function (): void {
    ///
  },
  stop: function (): void {
    ///
  },
};

class vehicle_2 {
  // Cách 1: để khai báo các property

  // public engine: string;
  // public color: string;
  // private id: string;
  // constructor(engine: string, color: string, id: string) {
  //   this.engine = engine;
  //   this.color = color;
  //   this.id = id;
  // }

  // Cách 2:
  constructor(
    public engine: string,
    public color: string,
    private id: string
  ) {}

  start() {
    ////
  }

  move() {
    ////
  }

  stop() {
    ////
  }
}

let v2 = new vehicle_2("Xăng 4 thì", " Black", "ABHS67");

class vehicle_3 implements vehicle {
  constructor(
    public engine: string,
    public color: string,
    private id: string
  ) {}
  start() {}
  move() {}
  stop() {}
}

type USERID = number | string;

let uID1: USERID = 1;

// enum: a group of related constant variable

enum Direction {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
console.log(Direction.UP);

enum Direction2 {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
console.log(Direction2.UP);

//generic
function toArray(v1: any, v2: any) {
  return [v1, v2];
}

function toArray_2<T, U>(v1: T, v2: U): [T, U] {
  return [v1, v2];
}

function toArrayNumber(v1: number, v2: number) {
  return [v1, v2];
}

let arr = toArray("john", "doe");
arr[0].anyMethod();
let arr_2 = toArray_2<string, string>("john", "doe");
arr_2[0].toUpperCase();
// arr_2[0].anyMethod(); lỗi
let arr_3 = toArray_2(1, 2);
arr_3[0].toFixed(1);

// index signature
type DynamicObject = {
  [key: string]: any;
};

interface C {
  postId: number;

  id: number;

  name: string;

  email: string;

  body: string;
}

let c1: C = {
  postId: 1,
  id: 2,
  name: "quo vero reiciendis velit similique earum",
  email: "Jayne_Kuhic@sydney.com",
  body: "est natus enim nihil est dolore omnis voluptatem nem error expedita pari",
};

// c1.age; lỗi
let c2: DynamicObject = {
  fname: "John Doe",
  age: 22,
};

c2.isGraduated = false;

//// never

function throwError(msg: string): never {
  throw new Error(msg);
}
console.log("aaa");
throwError("abc");
console.log("bbb");
