CREATE TABLE _USER(
  userID UUID,
  firstName VARCHAR,
  lastName VARCHAR,
  userName VARCHAR,
  following INTEGER,
  followerCount INTEGER,
  profilePhoto VARCHAR,
  workoutsCompleted INTEGER,
  weightLifted INTEGER,
  workouts JSON[],
  data_created timestamptz
)

CREATE TABLE USER_WORKOUT_STATS(
  userID VARCHAR,
  workouts JSON[]
)

CREATE TABLE UserConnections(
  userID UUID,
  followers VARCHAR[],
  following VARCHAR[]
)

INSERT INTO _USER VALUES(
uuid_generate_v4(),
'James',
'Andrews',
'jamesftw',
0,
0,
'https://s3-us-west-1.amazonaws.com/swole-userphoto/me.jpg',
0,
0,
Array[]::json[],
NOW()
)
INSERT INTO _USER VALUES(
uuid_generate_v4(),
'Jacob',
'Thornton',
'fat',
0,
0,
'https://s3-us-west-1.amazonaws.com/swole-userphoto/me.jpg',
0,
0,
Array[]::json[],
NOW()
)

CREATE OR REPLACE FUNCTION updateUserConnections() RETURNS TRIGGER AS $example_table$
   BEGIN
      INSERT INTO UserConnections(userID) VALUES (new.userID);
      RETURN NEW;
   END;
$example_table$ LANGUAGE plpgsql;

CREATE TRIGGER updateUserConnections AFTER INSERT ON _USER
FOR EACH ROW EXECUTE PROCEDURE updateUserConnections();
