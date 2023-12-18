/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation, ThemeProvider } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
import { fallbackMoviePoster, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '../api/moviedb';

var { width, height } = Dimensions.get('window');
const MovieScreen = () => {
  let movieName = "Ant-Man and the Wasp: Quantumania";
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  const { params: item } = useRoute();
  useEffect(() => {
    console.log("itemid: ",item.id);
    setLoading(true);
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);

  const getMovieDetails=async(id)=>{
    const data = await fetchMovieDetails(id);
    // console.log("movie details: ",data);
    if(data) setMovie(data);
    setLoading(false);
  };
  const getMovieCredits=async(id)=>{
    const data = await fetchMovieCredits(id);
    // console.log("got credits: ",data);
    if(data && data.cast) setCast(data.cast);
  };
  const getSimilarMovies=async(id)=>{
    const data = await fetchSimilarMovies(id);
    // console.log("similar movies: ",data);
    if(data && data.results) setSimilarMovies(data.results);
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ flex: 1, backgroundColor: '#131313' }}
    >
      {/* back button and movie poster */}
      <View style={styles.top}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
          <HeartIcon size="40" color={isFavourite ? "#9F9428" : "white"} />
        </TouchableOpacity>
      </View>

      {
        loading? (
          <Loading/>
        ) : 
        (
          <View>
            <Image
              // source={require("../assets/images/image1.jpg")}
              source={{uri: image500(movie?.poster_path) || fallbackMoviePoster}}
              style={styles.image} />
            <LinearGradient
              colors={['transparent', 'rgba(23,23,23,0.73)', 'rgba(23,23,23,1)']}
              style={{ width, height: height, position: 'absolute', bottom: 0 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }} />
          </View>
        )
      }
      

      {/* Movie details */}
      <View style={styles.title}>
        <Text style={styles.text}>{movie?.title}</Text>

        {/* status,release,runtime */}
       {
          movie?.id?
            <Text style={styles.text2}>
              {movie.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime} min
            </Text>
        : null
       }

        {/* genres */}
        <View style={styles.genre}>
          {
            movie?.genres?.map((genre,index)=>{
              let showDot = index+1 != movie.genres.length;
              return(
                <Text key={index} style={styles.text2}>
                  {genre?.name} {showDot? "• " : null}
                </Text>
              );
            })
          }
          {/* <Text style={styles.text2}>
            Action •
          </Text>
          <Text style={styles.text2}>
            Thrill •
          </Text>
          <Text style={styles.text2}>
            Comedy
          </Text> */}
        </View>

        {/* Description */}
        <Text style={styles.text3}>
          {
            movie?.overview
          }
        </Text>

      </View>
      {/* cast */}
      {cast.length>0 && <Cast cast={cast} navigation={navigation} />}

      {/* similar movies */}
      {similarMovies.length>0 && <MovieList title="Similar Movies" data={similarMovies} hideSeeAll={true} navigation={navigation} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  top: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1
  },
  backButton: {
    borderRadius: 14,
    padding: 5,
    backgroundColor: '#9F9428',
    width: 40
  },
  image: {
    justifyContent: 'center',
    width: width,
    height: height * 0.73,
  },
  title: {
    marginTop: -(height * 0.09),
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  text2: {
    color: 'grey',
    fontSize: 17.5,
    textAlign: 'center',
    marginTop: 7,
    fontWeight: '500'
  },
  text3: {
    color: 'grey',
    fontSize: 16,
    marginTop: 7,
    marginHorizontal: 14,
  },
  genre: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default MovieScreen;
