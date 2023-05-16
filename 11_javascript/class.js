class Cat {
    //생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    mew() {
        console.log("mew!")
    }

    eat() {
        console.log(this.name, "'s food")
    }

    test() {
        this.mew();
    }
}

//상속
//부모 = 상위 클래스 = 슈퍼클래스
//자식 = 하위 클래스 = 서브클래스

//부모클래스
class Product {
    name = '';
    price = 0;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price + '만원'
    }

    setPrice(price) {
        this.price = price;
    }

    //추상화 : 핵심적인 코드만 보여주는 것
    //캡슐화 : 보호

    //상속성 : 코드 재사용
    //다양성 : 변경이 용이
}

//자식 클래스
class TV extends Product {
    constructor(name, price, hill) {
        super(name, price);
        this.hill = hill;
        
    }
}

const tv1 = new TV('samsung TV', 200, 300);
console.log(tv1)
console.log(tv1.getPrice())
console.log(tv1.hill)