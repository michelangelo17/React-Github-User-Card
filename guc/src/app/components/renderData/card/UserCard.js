import React from 'react'
import {
  FlexContainer,
  BasicImg,
  P,
  A,
} from '../../../emotionalThings/EmoTools'

const UserCard = props => (
  <FlexContainer br='10px' bs fdc white maxw='800px' w='90%' m='20px' p='3%'>
    <FlexContainer white w='100%' jcsb>
      <BasicImg w='200px' m='0 0 10px 0' src={props.avatar} alt='GitHub User Avatar' />
      <FlexContainer white fdc p='0 0 0 30px'>
        {props.name ? (
          <P c m='0 auto'>
            {props.name}
          </P>
        ) : (
          <P c m='0 auto' p='10px 0'>
            Username: {props.username}
          </P>
        )}
        <P c m='0 auto' p='10px 0'>
          {props.location}
        </P>
        <A c ul m='0 auto' p='10px 0' href={props.profile}>
          View profile
        </A>
        <P c m='0 auto' p='10px 0'>
          following: {props.following}
        </P>
        <P c m='0 auto' p='10px 0'>
          followers: {props.followers}
        </P>
      </FlexContainer>
    </FlexContainer>
    <P c p='10px 0' m='0 auto'>
      {props.bio}
    </P>
  </FlexContainer>
)

export default UserCard
