import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Paragraph } from 'react-native-paper';


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EBF5F7',
        margin: 10,
        borderRadius: 20,
        flex: 1,
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
                <Paragraph>{task}</Paragraph>
                <Button
                    icon="play"
                    color="black"
                    labelStyle={{fontSize: 24}}
                />
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;