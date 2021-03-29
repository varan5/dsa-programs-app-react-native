import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const StringScreen = ({ navigation }) => {
  return (
    <View>
      <Button 
        title="Two Sum"
        onPress={() => navigation.navigate('Two')}
      />
      <Button 
        title="Valid Subsequence"
        onPress={() => navigation.navigate('Valid')}
      />
      <Button 
        title="Three Sum"
        onPress={() => navigation.navigate('Three')}
      />      
    </View>
  );
};

const styles = StyleSheet.create({

})

export default StringScreen