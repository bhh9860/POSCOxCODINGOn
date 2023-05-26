CREATE TABLE visitor (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment VARCHAR(20),
)

INSERT INTO visitor (id, name, comment) VALUES
('1', '홍길동', '내가 왔다.'),
('2', '이찬혁', '으라차차'),

-- 사용자 생성
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
-- 사용자 권한(모든 DB에 접근 가능)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MYSQL 캐쉬를 지우고 설정 적용
FLUSH PRIVILEGES;