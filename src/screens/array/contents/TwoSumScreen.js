import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Program from "../../../components/Program";
import TwoSum from "../../../data/array/TwoSum.json";

const TwoSumScreen = () => {
  return (
    <View>
      {TwoSum.map((value) => {
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

export default TwoSumScreen;
