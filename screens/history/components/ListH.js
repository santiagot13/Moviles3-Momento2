import React, {Component} from 'react';
import {StyleSheet, FlatList } from 'react-native';
import {ListItem, List} from 'react-native-elements'

export default class ListH extends React.Component{
  //sobre escribimos el constructor
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      data: [],
    }
  }

  //Función que se ejecutra cuando los componentes han sido cargados en la app
  componentDidMount(){
    this.getUserRandom();
  }

  //Función encargada de hacer la petición al servidor y obtener los datos
  getUserRandom = () =>{
    //Se coloca aquí la url para poder hacer refresh a la lista
    const url = 'https://randomuser.me/api/?seed=1&page=1&result=20';
    //la add identifica que el proceso de descarfga inicia
    this.setState({loading: true})
    
    //"fetch" permite realizar la petición al servidor y obtine los datos
    fetch (url)
    //el resultado se coloca como objeto json
    .then (res => res.json())
    
    .then (res => {
      this.setState({
        data: res.results,//"results" es el nombre de la lista de la API
        //identifica que la descarga ha finalizado
        loadind: false,
      })
    });
  };

  render (){
    return(
      <List>
        {/* El FlatList se comporta como un foreach */}
        <FlatList data={this.state.data} renderItem ={ ({item}) => (
          //representación de cada elemento de la lista
          <ListItem  roundAvatar title={this.name.first} subtitile={item.email} avatar={ {uri:item.picture.thumbnail} }/>
        )}/>
      </List>
    )
  }   
}

const styles = StyleSheet.create({
  container: {//global container style
    width: '100%',
    height: '80%',
    flexDirection: 'column',
    //backgroundColor: '#EEFBFE',
    alignItems: 'center',
    justifyContent: 'center',
   },
});