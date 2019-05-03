import React, { Component } from "react";

import { Text, Image, StyleSheet, View } from "react-native";

class perfil extends Component {
    render(){
        return(
            <View>

            <Text style={styles.titulo2}>{"Perfil do Desenvolvedor".toUpperCase()}</Text>

            <View>
            <Image
            source={require("../assets/img/perfil.jpg")}
            style={styles.perfilFoto}
            />
            </View>

            <Text style={styles.nome}>{"Vinícius Berrios Rodriguez Almeida"}</Text>

            <Text style={styles.idade}>{"18 anos"}</Text>

            <Text style={styles.ensino}>{"Ensino Médio Concluído"}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo2: {
        fontSize: 25,
        color: "black",
        marginTop: 20,
        marginLeft: 40
    },
    perfilFoto: {
        height: 200,
        width: 150,
        marginLeft: 130,
        marginTop: 30
    },
    nome: {
        fontSize: 17,
        marginTop: 10,
        marginLeft: 70,
        color: "black"
    },
    idade: {
        fontSize: 17,
        marginLeft: 170,
        color: "black",
        marginTop: 10
    },
    ensino: {
        fontSize: 17,
        marginTop: 10,
        marginLeft: 115,
        color: "black"
    }
});

export default perfil;