
--Image Board User Stories:
--MVP:
--User can make a thread anonymously
--User can upload image as part of any post
--User can reply to a thread
--User can reply to a post
--User can see all active threads
--User can view a thread post and its replies
--User can navigate to replies
--System can assign post number

--Additional functionality:
--User can shortcut to top of thread
--User can expand a post image to full resolution by clicking/hovering? on it
--System can label threads that have existed for a certain period of time as ‘decayed’ and remove them from the home page
--System can archive threads
--User can log in
--Admin can log in
--Admin can add moderators
--Moderators can log in
--Moderators can remove posts
--Moderators can pin threads
--System can retain replies to removed posts
--System can sort posts by number of replies
--User can conceal contents of post image until expanded/opened
--User can set layout preferences
--User can enable night mode
DROP TABLE posts;
DROP TABLE threads;
DROP SEQUENCE t_id_maker;
DROP SEQUENCE p_id_maker;



CREATE TABLE threads (
    t_id NUMBER(10) PRIMARY KEY,
    num_posts NUMBER(10) DEFAULT 0,
    active NUMBER(1) DEFAULT 1
);
/
    
--   Still figuring out details to store images in SQL, in the p_image field
CREATE TABLE posts (
    p_id NUMBER(10) PRIMARY KEY,
    t_id NUMBER(10),
    parent_id NUMBER(10),   --if this is a reply, this will represent the p_id of the parent post. if this is the root post in a thread, the value will be 0.
--    image BLOB,
--    image ORDSYS.ORDIMGB DEFAULT NULL,
    image VARCHAR2(200),
    text VARCHAR2(500),
    timestamp VARCHAR2(30) NOT NULL,
    username VARCHAR2(20) DEFAULT 'Anonymous'
);
/

ALTER TABLE posts ADD CONSTRAINT fk_posts_threads FOREIGN KEY
(t_id) REFERENCES threads(t_id) ON DELETE CASCADE;

--ALTER TABLE posts ADD CONSTRAINT fk_posts_posts FOREIGN KEY
--(parent_id) REFERENCES posts(p_id) ON DELETE CASCADE;

CREATE SEQUENCE t_id_maker 
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
;
/

CREATE SEQUENCE p_id_maker 
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
;
/

INSERT INTO threads VALUES(t_id_maker.nextval, DEFAULT, DEFAULT);
INSERT INTO posts VALUES(p_id_maker.nextval, 1, 0, 'example.com', 'Test post please ignore', '2019-10-04T08:00', DEFAULT);

SELECT * FROM threads;
SELECT * FROM posts;

commit;
