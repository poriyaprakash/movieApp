import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import { fallbackMoviePoster, image185 } from '../api/moviedb';

var {height,width} = Dimensions.get('window');
const MovieList = ({title,data,hideSeeAll}) => {
    let movieName="Ant-Man and the Wasp: Quantumania";
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.font}>{title}</Text>
                {
                    !hideSeeAll && (
                        <TouchableOpacity>
                            <Text style={styles.font1}>See All</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:10}}
            >
                {
                    data.map((item,index)=>{
                        return(
                            <TouchableOpacity
                            key={index}
                            onPress={()=>navigation.push('Movie',item)}
                            >
                                <View style={{marginHorizontal:9,marginBottom:8}}>
                                    <Image 
                                    // source={require("../assets/images/image1.jpg")}
                                    source={{uri: image185(item.poster_path) || fallbackMoviePoster}}
                                    style={{
                                        width:width*0.4,
                                        height:height*0.3,
                                        borderRadius:28,
                                    }}
                                    />
                                </View>
                                <Text style={{color:'white',textAlign:'center'}}>
                                    {
                                        item.title.length>15 ? item.title.slice(0,15)+'...' : item.title
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        margin:15,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    font:{
        color:'white',
        fontSize:22,
    },
    font1:{
        color:'#9F9428',
        fontSize:19,
    },
});

export default MovieList;
