
import React  from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, } from 'react-native';
import CardQuote from './components/card/card.component';
import Hooks from './features/Hooks';


const notList = [
  { id: 1, task: 'Suco de gratidão + clorofila', background: 'https://image.freepik.com/free-vector/flat-night-sky-background_23-2148032671.jpg', theme:'https://www.blog.geekpoint.com.br/wp-content/uploads/2021/01/demon-slayer-theme-qb2.jpg' , theme2: 'https://i.pinimg.com/originals/d5/fb/ac/d5fbac0b0a3188eebdf5982b849f4ef6.png'},
  { id: 2, task: 'Aplaudir o por do sol', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevLH9vqcGBf4kYYXN1sEafET9xBaEjxUOMg&usqp=CAU', theme:'https://www.playstationlifestyle.net/assets/uploads/2018/08/castlevania-season-2-poster-1280x720.jpg', theme2: 'https://static.zerochan.net/Jujutsu.Kaisen.full.3146297.jpg'},
  { id: 3, task: '5 séries de namastê', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6OUSY2144YwI6mFLlxCKdyvkmKn6yLEoLA&usqp=CAU', theme:'https://lh3.googleusercontent.com/5HidXvWVqUcUQhZ_EYQj1osqSZDorHbBoGQVx6xCPklchVU-Ozf4gtoYc1aAjg06NoWKlSpFrmFc0VI7zOZrcdkV=w640-h400-e365-rj-sc0x00ffffff', theme2: 'https://i2.wp.com/wallur.com/wp-content/uploads/2016/12/code-geass-background-17.jpg?fit=1920%2C1080'},
]

export default function App() {

  
    return(

    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#c64242"
       />
        <FlatList 
          data={notList}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
          <CardQuote task={item.task} background={item.background} theme={item.theme} theme2={item.theme2} />
        }
        >
        </FlatList> 
        
    </SafeAreaView>


    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF5F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});