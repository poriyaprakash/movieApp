import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import Loading from '../components/loading';
import { fallbackMoviePoster, fetchSearchData, image185 } from '../api/moviedb';
import { debounce } from 'lodash';

var { height, width } = Dimensions.get('window');
const SearchScreen = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (value) => {
    console.log('value: ', value);
    if (value && value.length > 2) {
      setLoading(true);
      fetchSearchData({
        query: value, 
        include_adult: 'false', 
        language: 'en-US', 
        page: '1'
      }).then(data=>{
        setLoading(false)
        // console.log('got movies: ',data);
        if(data && data.results) setResults(data.results)
      })
    }
    else
    {
      setLoading(false)
      setResults([])
    }
  }
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), [])
  return (
    <View style={{ backgroundColor: "#131313", flex: 1 }}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder='Search Movie'
          placeholderTextColor={"lightgray"}
          style={styles.search}
          onChangeText={handleTextDebounce}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
          <XMarkIcon size="38" color={"white"} style={styles.close} />
        </TouchableOpacity>
      </View>

      {/* results */}
      {
        loading ? (
          <Loading />
        ) :
          (
            results.length > 0 ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
              >
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 17 }}>Results ({results.length})</Text>
                <View style={styles.result}>
                  {
                    results.map((item, index) => {
                      return (
                        <TouchableWithoutFeedback
                          key={index}
                          onPress={() => navigation.push("Movie", item)}
                        >
                          <View style={{ marginVertical: 10 }}>
                            <Image 
                            // source={require("../assets/images/image1.jpg")}
                            source={{uri: image185(item?.poster_path) || fallbackMoviePoster}}
                              style={{ width: width * 0.44, height: height * 0.3, borderRadius: 17 }} />
                            <Text style={{ fontSize: 16, color: 'white' }}>
                              {
                                item?.title.length > 20 ? item?.title.slice(0, 20) + '...' : item?.title
                              }
                            </Text>
                          </View>
                        </TouchableWithoutFeedback>
                      )
                    })
                  }
                </View>
              </ScrollView>
            )
              : (
                <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
                  <Image source={require("../assets/images/movieTime.png")}
                    style={{ width: width * 0.59, height: height * 0.28, opacity: 0.75 }} />
                </View>
              )
          )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 18,
    borderRadius: 40,
    paddingHorizontal: 8,
    paddingVertical: 4,
    paddingLeft: 12
  },
  search: {
    fontSize: 20,
    color: 'white',
    width: "80%"
  },
  close: {
    backgroundColor: 'grey',
    borderRadius: 40,
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
});

export default SearchScreen;
