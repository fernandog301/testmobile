
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavbarComponents from './Components/NavbarComponents';
import StoriesComponents from './Components/StoriesComponents';
import PostComponents from './Components/PostComponents';
import FooterComponent from './Components/FooterComponent'



export default function App() {
  return (
    <View style={styles.container}>
      <NavbarComponents/>
      <StoriesComponents/>
      {/* <PostComponents/> */}
      <FooterComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
