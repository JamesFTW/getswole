
import React, { PureComponent } from 'react'
import ProfileHeader            from '../components/profileHeader.js'
import CalendarComponent        from '../components/calendar.js'
import BackGroundWrapper        from '../components/backGroundWrapper.js'
import DateConfirm              from '../components/dateConfirm'

export default class SelectDateScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      datePicked: false,
      data: {}
    }
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

  onYes() {
    console.log('yes')
  }

  render() {
    const { datePicked } = this.state
    const { day, month, year } = this.state.data

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
