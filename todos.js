----

table workouts
workout_id, workout_name, image

"curl day" "a insane curl workout", "crazarms.png"
"ankle day" "a insane ankle workout", "crazankles.png"

table workout_exercises
workout_id, exercise_id

table exercises
exercise_id, name, suggested_weight, image

table users
user_id, facebook_id, username, password, bio, avatar

table user_following
user_id, following_id, created_at, updated_at

table user_completed_workouts
user_id, workout_id, created_at, updated_at

------ sign in

collect fb username + password
make request to fb
if successful, fb returns a result object that looks like "success" and a "token" and a "facebook_id"
if result.sucess === true then fetch user_id by facebook_id (SELECT * FROM users WHERE facebook_id="result.facebook_id")
return to client app the logged in token and the logged in user
if not sucess throw error, and ask them to re-enter their fb shit

~~~ 2 weeks pass ~~~

if there is a token in local storage, make a request to facebook.com/authenticate
if sucessful, fb will return a similar result object as before, etc.
if not, delete token and show them sign in/signup page


----- Profile Page (for "james")

"james"

james following: Select following_id from user_following where user_id="james"
james followers: Select user_id from user_following where following_id="james"


const result = {
  id: 'james'
}

results.following = ( Select following_id from user_following where user_id="james" )
results.followers = (Select user_id from user_following where following_id="james")

return result


-------- Home feed (for "james")

followingIDs = SELECT following_id FROM user_following WHERE user_id="james"

arrayOfUsers = SELECT * FROM users WHERE user_id IN (followingIDs)

recentCompletedWorkouts =
  SELECT * FROM user_completed_workouts
    INNER JOIN users ON user_completed_workouts.user_id = user.user_id
    WHERE user_id IN (followingIDs)
    ORDER_BY created_at DESC;

----- WOD

SELECT * FROM
