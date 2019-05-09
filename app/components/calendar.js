
import React, { Component } from 'react'
import { Calendar } from 'react-native-calendars'

import {
  StyleSheet
} from 'react-native'

const customTheme = {
  textSectionTitleColor: '#b6c1cd',
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#00adf5',
  dayTextColor: '#2d4150',
  textDayFontFamily: 'Helvetica-Light',
  textMonthFontFamily: 'Helvetica-Light',
  textDayHeaderFontFamily: 'Helvetica-Light',
  textMonthFontWeight: 'bold',
  textDayFontSize: 20,
  textMonthFontSize: 20,
  textDayHeaderFontSize: 14
}

export default class CalendarComponent extends Component {
  render() {
    const { getData } = this.props
    return (
      <Calendar
        style={styles.customStyle}
        theme={customTheme}
        onDayPress={(day) => { getData(day)}}
        onDayLongPress={(day) => { console.log('selected day', day) }}
        monthFormat={'MMMM yyyy'}
        onMonthChange={(month) => { console.log('month changed', month) }}
        hideExtraDays={true}
        firstDay={1}
        onPressArrowLeft={substractMonth => substractMonth()}
        onPressArrowRight={addMonth => addMonth()}
      />
    )
  }
}


const styles = StyleSheet.create({
  customStyle: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 25,
    height: '65%',
    borderRadius: 10,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#5D4B89',
    shadowOpacity: .10,
  }
})