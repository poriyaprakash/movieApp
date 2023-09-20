import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');
const Loading=()=>{
    return (
        <View style={styles.container}>
            <Progress.CircleSnail thickness={10} size={150} color="#9F9428" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height, width, 
        position: 'absolute', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
});
export default Loading;
