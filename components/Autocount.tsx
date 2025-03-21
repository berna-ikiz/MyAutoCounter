import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Autocount = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let interval: any;
    if (start && !pause) {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, pause]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Auto Count : {count}</Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            setStart(true);
            setPause(false);
          }}
          style={styles.button}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setPause(true);
            setStart(false);
          }}
          style={styles.button}>
          <Text style={styles.text}>Pause</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setCount(0);
            setStart(true);
            setPause(false);
          }}
          style={styles.button}>
          <Text style={styles.text}>Restart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Autocount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: 'indigo',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
