create database myCompany;

use myCompany;


--  delete database 

drop database myCompany;


--  CREATE TABLE (STUDENTS) 


create table students (
	student_id int primary key,
    name varchar(20),
    subject varchar(15),
    age int
);

drop table students;

describe students;


-- Create(insert) into table 

insert into students values(1, 'utkarsh', 'CS', 15);
insert into students values(2, 'Rohan', 'Physics', 20);
insert into students values(3, 'Akash', 'Physics', 26);
insert into students values(4, 'anushka', 'movies', 30);



--  Read the table 

select * from students;


--  UPDATE the value inside the table 

update students
set subject = 'Bio'
where student_id = 2;


-- Delete from table 

delete from students
where student_id = 1;

-- CRUD -> create, Read, update, delete


-- question If i want students who love physics

select * from students 
where subject = "Physics";


-- question if i want students whos age > 25 

select * from students
where age > 25;


-- question I want students whos age > 25 and they love movies. 

select * from students
where age > 25 and subject = 'movies';

