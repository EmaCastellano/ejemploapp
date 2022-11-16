import React from "react";
import { Modal, Text, View, Button } from 'react-native';
import { styles } from './styles';

const ModalItem = ({onHandleCancel, onHandleDeleteItem, modalVisible, selectedTask }) => {
    
    return (
        <Modal visible={modalVisible} animationType='slide' >
            <View stle={styles.modalContainer} >
                <Text style={styles.modalTitle} >Listado de Tareas</Text>
                    <View style={styles.modalDetailContainer}>
                        <Text style={styles.modalDetailText} >¿Estás seguro que quieres eliminar esta tarea?</Text>
                        <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                    </View>
                
                <View style={styles.modalButtonContainer}>
                    
                    <Button title='Cancelar' color='red' onPress={onHandleCancel}/>
                    
                    <Button title= 'Eliminar' color='green' onPress={onHandleDeleteItem} />
                
                </View>

            </View>
        </Modal>
    )
} 

export default ModalItem;
