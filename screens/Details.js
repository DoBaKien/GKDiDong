import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Details({ a }) {
    console.log(a);
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image style={styles.tinyLogo} source={require("../Image/b.png")} />
      </View>
      <View style={styles.body}>
        <View style={{ marginTop: 50, marginLeft: 30 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Calories :344 kcl
          </Text>

          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
            Angus bugger topped with lettuce, tomato and ShackSource
          </Text>
          <View flexDirection="row">
            <Text style={{ fontSize: 25, fontWeight: "bold", marginRight: 30 }}>
              Quantity
            </Text>
            <Icon
              name="plus-circle"
              size={30}
              color="#900"
              style={styles.iconSearch}
            />
            <View style={{ width: 100, height: 100 }}>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 25,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                0
              </Text>
            </View>
            <Icon
              name="minus-circle"
              size={30}
              color="#900"
              style={styles.iconSearch}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Press Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <View flexDirection="row">
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Add to cart
              </Text>
              <View
                style={{
                  width: 2,
                  height: 30,
                  backgroundColor: "black",
                  marginLeft: 10,
                  marginRight: 10,
                }}
              ></View>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>100$</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button2: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    borderRadius: 20,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    borderRadius: 20,
  },
  iconSearch: {
    marginTop: 6,
  },
  tinyLogo: {
    resizeMode: "stretch",
  },
  body: {
    height: 600,
    borderRadius: 30,
    backgroundColor: "lightgray",
  },
});
export default Details;
