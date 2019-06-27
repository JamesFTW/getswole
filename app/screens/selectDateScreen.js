
import React, { PureComponent } from 'react'
import { Redirect }             from "react-router-native"
import ProfileHeader            from '../components/profileHeader.js'
import CalendarComponent        from '../components/calendar.js'
import BackGroundWrapper        from '../components/backGroundWrapper.js'
import DateConfirm              from '../components/dateConfirm'
import { registerUserWorkout }  from '../api'
import { dayofWeek }            from '../api/util'

export default class SelectDateScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      datePicked: false,
      data: {},
      planId: '',
      length: '',
      redirectToWorkout: false
    }
  }

  componentDidMount() {
    const {
      planId,
      length
    } = this.props.location.state

    this.setState({
      planId,
      length
    })
  }

  getDate = data => {
    this.setState({
      data,
      datePicked: true
    })
  }

  onNo = () => {
    this.setState({
      datePicked: false
    })
  }

   onYes = async () => {
    const { planId, length } = this.state
    const { timestamp } = this.state.data

    let res = await registerUserWorkout(planId, length, timestamp)

    res.status === 200 ?
      this.setState({ redirectToWorkout: true }) :
      console.log(new Error("Something broke during workout registration"))
  }

  render() {
    const { datePicked, redirectToWorkout } = this.state
    const { day, month, year, timestamp } = this.state.data

    if (timestamp) {
      console.log(dayofWeek(timestamp))
    }

    if (redirectToWorkout) {
      return <Redirect to='/Workout'/>
    }
    
    const startDate = `${month}/${day}/${year}`

    return (
      <BackGroundWrapper>
        <ProfileHeader userName={"Pick Start Date"}/>
        <CalendarComponent getData={this.getDate}/>
        { datePicked && (
          <DateConfirm 
            onNo={this.onNo}
            onYes={this.onYes}
            title={startDate} 
          />
        ) }
      </BackGroundWrapper>
    )
  }
}
