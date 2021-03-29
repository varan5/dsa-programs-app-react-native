import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ListScreen = ({ navigation }) => {
  return (
    <View>
      <Button 
        title="Array"
        onPress={() => navigation.navigate('Array')}
      />
      <Button 
        title="String"
        onPress={() => navigation.navigate('String')}
      />
      <Button 
        title="Linked List"
        onPress={() => navigation.navigate('Linked')}
      />      
    </View>
  );
};

const styles = StyleSheet.create({

})

export default ListScreen