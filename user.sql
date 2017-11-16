--sample
INSERT INTO plan VALUES('5x5 trainer', 12, 5, 'Hard', null, uuid_generate_v4());

INSERT INTO _user VALUES('James','Andrews','@jamesftw',uuid_generate_v4(),5000,10,Array[uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4()],(SELECT array_length(followers,1) FROM _user), 240, 'https://s3-us-west-1.amazonaws.com/swole-userphoto/me.jpg')
