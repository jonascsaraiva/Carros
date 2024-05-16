import React, { useContext, useState } from "react";
import { View,TextInput,Button, StyleSheet } from "react-native";
import { CarContext } from "./CarContext";

export default function CarInputComponente(){
    const { setCarros } = useContext(CarContext)
    const [marca,setMarca] = useState('') 
    const [modelo,setModelo] = useState('') 
    const [alert,setAlert] = useState(false) 
    
    const addCarro = () =>{
        if(marca && modelo){
            setCarros(prevCarros => [...prevCarros, {marca,modelo}])
            setMarca("")
            setModelo("")
        }else{
            setAlert(true)
        }
    }

    return(
        <View>
            <TextInput value={marca} onChangeText={setMarca} placeholder="Marca do Carro"/>
            <TextInput value={modelo} onChangeText={setModelo} placeholder="Modelo do Carro"/>
            <Button title='Adicionar' onPress={addCarro}/>
            {alert && <Text>Precisa digitar algo</Text>}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1
    }
})