import { Image, StyleSheet, Platform, Text, View, SectionList, TextInput, Button,FlatList, Alert, ImageBackground, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SetStateAction, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

  /**
   * Sources used: 
   * https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build 
   * https://unsplash.com/photos/green-teapot-pouring-red-liquid-to-white-teacup-closeup-photography-5Vnd6GXbNvA 
   * https://www.npmjs.com/package/react-scroll-parallax 
   * https://www.npmjs.com/package/@react-native-picker/picker 
   * https://reactnative.dev/docs/images  
   * 
   */
  const items = [
    { label: 'Main Dish', value: 'main dish', image: require('@/assets/images/kota.jpg') },
    { label: 'Dessert', value: 'dessert', image: require('@/assets/images/dessert.jpg') },
    { label: 'Starters', value: 'starters', image: require('@/assets/images/lemon.jpg') },
  ];

  interface Submission {
    item: string;
    inputs: string[];
  }

  const App = () => {
    const [selectedItem, setSelectedItem] = useState<string>(items[0].value);
    const [inputs, setInputs] = useState<string[]>(['', '', '']);
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const handleInputChange = (text: string, index: number) => {
      const newInputs = [...inputs];
      newInputs[index] = text;
      setInputs(newInputs);
    };
    
    const handleSubmit = () => {
      if (inputs.some(input => input.trim() === '')) {
        Alert.alert('Error', 'Please fill in all fields before adding an item.');
        return;
      }
      setSubmissions(prevSubmissions => [
        ...prevSubmissions,
        { item: selectedItem, inputs }
      ]);
  setInputs(['', '', '']); // Clear inputs after submission
};
const selectedItemData = items.find(item => item.value === selectedItem);
      
const renderItem = ({ item }: { item: Submission }) => (
  <View style={styles.displayContainer}>
    <Text style={styles.titleContainer}>Menu Course: {item.item}</Text>
    <Image source={items.find(i => i.value === item.item)?.image} style={styles.dishImage} />
    {item.inputs.map((input, index) => (
      <Text key={index} style={styles.displayText}>{input}</Text>
    ))}
  </View>
);
  
   
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#99ccff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/kota.jpg')}
          style={styles.logoStyle}
        />
      }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to Voyi's!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.containered}>
        <ThemedText type='subtitle'>Restuarent Menu</ThemedText>
      </ThemedView>
       
        <View style={styles.container}>
          <ImageBackground source={require('@/assets/images/unplash.jpg')} style={styles.image}>
            
          
        <Text style={styles.label}>Select the Menu Course:</Text>
        <Picker
          selectedValue={selectedItem}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
        >
          {items.map((item) => (
            <Picker.Item key={item.value} label={item.label} value={item.value} />
          ))}
        </Picker>
        <Text style={styles.label}>Enter the Dish Name:</Text>
      <TextInput
        style={styles.input}
        value={inputs[0]}
        onChangeText={(text) => handleInputChange(text, 0)}
      />

      <Text style={styles.label}>Enter the Description:</Text>
      <TextInput
        style={styles.input}
        value={inputs[1]}
        onChangeText={(text) => handleInputChange(text, 1)}
      />

      <Text style={styles.label}>Enter the Price:</Text>
      <TextInput
        style={styles.input}
        value={inputs[2]}
        onChangeText={(text) => handleInputChange(text, 2)}
      />

      
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.text}>Add Menu</Text>
            </Pressable>
     
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">Total Menu: {submissions.length}</ThemedText>
        
      </ThemedView>

      <FlatList
        data={submissions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.displayContainer}
      />
      </ImageBackground>
      </View>

   
  </ParallaxScrollView>
      );
};
const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      fontSize: 28, 
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
      marginTop:8,
    },
    container:{
        flex: 1,
        backgroundColor: '#99ccff', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        width: 'auto',
        marginLeft: -20,
        marginRight: -20,
        flexDirection: 'column'
      },   
      input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        width: 'auto',
        marginLeft: 4,
      },
      label:{
        fontSize: 30,
        marginBottom: 10,
        alignItems: 'flex-start',
        marginLeft: 1,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#000000a0'
      },
      picker: {
        height: 100,
        width:200, 
        alignContent: 'center',
        alignSelf: 'center',
        textShadowColor: 'blue',
        borderBlockColor: 'black',
        borderCurve: 'circular',
        borderWidth: 1,
        borderRadius: 5,
        
      },
      displayContainer: {
        marginTop: 2,
        padding: 10,
        borderColor: '#0000FF',
        borderWidth: 1,
        borderRadius: 5,
        width: 'auto',
        backgroundColor: '#87CEFA'
      },
      displayText: {
        fontSize: 25,
        textAlign: 'center',

      },
      itemText: {
        fontSize: 20,
        paddingVertical: 5,
        textAlign: 'center'
      },
      totalItems: {
        fontSize: 30,
        marginVertical: 20,
        textAlign: 'center',
        textDecorationStyle: 'solid'
      },
      item: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 5,
      },
      containered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: 'white'
      },
      logoStyle: {
        width: 'auto',
        height: '100%',
        resizeMode: 'contain',
      },
      dishImage: {
        width: 'auto', 
        height: 300, 
        marginTop: 10, 
        alignItems: 'center'
      }, image: {
        /* @info Make the image fill the containing view */
        flex: 1,
        /* @info Scale up the image to fill the container, preserving aspect ratio */
        resizeMode: 'cover',
        justifyContent: 'center',
        width: 'auto'
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#3187A',
        marginTop: 10,
        marginLeft: 100,
        width: 150,
        height: 100,
        alignContent: 'center'
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        alignContent: 'center'
      },
    });
    export default App;