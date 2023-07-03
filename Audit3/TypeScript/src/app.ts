let price: number = 1.9999;

let fname: string = "john doe";

let isGraduated: boolean = false;

let color: string[] = [
    "Red ", "Green ", "Blue"
];
//any  có thể truy cập bất kỳ mà không cần khai báo  kiểu dữ liệu 
let x: any = JSON.stringify("john doe");

fname = x;

//unknown tương tự any nhưng trước khi sử dụng phải khai báo kiểu dữ liệu 
let y: unknown = 111;

y = "marry doe ";

//type asertion: có 2 cú pháp (as, <>)
(y as string).split(" ");

(<string>y).split("");

(y as number).toFixed(2);

fname = y as string;


console.log(y);


function add(a: number, b?: number): number {

    b = b ?? 0;
    // NẾU B KHÁC NUll , undefined thì sẽ lấy giá trị của chính nó 
    // là null , undefined thì lấy giá trị là 0 
    return a + b;
}


let result = add(1, 2);

console.log(result);

function sayHi(name: string, msg: string = "Hi"): void {
    console.log(`${msg} from ${name}`);
}
sayHi(fname);

//type union 
let userID: number | string = "A62GE";
userID = 12345;

let userIDArr: (number | string)[] = ["A62GE", 12345];

//typle: cố định số lượng , thứ tự và kiểu dữ liệu 

let typleArr: [string, number] = ["abc", 1];



let todo: {
    title: string,
    completed: boolean,
    method?: () => string;
    method2?: () => void;
    readonly x: string;
} = {
    title: "do something",
    completed: false,
    x: "abc"
};

//interface => shape của một object, nó định nghĩa object có nh~ property gì, method gì nhưng
// không định nghĩa nó hđộng thế nào (logic); 
//class => shape của một object nhưng luôn đi kèm logic 

interface Vehicle {
    enine: string;
    color: string;
    start: () => void;
    move: () => void;
    stop: () => void;
}

// không thể tạo được instnace(new) từ một interface, trong khi đó class thì có thể 
// let obj = new Vehicle();

let motoBike: Vehicle = {
    enine: "Động cơ xăng 4 thì ",
    color: "Đen",
    start: function () {
        // 
    },
    move: function (): void {
        // 
    },
    stop: function (): void {
        // 
    }
}

let electricBike: Vehicle = {
    enine: "",
    color: "",
    start: function (): void {
        throw new Error("Function not implemented.");
    },
    move: function (): void {
        throw new Error("Function not implemented.");
    },
    stop: function (): void {
        throw new Error("Function not implemented.");
    }
}

class Vehicle_2 {
    // Cách 1: 
    // public engine: string;
    // public color: string;
    // private id: string;
    // constructor(engine: string, color: string, id: string) {
    //     this.engine = engine;
    //     this.color = color;
    //     this.id = id;
    // }

    // Cách 2:
    constructor(
        public engine: string,
        public color: string,
        private id: string
    ) { }
    start() {
        // 
    }
    move() {
        // 
    }
    stop() {
        // 
    }
}

let v2 = new Vehicle_2("xăng ", " đen ", "abc")

// class Vehicle_3 implements Vehicle {
//     constructor(
//         public engine: string,
//         public color: string,
//     ) { }
//     star() { }
//     move() { }
//     stop() { }
// }    


type USERID = number | string;

let uID1: USERID = 1;
