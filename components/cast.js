/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { fallbackPersonImage, image185 } from '../api/moviedb';

var {width,height}=Dimensions.get('window');
const Cast=({cast,navigation})=>{
    let personName="Keanu Reevs";
    let characterName="John Wick";
  return (
    <View style={{marginVertical:20}}> 
        <Text style={styles.title}>Top Cast</Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:10}}
        >
            {
                cast && cast.map((person,index)=>{
                    return(
                        <TouchableOpacity
                        key={index}
                        style={{marginHorizontal:5}}
                        onPress={()=>navigation.navigate('Person',person)}
                        >
                            <Image 
                                // source={require("../assets/images/john.jpg")} 
                                source={{uri: image185(person?.profile_path) || fallbackPersonImage}}
                                style={{width:110,height:110,borderRadius:100}}
                            />
                            <Text style={styles.text}>
                                {
                                    person?.character.length>10 ? person?.character.slice(0,10)+'...' : person?.character
                                }
                            </Text>
                            <Text style={[styles.text,{color:'grey'}]}>
                                {
                                    person?.original_name.length>10 ? person?.original_name.slice(0,10)+'...' : person?.original_name
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
    color:'white',
    fontSize:22,
    marginHorizontal:14,
    marginBottom:16
  },
  text:{
    color:'white',
    fontSize:15,
    marginTop:5,
    textAlign:'center'
  },
});

export default Cast;
