import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Program from "../../../components/Program";
import ThreeSum from "../../../data/array/ThreeSum.json";

const ThreeSumScreen = () => {
  return (
    <View>
      {ThreeSum.map((value) => {
        return <Program
          title={value.title}
          program={value.program}
          theory={value.theory}
        />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ThreeSumScreen;
