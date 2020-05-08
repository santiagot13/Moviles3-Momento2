import React from 'react';
import { StyleSheet, View} from 'react-native';

export default class Separator extends React.Component {
    render(){
        return (
            <View style={styles.separator} />
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: '0.5%',
        borderTopWidth: 2,
        borderColor: 'tomato',
    },
});