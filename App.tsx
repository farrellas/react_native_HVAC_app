import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Keyboard } from 'react-native';

import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    (setTaskList as any)([...taskList, task]);
    setTask("");
  };

  const completeTask = (i: number) => {
    let listCopy: string[] = [...taskList];
    listCopy.splice(i, 1);
    (setTaskList as any)(listCopy);
  }
  
  return (
    <View style={styles.container}>

      {/* Task Checklist */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>To be completed</Text>

        <View style={styles.items}>
          {/* Tasks start here */}
          {
            taskList.map((item: string, i: number) => {
              return (
              <TouchableOpacity key={i} onPress={() => completeTask(i)}>
                <Task text={item} />
              </TouchableOpacity>
              )
            })
          }

        </View>
      </View>

      {/* Write task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}  />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 25,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {

  },
});
