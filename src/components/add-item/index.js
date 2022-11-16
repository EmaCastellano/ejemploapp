import React from "react";
import { View, TextInput, Button } from 'react-native';
import { styles } from "./styles";

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        value={task}
        placeholder="Ingresa una tarea"
        onChangeText={ onHandleChange } 
        />
        <Button 
        disabled={!task}
        title='Añadir' 
        color='blue' 
        onPress={onHandleTask} />
        </View>
    )
}

export default AddItem;