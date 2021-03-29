import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Program from "../../../components/Program";
import ValidateSubsequence from "../../../data/array/ValidateSubsequence.json";

const ValidateSubsequenceScreen = () => {
  return (
    <View>
      {ValidateSubsequence.map((value) => {
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

export default ValidateSubsequenceScreen;
