
--chest--
insert into exercises values
(uuid_generate_v4(), 'bench press', 'chest' ,0, null),
(uuid_generate_v4(), 'incline dumbbell press', 'chest' ,0, null),
(uuid_generate_v4(), 'dumbbell bench press', 'chest' ,0, null),
(uuid_generate_v4(), 'dumbbell fly', 'chest', 0, null),
(uuid_generate_v4(), 'barebell bench press', 'chest', 0, null),
(uuid_generate_v4(), 'cable crossover', 'chest', 0, null),
(uuid_generate_v4(), 'butterfly', 'chest', 0, null),
(uuid_generate_v4(), 'incline dumbbell fly', 'chest', 0, null);

--mid back--
insert into exercises values
(uuid_generate_v4(), 'reverse grip bent-over row', 'back' ,0, null),
(uuid_generate_v4(), 'one-arm dumbbell row', 'back', 0, null),
(uuid_generate_v4(), 't-bar row', 'back', 0, null),
(uuid_generate_v4(), 'dumbbell incline row', 'back', 0, null),
(uuid_generate_v4(), 'seated cable rows', 'back', 0, null),
(uuid_generate_v4(), 'back extensions', 'back' ,0, null),
(uuid_generate_v4(), 'deadlift', 'back', 0, null),
(uuid_generate_v4(), 'rackpulls', 'back', 0, null),
(uuid_generate_v4(), 'bent-over barebell row', 'back', 0, null),
(uuid_generate_v4(), 'reverse grip bent-over row', 'back' ,0, null),
(uuid_generate_v4(), 'one-arm dumbbell row', 'back', 0, null);

--arms--
insert into exercises values
(uuid_generate_v4(), 'wide-grip standing barbell curl', 'arms' ,0, null),
(uuid_generate_v4(), 'ez-bar curl', 'arms', 0, null),
(uuid_generate_v4(), 'dips', 'arms',0, null),
(uuid_generate_v4(), 'decline ez bar triceps extension', 'arms', 0, null),
(uuid_generate_v4(), 'tricep pushdown', 'arms', 0, null),
(uuid_generate_v4(), 't-bar row', 'arms', 0, null);

--legs--
insert into exercises values
(uuid_generate_v4(), 'leg press', 'legs' ,0, null),
(uuid_generate_v4(), 'deadlift', 'legs',0, null),
(uuid_generate_v4(), 'barbell squat', 'legs', 0, null),
(uuid_generate_v4(), 'leg extensions', 'legs', 0, null),
(uuid_generate_v4(), 'tricep pushdown', 'legs', 0, null),
(uuid_generate_v4(), 'hack squat', 'legs', 0, null);

--shoulders--
insert into exercises values
(uuid_generate_v4(), 'side lateral raise', 'shoulders' ,0, null),
(uuid_generate_v4(), 'front raise', 'shoulders',0, null),
(uuid_generate_v4(), 'standing military press', 'shoulders', 0, null),
(uuid_generate_v4(), 'seated dumbell military press', 'shoulders',0, null),
(uuid_generate_v4(), 'incline reverse flyes', 'shoulders', 0, null),
(uuid_generate_v4(), 'front plate raise', 'shoulders', 0, null);

insert into workoutexercises values
('chest day', (select exerciseid from exercises where exerciseid='7913f8d7-f3f1-4b6f-b387-67dad113cf38')),
('chest day', (select exerciseid from exercises where exerciseid='4941013e-e8b8-453f-acd2-e5c9d3f23dd8')),
('back day', (select exerciseid from exercises where exerciseid='f4d9e3d5-28b2-4d04-8422-9922bb77d4de')),
('back day', (select exerciseid from exercises where exerciseid='f3bf3083-3a0e-4c4f-906c-0f5d4579f4d2')),
('back day', (select exerciseid from exercises where exerciseid='90ee625a-6a9f-458e-b612-9f2910db4486')),
('back day', (select exerciseid from exercises where exerciseid='d186a61e-9ca2-4943-b925-520e037fefef')),
('back day', (select exerciseid from exercises where exerciseid='e45dae5c-d230-420a-a8fb-32219df080de')),
('back day', (select exerciseid from exercises where exerciseid='809c9f3a-f06d-4e12-8941-f68f7d4950c5'));

--Workouts--
insert into workouts values
(uuid_generate_v4(), 'chest day', 'photo.jpg', 'chest'),
(uuid_generate_v4(), 'leg day', 'photo.jpg', 'leg'),
(uuid_generate_v4(), 'back day', 'photo.jpg', 'back'),
(uuid_generate_v4(), 'shoulder day', 'photo.jpg', 'shoulder');

-- Workout exercises --
--Chest--
insert into workoutexercises values
((select workoutid from workouts where workoutid='515a16b6-0cf6-4af7-b68d-f29fd5335725'),
  (select exerciseid from exercises where exerciseid='c8d0b62a-9864-429b-9fea-0fd9b792c303'),
  3,
  12
);
insert into workoutexercises values
((select workoutid from workouts where workoutid='515a16b6-0cf6-4af7-b68d-f29fd5335725'),
  (select exerciseid from exercises where exerciseid='4c04f20f-df39-4cbd-be25-a636ccbf68c2'),
  3,
  12
),
((select workoutid from workouts where workoutid='515a16b6-0cf6-4af7-b68d-f29fd5335725'),
  (select exerciseid from exercises where exerciseid='e4e2c9cb-2f1a-4082-b434-4f6594037435'),
  3,
  12
),
((select workoutid from workouts where workoutid='515a16b6-0cf6-4af7-b68d-f29fd5335725'),
  (select exerciseid from exercises where exerciseid='783c16e5-25e6-425b-9e40-134ce9ab5297'),
  3,
  12
),
((select workoutid from workouts where workoutid='515a16b6-0cf6-4af7-b68d-f29fd5335725'),
  (select exerciseid from exercises where exerciseid='006e088d-8f58-49fa-bce2-beb4ff485baa'),
  3,
  12
);

--Legs--
insert into workoutexercises values
((select workoutid from workouts where workoutid='99e624f4-2c87-443a-8d87-d5b798f58f4f'),
  (select exerciseid from exercises where exerciseid='84830b39-1ce9-45c7-83c9-ade756848e24'),
  3,
  12
);
insert into workoutexercises values
((select workoutid from workouts where workoutid='99e624f4-2c87-443a-8d87-d5b798f58f4f'),
  (select exerciseid from exercises where exerciseid='4d8def64-5b89-444a-9d7a-87316832f6ec'),
  3,
  12
),
((select workoutid from workouts where workoutid='99e624f4-2c87-443a-8d87-d5b798f58f4f'),
  (select exerciseid from exercises where exerciseid='5fdcaa59-a750-4b16-92b2-289925f5fefc'),
  3,
  12
),
((select workoutid from workouts where workoutid='99e624f4-2c87-443a-8d87-d5b798f58f4f'),
  (select exerciseid from exercises where exerciseid='8b38562a-cab3-4419-af85-8d6c0e67f629'),
  3,
  12
),
((select workoutid from workouts where workoutid='99e624f4-2c87-443a-8d87-d5b798f58f4f'),
  (select exerciseid from exercises where exerciseid='ecd39acb-3a1b-46b5-9506-9720d009d69a'),
  3,
  12
);

--Shoulders--
insert into workoutexercises values
((select workoutid from workouts where workoutid='bee06605-396d-490c-af6d-3857941134a2'),
  (select exerciseid from exercises where exerciseid='506f4bd0-2b83-4a28-a8e5-b172b48def4a'),
  3,
  12
);
insert into workoutexercises values
((select workoutid from workouts where workoutid='bee06605-396d-490c-af6d-3857941134a2'),
  (select exerciseid from exercises where exerciseid='5f69c829-f677-4180-9916-239b367e7ee4'),
  3,
  12
),
((select workoutid from workouts where workoutid='bee06605-396d-490c-af6d-3857941134a2'),
  (select exerciseid from exercises where exerciseid='b9c03284-a39f-4d37-8f90-197c8422de63'),
  3,
  12
),
((select workoutid from workouts where workoutid='bee06605-396d-490c-af6d-3857941134a2'),
  (select exerciseid from exercises where exerciseid='b3c9f566-1448-41dc-83ae-747fe6760498'),
  3,
  12
),
((select workoutid from workouts where workoutid='bee06605-396d-490c-af6d-3857941134a2'),
  (select exerciseid from exercises where exerciseid='2547b667-7dd0-40c5-8532-613ee8f1343f'),
  3,
  12
);

--Back--
insert into workoutexercises values
((select workoutid from workouts where workoutid='615b6766-f177-482d-8ba4-5a6df3ddb68c'),
  (select exerciseid from exercises where exerciseid='8928fd83-d533-4d3f-80cd-2ea6d320f4d4'),
  3,
  12
);
insert into workoutexercises values
((select workoutid from workouts where workoutid='615b6766-f177-482d-8ba4-5a6df3ddb68c'),
  (select exerciseid from exercises where exerciseid='d398bba1-b8a7-409d-bd7c-8b7e6a22b65a'),
  3,
  12
),
((select workoutid from workouts where workoutid='615b6766-f177-482d-8ba4-5a6df3ddb68c'),
  (select exerciseid from exercises where exerciseid='ddd7d58f-f813-4181-99f7-e331f34cd504'),
  3,
  12
),
((select workoutid from workouts where workoutid='615b6766-f177-482d-8ba4-5a6df3ddb68c'),
  (select exerciseid from exercises where exerciseid='d478c1f8-58c5-4ff8-8310-b7d330fd9743'),
  3,
  12
),
((select workoutid from workouts where workoutid='615b6766-f177-482d-8ba4-5a6df3ddb68c'),
  (select exerciseid from exercises where exerciseid='4cf3d181-3e48-48d9-8800-d57e5ae6487c'),
  3,
  12
);

--workoutplan--
insert into workoutplans values
(uuid_generate_v4(), '12-week Go Dumb Plan', 'workout', 12, '{"bee06605-396d-490c-af6d-3857941134a2", "615b6766-f177-482d-8ba4-5a6df3ddb68c", "99e624f4-2c87-443a-8d87-d5b798f58f4f", "515a16b6-0cf6-4af7-b68d-f29fd5335725"}');

-- Need to make sure to pass id to get calander stuff



SELECT
  workouts.workoutid,
  exercises.exerciseid
from
  workouts, exercises
INNER JOIN workouts ON workoutexercises.workoutid = workouts.workoutid
INNER JOIN exercises ON workoutexercises.exerciseid = exercises.exerciseid;