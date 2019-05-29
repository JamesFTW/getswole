import React, { Component }   from 'react'
import SettingsTitle          from '../components/settingsTitle'
import StatsScreenWrapper     from '../components/statsScreenWrapper'
import StatsBodyPartContainer from '../components/statsBodyPartContainer'
import StatsExerciseContiner  from '../components/statsExerciseContainer'

export default class StatsScreen extends Component {
  render() {
    return (
      <StatsScreenWrapper>
        <SettingsTitle title={'Body Part'} />
        <StatsBodyPartContainer>
          <StatsExerciseContiner/>
        </StatsBodyPartContainer>
      </StatsScreenWrapper>
    )
  }
}