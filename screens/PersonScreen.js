/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
import {useRoute} from '@react-navigation/native';
import {
  fallbackPersonImage,
  fetchPersonDetails,
  fetchPersonMovies,
  image342,
} from '../api/moviedb';

var {width, height} = Dimensions.get('window');
const PersonScreen = ({navigation}) => {
  const {params: item} = useRoute();
  const [isFavourite, setIsFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // console.log('person: ',item);
    getPersonDetails(item.id);
    getPersonMovies(item.id);
  }, [item]);

  const getPersonDetails = async id => {
    const data = await fetchPersonDetails(id);
    console.log('got person details: ', data);
    if (data) setPerson(data);
    setLoading(false);
  };
  const getPersonMovies = async id => {
    const data = await fetchPersonMovies(id);
    // console.log('got person movies: ',data);
    if (data && data.cast) setPersonMovies(data.cast);
    // setLoading(false);
  };

  return (
    <ScrollView style={styles.back} contentContainerStyle={{paddingBottom: 20}}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
          <HeartIcon size="40" color={isFavourite ? 'red' : 'white'} />
        </TouchableOpacity>
      </View>

      {/* person details */}
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.image1}>
              <Image
                // source={require("../assets/images/john.jpg")}
                source={{
                  uri: image342(person?.profile_path) || fallbackPersonImage,
                }}
                style={{height: height * 0.4, width: width * 0.9}}
              />
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.text}> {person?.name} </Text>
            <Text style={styles.text1}>{person?.place_of_birth || 'N/A'}</Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 18,
              paddingHorizontal: 6,
              paddingVertical: 15,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#6F7676',
              borderRadius: 80,
            }}>
            <View
              style={{
                paddingHorizontal: 8,
                borderRightWidth: 2,
                borderRightColor: 'white',
              }}>
              <Text style={styles.text2}>Gender</Text>
              <Text style={styles.text3}>
                {person?.gender == 1 ? 'Female' : 'Male'}
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 8,
                borderRightWidth: 2,
                borderRightColor: 'white',
              }}>
              <Text style={styles.text2}>Birthday</Text>
              <Text style={styles.text3}>{person?.birthday}</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 8,
                borderRightWidth: 2,
                borderRightColor: 'white',
              }}>
              <Text style={styles.text2}>Known for</Text>
              <Text style={styles.text3}>{person?.known_for_department}</Text>
            </View>
            <View style={{paddingHorizontal: 8}}>
              <Text style={styles.text2}>Popularity</Text>
              <Text style={styles.text3}>
                {person?.popularity?.toFixed(2)}%
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 20, marginHorizontal: 14}}>
            <Text style={{color: 'white', fontSize: 30}}>Biography</Text>
            <Text style={{color: 'grey', marginTop: 8}}>
              {person?.biography || 'N/A'}
            </Text>
          </View>

          {/* movies */}
          <MovieList data={personMovies} title={'Movies'} hideSeeAll={true} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#131313',
  },
  top: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  backButton: {
    borderRadius: 14,
    padding: 5,
    backgroundColor: '#9F9428',
    width: 40,
  },
  image1: {
    borderWidth: 2,
    borderColor: 'grey',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 400,
    height: 300,
    width: 300,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  text3: {
    color: '#F5F5ED',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default PersonScreen;
