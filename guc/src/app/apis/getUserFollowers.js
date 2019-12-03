import axios from 'axios'

const getUserFollowers = user => {
  const followerArray = []
  axios.get(`https://api.github.com/users/${user}/following`)
  .then(res => followerArray.push(res.data))
  .catch(err => console.log(err))
  return followerArray
}

export default getUserFollowers