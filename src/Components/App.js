/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [showText, setShowText] = useState(null);
  function onClick() {
    setShowText(!showText);
  }
  //const year2038 = new Date(Date.UTC(2038, 0, 19, 3, 14, 7));
  var today = new Date();
  var BigDay = new Date('January 18, 2038');
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  var timeLeft = BigDay.getTime() - today.getTime();
  var e_daysLeft = timeLeft / millisecondsPerDay;

  var daysLeft = Math.floor(e_daysLeft);

  var yearsLeft = 0;
  if (daysLeft >= 365) {
    yearsLeft = Math.floor(daysLeft / 365);
    daysLeft = daysLeft % 365;
    if (yearsLeft >= 2) {
      var showYears = yearsLeft + ' years';
    } else {
      var showYears = yearsLeft + ' year';
    }
  }

  var monthsLeft = 0;
  if (daysLeft > 30) {
    monthsLeft = Math.floor(daysLeft / 30);
    daysLeft = daysLeft % 30;
    if (monthsLeft >= 2) {
      var showMonths = monthsLeft + ' months';
    } else {
      var showMonths = monthsLeft + ' month';
    }
  }

  var weeksLeft = 0;
  if (daysLeft > 7) {
    weeksLeft = Math.floor(daysLeft / 7);
    daysLeft = daysLeft % 7;
    if (weeksLeft >= 2) {
      var showWeeks = weeksLeft + ' weeks';
    } else {
      var showWeeks = weeksLeft + ' week';
    }
  }
  if (daysLeft >= 2) {
    var showDays = daysLeft + ' days';
  } else {
    var showDays = daysLeft + ' day';
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.loginScreenButton} onPress={onClick}>
        <Text style={styles.loginText}>Countdown</Text>
      </TouchableOpacity>
      <Text style={styles.staticText}>The world will end in</Text>
      <Text style={styles.displayText}>
        {showText
          ? showYears + ' ' + showMonths + ' ' + showWeeks + ' ' + showDays
          : null}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue', //  <- Debug styles
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 300,
    marginBottom: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 50,
    borderWidth: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  staticText: {
    fontSize: 40,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    // borderWidth: 1, //  <- Debug styles
    // backgroundColor: 'red', //  <- Debug styles
  },
  displayText: {
    fontSize: 25,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 80,
    paddingTop: 15,
    paddingLeft: 5,
    paddingRight: 5,
    // borderWidth: 1, //  <- Debug styles
    // backgroundColor: 'yellow', //  <- Debug styles
  },
});

export default App;
