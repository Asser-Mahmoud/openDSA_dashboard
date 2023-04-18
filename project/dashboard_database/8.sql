DROP TABLE IF EXISTS `SECTION`;

CREATE TABLE SECTION(
	SECID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	SECNAME VARCHAR(100) NOT NULL,
	NUMBER_OF_EXERCISES INT,
	CHID INT,
	FOREIGN KEY (CHID) REFERENCES CHAPTER(CHID)
);

INSERT INTO SECTION (SECNAME, NUMBER_OF_EXERCISES, CHID) VALUES
('Introduction to Programming', 4, 1),
('Getting Started with Variables', 5, 2),
('Conditional Statements', 6, 2),
('Looping Structures', 7, 2),
('Functions and Procedures', 3, 2),
('Arrays and Lists', 4, 2),
('Advanced Array Operations', 5, 2),
('Pointers and Memory Management', 4, 2),
('Recursion and Backtracking', 4, 2),
('Sorting Algorithms', 5, 3),
('Searching Algorithms', 5, 3),
('Trees and Graphs', 6, 3),
('Hash Tables', 4, 3),
('Dynamic Programming and Memoization', 5, 3),
('Relational Database Design', 3, 4),
('SQL Queries and Subqueries', 4, 4),
('Database Administration and Security', 3, 4),
('Database Programming with JDBC', 3, 4),
('Networking Fundamentals and Protocols', 4, 5),
('TCP/IP and OSI Model', 5, 5),
('Network Security and Firewalls', 4, 5),
('Wireless and Mobile Networks', 4, 5),
('Introduction to HTML and Web Development', 3, 6),
('Cascading Style Sheets (CSS)', 3, 6),
('JavaScript and DOM Manipulation', 4, 6),
('Web Development Frameworks and Libraries', 4, 6),
('Process Management and Multithreading', 4, 7),
('Memory Management and Garbage Collection', 5, 7),
('File Systems and Storage Management', 4, 7),
('Device Drivers and System Calls', 5, 7),
('Searching Algorithms and Indexing', 4, 7),
('Introduction to Artificial Intelligence', 3, 8),
('Search Algorithms and Heuristics', 4, 8),
('Knowledge Representation and Reasoning', 5, 8),
('Expert Systems and Inference Engines', 4, 8),
('Neural Networks and Deep Learning', 6, 8),
('Genetic Algorithms and Evolutionary Computing', 3, 8),
('Rendering Techniques and Graphics Libraries', 4, 9),
('3D Modeling and Animation', 3, 9),
('Animation and Special Effects', 2, 9),
('Virtual Reality and Augmented Reality', 4, 9),
('Software Requirements Engineering', 4, 10),
('Software Design Patterns and Architectures', 5, 10),
('Software Testing and Quality Assurance', 4, 10),
('Software Maintenance and Evolution', 5, 10),
('Agile Methodologies and Scrum', 6, 10),
('Security Principles and Threat Modeling', 3, 11),
('Cryptography and Encryption', 4, 11),
('Network Security and Intrusion Detection', 4, 11),
('Threat Modeling and Risk Assessment', 3, 11);
