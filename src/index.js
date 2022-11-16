import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity  } from 'react-native';
import { styles	} from './styles';
import { AddItem } from './components/index'
import { ListItem } from './components/index'
import { TaskItem } from './components/index'

export default function App() {

  const [task, setTask ] = useState('');
  const [taskList, setTaskList ] = useState([]);
  const [modalVisible, setModalVisible ] = useState(false);
  const [selectedTask, setSelectedTask ] = useState(null);
  
  
  const onHandleTask = () => {
    setTaskList((prevTaskList) =>[
       {id: Math.random().toString(), value: task}, ...prevTaskList
    ]);
    setTask('');
  }

  const onHandleSelected = (item) => { 
    setSelectedTask(item);
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => (
   <TaskItem item={item} onHandleSelected={onHandleSelected} />
  )

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  }

  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
    setModalVisible(!modalVisible);
  }

  const onHandleChange = (text) => setTask(text);
  

  return (
    <View style={styles.container}>
      <AddItem  task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Lista de Tareas</Text>
      </View>
      <FlatList 
        style={styles.listContainer}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de Tareas</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailText}>¿Estás seguro que deseas eliminar esta tarea?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancelar'
              color='red'
              onPress={onHandleCancel}
            />
            <Button 
              title='Eliminar'
              color='green'
              onPress={onHandleDeleteItem}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
  
}