import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph, } from 'react-native-paper';


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#F8E7E2",
        margin: 12,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
        marginBottom: 40
    },
    content: {
        backgroundColor: '#A72B1C',
    },
    cover: {
        height: 300,
    },
    button: {
        alignItems: "center",
        flex: 1,
        borderRadius: 200,
        fontSize: 72

    },
    text: {
        textAlign: "center",
        flex: 1,
        margin: 12,
        fontWeight: 'bold'
    },
    barra: {
        height: 12,
        width: '100%',
        backgroundColor: '#925154',
        borderRadius: 5,

    }
});

const CardQuote = ({ task, background, theme, theme2 }) => {

    const [getPlay, setPlay] = useState('play');
    const alterarEstado = () => {
        if (getPlay == "play") {
            setPlay("pause")


        } else {
            setPlay('play')
        }
    }

    const [getTema, setTema] = useState(background);
    const alterarTema = () => {
        if (getTema == background) {
            setTema(theme)
        } else {
            if (getTema == theme) {
                setTema(theme2)
            } else
                setTema(background)
        }
    }

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={getTema}>
            </Card.Cover>
            <Button
                style={styles.button}
                icon="share"
                color="#F8E7E2"
                labelStyle={{ fontSize: 72 }}
                mode="contained"
                onPress={alterarTema}>
            </Button>
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
                <Button
                    style={styles.button}
                    icon={getPlay}
                    color="#F8E7E2"
                    labelStyle={{ fontSize: 72 }}
                    mode="contained"
                    onPress={alterarEstado}>
                </Button>
            </Card.Actions>
            <Paragraph style={styles.text}> {task} </Paragraph>
            <View style={styles.barra} ></View>
        </Card>
    )
}

export default CardQuote;
