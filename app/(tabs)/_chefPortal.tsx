import { Image, StyleSheet, Platform, Text, View, SectionList, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { SetStateAction, useState } from 'react';


export default function chefPortal() {
   
    const [selectedLanguage, setSelectedLanguage] = useState<string>('java');
    return (
        <View style={styles.container}>
          <Text>Welcome to the Restuarent Menu</Text>
    
          <View>
            <Text>Welcome Chef!!</Text>
            <Text>Enter Dish Name:</Text>
            <TextInput style={styles.input}
            placeholderTextColor={"#888"}
            placeholder='Dish Name'/>
            <Text>Enter the Description:</Text>
            <TextInput style={styles.input}
            placeholderTextColor={"#888"}placeholder='Description'/>
            <Text>Select the Course:</Text>
           
            <Text>Enter the Price</Text>
            <TextInput style={styles.input}
            placeholderTextColor={"#888"} placeholder='Price'/> 
        
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    container:{
        flex: 1,
        backgroundColor: '#fff', 
        alignItems: 'center', 
        justifyContent: 'center'
      },   input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        width: '80%',
      },
      label:{
        fontSize: 18,
        marginBottom: 10,
      },
      picker: {
        height: 50,
        width:200, 
      }
    });
    