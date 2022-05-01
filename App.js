import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import WelcomScreen from "./app/screens/WelcomScreen";

export default function App() {
  console.log(Dimensions.get("screen"));

  return <WelcomScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
