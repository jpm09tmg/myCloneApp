import { StatusBar } from 'expo-status-bar';
import {View, Text, Image, StyleSheet, Pressable, Alert} from 'react-native';
import Profile from './components/Profile';
import Icon from 'react-native-vector-icons/EvilIcons';


export default function App() {
  const buttonMessage = () => {
    Alert.alert('Assignment 1 Completed');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.mainView}>

        <View style={styles.header}>
          <Pressable>
            <Text style={styles.backArrow}>←</Text>
            <Icon name="chevron-left"></Icon>
          </Pressable>
          <View style={styles.headerCenter}>
            <Text style={styles.headMain}>OOTD EVERYDAY</Text>
            <Text style={styles.headSub}>Posts</Text>
          </View>
          <Pressable>
            <Text style={styles.moreText}>⋯</Text>
          </Pressable>
        </View>

        <View style={styles.profileHeader}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>ootd_everyday</Text>
            <Text style={styles.viaText}>via frenchie_fry39</Text>
          </View>
          <Pressable onPress={buttonMessage}>
            <Text style={styles.moreText}>⋯</Text>
          </Pressable>
        </View>   

        <View>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/17491971/pexels-photo-17491971/free-photo-of-man-taking-a-walk-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            style={styles.postImage}
          />
          
        </View>
        <View style={styles.left}>
            <Icon name="heart" size={30}></Icon>
            <Icon name="comment" size={30}></Icon>
            <Icon name="sc-telegram" size={30}></Icon>
          </View>
      </View>
      
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 40,
  },
  mainView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  backArrow: {
    fontSize: 20,
    padding: 5,
    color: '#262626',
  },
  headerCenter: {
    alignItems: 'center',
    flex: 1,
  },
  headMain: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8e8e8e',
  },
  headSub: {
    fontSize: 16,
    fontWeight: '500',
    color: '#262626',
  },

  moreText: {
    fontSize: 16,
    padding: 5,
    color: '#262626',
    fontWeight: 'bold',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
  },
  viaText: {
    fontSize: 12,
    color: '#8e8e8e',
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});