/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: '#9F9428',
    borderWidth: 0.4,
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 8,
    paddingLeft: 22,
    margin: 10,
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9F9428',
  },
  name: {
    fontSize: 16.3,
  },
  box: {
    borderWidth: 0.5,
    borderColor: 'white',
    marginHorizontal: 22,
    marginVertical: 4,
    backgroundColor: '#D8D8D8',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  list: {
    marginVertical: 9,
    fontSize: 22,
    color: 'black',
  },
});

export default styles;
