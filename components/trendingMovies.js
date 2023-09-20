import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { image500 } from '../api/moviedb';

var { width, height } = Dimensions.get('window');

const TrendingMovies = ({ data }) => {
    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Movie', item);
    }
    return (
        <View style={{marginBottom:10}}>
            <Text style={styles.font}>Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.5}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: 'flex', alignItems: 'center' }}
            />
        </View>
    );
}

const MovieCard = ({ item,handleClick }) => {   
    return (
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
            <Image
                // source={require('../assets/images/download.jpeg')}
                source={{uri: image500(item.poster_path)}}
                style={{
                    width: width * 0.6,
                    height: height * 0.4,
                    borderRadius: 28,
                }}
            />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    font: {
        color: 'white',
        fontSize: 22,
        margin: 14,
        marginBottom:20
    }
});

export default TrendingMovies;
