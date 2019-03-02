
import React, { PureComponent } from 'react'
import ProfileHeader            from '../components/profileHeader.js'
import CalendarComponent        from '../components/calendar.js'
import BackGroundWrapper        from '../components/backGroundWrapper.js'

export default class SelectDateScreen extends PureComponent {
  render() {
    return (
      <BackGroundWrapper>
        <ProfileHeader userName={"Pick Start Date"} />
        <CalendarComponent/>
      </BackGroundWrapper>
    )
  }
}
