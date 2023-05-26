select * from user order by birthday;
select * from user where gender = 'M' order by age desc;
select id, pw from user where birthday like "1990%";
select * from user where birthday like "____-06%" order by birthday asc;
select * from user where gender = "M" and birthday like "1970%";
select * from user order by age desc limit 3;
select * from user where age >= 25 and age <= 50;
update user set pw="12345678" where id="hong1234";
delete from user where id="jungkrat";

create table customer (
    id varchar(10) not null primary key,
    name varchar(10) not null,
    birthday date not null
)

insert into customer (id, name, birthday) values
('aaa', '김이현', '1990-03-17'),
('bbb', '최지율', '1992-11-01'),
('ccc', '이혜진', '1993-05-31')

create table order_list (
    id int auto_increment not null primary key,
    customer_id VARCHAR(10) not null,
    product_name varchar(20) not null,
    quantity int,
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON UPDATE CASCADE On DELETE CASCADE
);

insert into order_list (customer_id, product_name, quantity) values
('aaa', '맥북m1', 1),
('bbb', '빅파이', 30),
('ccc', '키보드', 3),
('bbb', '초코파이', 5),
('ccc', '텀블러', 1);

select * from customer;
select * from order_list;

--inner join
select * from customer inner join order_list on customer.id = order_list.customer_id;

primary key
FOREIGN key





CREATE TABLE new_customer (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday VARCHAR(6) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    CONSTRAINT new_customer_id PRIMARY KEY id
)

CREATE TABLE new_product (
    id INT NOT NULL auto_increment PRIMARY KEY,
    product_name varchar(10) NOT NULL,
    origin VARCHAR(10) NOT NULL,
    price INT NOT NULL
)

CREATE TABLE new_order (
    order VARCHAR(10) NOT NULL PRIMARY KEY,
    new_customer_id VARCHAR(10) NOT NULL,
    new_product_id INT NOT NULL,
    quantity INT NOT NULL
    FOREIGN KEY(new_customer_id) REFERENCES new_customer(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(new_product_id) REFERENCES new_product(id) ON UPDATE CASCADE ON DELETE CASCADE
)

insert into customer (id, name, birthday, phone) values
('hello', '김지수', '910101', '010-9184-3919'),
('world', '박세진*', '920202', '010-2830-8207'),
('banana', '이민지', '930303', '010-2345-3920'),
('apple', '정민혁', '940404', '010-9403-2905'),
('kiwi', '박세진*', '960517', '010-1350-7253');

insert into product (product_name, origin, price) values
('무선마우스', '삼성', '20000'),
('무선마우스', 'lg', '60000'),
('긴팔티셔츠', 'lg', '40000'),
('키보드', '삼성', '50000'),
('헤드폰', '소니', '30000'),
('마우스', '로지텍', '40000');


insert into new_order (order_id, new_customer_id, new_product_id, quantity) values
('m101312', 'hello', 1, 2);
('k233332', 'banana', 4, 1);
('t220085' 'world', 3, 3);
('h111107', 'hello', 5, 1);
('m123123', 'kiwi', 6, 1);