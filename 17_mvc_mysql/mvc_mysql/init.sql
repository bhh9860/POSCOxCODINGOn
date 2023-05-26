CREATE TABLE visitor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

INSERT INTO visitor (name, comment) VALUES
('홍길동', '내가왔다'),
('이찬혁', '으랏차차')