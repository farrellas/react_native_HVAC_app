import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Task Checklist */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>To be completed</Text>

        <View style={styles.items}>
          {/* Tasks start here */}
          <Task text={'Task1'}/>
          <Task text={'Task2'}/>
          <Task text={'Task3'}/>
          <Task text={'Task4'}/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 25,
  },
});
