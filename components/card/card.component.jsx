import React from 'react';
import { StyleSheet, task } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';


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

const tasks = StyleSheet.create({

})

const CardQuote = ({task, background}) => {

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={background} />
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
                <Paragraph>{task}</Paragraph>
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;