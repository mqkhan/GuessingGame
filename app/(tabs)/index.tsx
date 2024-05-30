import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";

export default function App() {
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function handleGuess() {
    const numericGuess = parseFloat(guess);
    if (isNaN(numericGuess)) {
      Alert.alert("Invalid input", "Please enter a numeric number.");
      return;
    }

    if (numericGuess < targetNumber) {
      setFeedback("Too low!");
    } else if (numericGuess > targetNumber) {
      setFeedback("Too high!");
    } else {
      setFeedback("Correct! You guessed the number.");
    }
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Guessing Game</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter your guess"
          value={guess}
          onChangeText={setGuess}
        />
        <View style={styles.button}>
          <Button title="Submit Guess" onPress={handleGuess} />
        </View>

        {feedback !== "" && <Text style={styles.feedback}>{feedback}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  container: {
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: "100%",
  },
  button: {
    marginTop: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
  feedback: {
    marginTop: 16,
    fontSize: 18,
    textAlign: "center",
  },
});
