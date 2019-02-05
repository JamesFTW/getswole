DROP DATABASE IF EXISTS Plans;
CREATE DATABASE Plans;

\c Plans;

--UUID array will have to be VARCHAR soon
CREATE TABLE Plan (
  planNAME VARCHAR,
  weeks VARCHAR,
  frequency INTEGER,
  difficulty VARCHAR,
  workouts UUID[],
  planID UUID
);
CREATE TABLE _USERFOLLOW (
  userID VARCHAR,
  followers UUID[],
  following UUID[]
);
CREATE TABLE _USER2(
  firstNAME VARCHAR,
  lastNAME VARCHAR,
  userName VARCHAR,
  user_id UUID,
  weightLifted INTEGER,
  workoutsCompleted JSON[],
  followers UUID[],
  following UUID[],
  profilePhoto VARCHAR
);

CREATE TABLE USERPLANS(
  userID UUID,
  planID UUID,
  createdAT DATE,
  userWorkouts UUID[]
);

CREATE TABLE USERWORKOUTS(
  userWorkoutID UUID,
  userID UUID,
  workoutID UUID,
  weight VARCHAR
);
CREATE TABLE EXERCISE(
  exerciseNAME VARCHAR,
  type VARCHAR,
  repNUMBER INTEGER,
  setNumber INTEGER
);
CREATE TABLE Workout(
  type VARCHAR,
  exercises UUID[],
  workoutID UUID
);

--Plans
INSERT INTO plan VALUES('5x5 trainer', 12, 5, 'Hard', null, uuid_generate_v4());
INSERT INTO plan VALUES('Fat hop trainer', 12, 5, 'Hard', null, uuid_generate_v4());
INSERT INTO plan VALUES('KT Beyonce workout', 12, 5, 'Hard', null, uuid_generate_v4());
INSERT INTO plan VALUES('GET SWOLE', 12, 5, 'Hard', null, uuid_generate_v4());
Update plan SET workouts = Array(SELECT workoutID FROM workout) WHERE planname='GET SWOLE';

--Workouts
INSERT INTO workout VALUES('Leg Day',Array(SELECT exerciseid FROM exercise WHERE type='Leg'), uuid_generate_v4());
INSERT INTO workout VALUES('Chest and Triceps',Array(SELECT exerciseid FROM exercise WHERE type='Chest' OR type='Triceps'), uuid_generate_v4());
INSERT INTO workout VALUES('Shoulders',Array(SELECT exerciseid FROM exercise WHERE type='Shoulders'), uuid_generate_v4());
INSERT INTO workout VALUES('Back',Array(SELECT exerciseid FROM exercise WHERE type='Back'), uuid_generate_v4());

--Exercises
INSERT INTO exercise VALUES('Barebell Squat','Leg',10, 4);
INSERT INTO exercise VALUES('Hack Squat','Leg',200, 4);
INSERT INTO exercise VALUES('Standing Leg Curl','Leg',15, 3);

INSERT INTO _user2 VALUES('James','Andrews','@jamesftw',5000,
(Array[' {"timecompleted": "2:30pm", "workoutid": 345343,
  "exercises":[ { "exerciseid": 3424324, "weight": 200}, {
  "exerciseid": 3424324, "weight": 200}] }'])::json[],Array[uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4()],Array[uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4()],'https://s3-us-west-1.amazonaws.com/swole-userphoto/me.jpg')


INSERT INTO _USERFOLLOW Values('7b03b926-1e3e-4088-8ddb-897809549bf1',Array[uuid_generate_v4()],Array[uuid_generate_v4()])


--sample
INSERT INTO plan VALUES('5x5 trainer', 12, 5, 'Hard', null, uuid_generate_v4());

INSERT INTO _user VALUES('James','Andrews','@jamesftw',uuid_generate_v4(),5000,10,Array[uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4()],(SELECT array_length(followers,1) FROM _user), 240, 'https://s3-us-west-1.amazonaws.com/swole-userphoto/me.jpg')
INSERT INTO _user VALUES('Jacob','Thornton','@fat',uuid_generate_v4(),5000,10,Array[uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4()],(SELECT array_length(followers,1) FROM _user), 240, 'https://s3-us-west-1.amazonaws.com/swole-userphoto/fNHQpBpd_400x400.jpg')
INSERT INTO _user VALUES('Angel','Lim','@LimaBeans',uuid_generate_v4(),5000,10,Array[uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4(),uuid_generate_v4()],200, 240, 'https://s3-us-west-1.amazonaws.com/swole-userphoto/fNHQpBpd_400x400.jpg')
