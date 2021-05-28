import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Paragraph, ProgressBar, Colors } from 'react-native-paper';


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EBF5F7',
        margin: 12,
        borderRadius: 20,
        flex: 4,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        backgroundColor: '#FAE8E0',
    },
    cover: {
        height: 220,
    },
});

const CardQuote = ({task, background}) => {

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={background} />
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions style={styles.actions}> 
            <Button
                    icon="play"
                    color="white"
                    labelStyle={{fontSize: 48}}
                    mode="contained"
                    onPress={() => console.log('Pressed')}>
            </Button>     
                <Paragraph> {task} </Paragraph>
                
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;