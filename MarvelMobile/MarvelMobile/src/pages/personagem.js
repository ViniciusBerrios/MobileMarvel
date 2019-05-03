import React, {Component} from "react";

import{ Text, Image, StyleSheet, View, FlatList} from "react-native";

import api from "../services/api";

class personagem extends Component{ 

    render(){
        return(
            <Text style={styles.titulo}>{"Personagens".toUpperCase()}</Text>
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: "black",
        marginLeft: 90,
        marginTop: 20
    }
});

export default personagem;