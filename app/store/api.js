 var cache = {
  users: {}
}


export default {
  getUserByID(userID, callback) {
    if (cache.users[userID]) return callback(cache.users[userID])

    fetch(`https://swole.herokuapp.com/users/${userID}`)
      .then(res => res.json())
      .then(data => {
        cache.users[userID] = data

        callback(data)
      })
      .catch(err => console.log(err))
  }
}
