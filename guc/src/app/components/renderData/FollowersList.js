import React from 'react'
import UserCard from './card/UserCard'

const FollowersList = props => (
  <>
    {props.followersArray.map(user => (
      <UserCard
        key={user.id}
        name={user.name}
        bio={user.bio}
        followers={user.followers}
        following={user.following}
        avatar={user.avatar_url}
        profile={user.html_url}
        username={user.login}
        location={user.location}
      />
    ))}
  </>
)

export default FollowersList
