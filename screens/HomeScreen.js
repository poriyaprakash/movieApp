/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {
//   Bars3CenterLeftIcon,
//   MagnifyingGlassIcon,
// } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/loading';
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '../api/moviedb';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome'

const HomeScreen = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    // console.log('get trending movies: ',data);
    if (data && data.results) setTrending(data.results);
    setLoading(false);
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    // console.log('get upcoming movies: ',data);
    if (data && data.results) setUpcoming(data.results);
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    // console.log('get top rated movies: ',data);
    if (data && data.results) setTopRated(data.results);
    setLoading(false);
  };

  const nav = () => {
    return navigation.navigate('Search');
  };
  return (
    <View style={styles.Background}>
      <View style={styles.header}>
        {/* <Bars3CenterLeftIcon size="33" strokeWidth={2} color="white" /> */}
        <Text style={styles.logo}>
          <Text style={{color: '#9F9428'}}>M</Text>ovies
        </Text>
        {/* <TouchableOpacity onPress={nav}>
          <MagnifyingGlassIcon size="33" strokeWidth={2} color="white" />
        </TouchableOpacity> */}
        {<Icon name={'film'} size={20} color={'red'} />}
      </View>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}>
          {/* trending movies carousel */}
          {trending.length > 0 && <TrendingMovies data={trending} />}

          {/* upcoming movies row */}
          <MovieList title="Upcoming" data={upcoming} />

          {/* top rated movies row */}
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Background: {
    backgroundColor: '#131313',
    height: '100%',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 33,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
