import { Text, View, StyleSheet, FlatList, TextInput } from "react-native";
import data from "../data";
import List from "./List";
import Icon from "react-native-vector-icons/Feather";
function Home({ navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View>
        <Text style={styles.title}>Find Best Burger in Your City</Text>
        <View flexDirection="row">
          <TextInput style={styles.input} placeholder="Search..." />
          <Icon
            name="search"
            size={30}
            color="#900"
            style={styles.iconSearch}
          />
        </View>
        <Text style={styles.title}>Near You now</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          keyExtractor={(data) => data.key}
          data={data}
          renderItem={(data) => <List a={data.item} navigation={navigation} />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  iconSearch: {
    marginTop: 15,
    marginLeft: 50,
    backgroundColor: "red",
    height: 40,
    width: 40,
    textAlign: "center",
    paddingTop: 5,
    borderRadius: 30,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 20,
  },
});

export default Home;
