import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
function List({ a, navigation }) {
  const [tim, setTim] = useState("heart");
  const changle = () => setTim(tim === "heart" ? "hearto" : "heart");
  
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Details", { a: a });
      }}
    >
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require("../Image/b.png")} />
        <View flexDirection="row">
          <View>
            <Text style={{ marginRight: 10 }}>{a.name}</Text>
            <Text>$ {a.price}</Text>
          </View>
          <View style={{ marginTop: 10, marginLeft: 20 }}>
            <Icon
              name={tim}
              size={30}
              color="#900"
              style={styles.iconSearch}
              onPress={changle}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  star: {
    paddingLeft: 10,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  tinyLogo: {
    resizeMode: "stretch",
    height: 100,
    width: 150,
  },
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
});

export default List;
