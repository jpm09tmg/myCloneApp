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
          <Pressable onPress={buttonMessage}>
            
            <Icon name="chevron-left" size={30}></Icon>
          </Pressable>
          <View style={styles.headerCenter}>
            <Text style={styles.headMain}>OOTD EVERYDAY</Text>
            <Text style={styles.headSub}>Posts</Text>
          </View>
          <Pressable>
            <Text style={styles.moreText}>⋯</Text>
          </Pressable>
        </View>

        
        <Profile 
          image='https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          profile='ootd_everyday'
          viaText='frenchie_fry39'
          postImage='https://images.pexels.com/photos/17491971/pexels-photo-17491971/free-photo-of-man-taking-a-walk-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
 
        <View style={styles.left}>
          <Icon name="heart" size={30} />
          <Icon name="comment" size={30} />
          <Icon name="sc-telegram" size={30} />
        </View>

<View style={styles.captionBlock}>
          
          <Text style={styles.likesText}>
            <Text>Liked by</Text> <Text style={styles.boldText}>paisley.print.48</Text> <Text>and 7 others</Text>
          </Text>

          
          <Text style={styles.captionText}>
            <Text style={styles.boldText}>frenchie_fry39 </Text>
            <Text>Fresh shot on a sunny day! 🌞</Text>
          </Text>

          
          <Text style={styles.commentCountText}>View all 12 comments</Text>

          
          <Text style={styles.commentText}>
            <Text style={styles.boldText}>lil_wyatt838 </Text>
            <Text>Awesome tones</Text>
          </Text>
          <Text style={styles.commentText}>
            <Text style={styles.boldText}>pia.in.a.pod </Text>
            <Text>Gorg. Love it! ❤️</Text>
          </Text>

          
          <Text style={styles.timeText}>1 day ago</Text>
        </View>
      </View> 

        <View style={styles.bottomNav}>
        <Icon name="navicon" size={38} style={styles.navIcon} /> 
        <Icon name="search" size={38} style={styles.navIcon} />   
        <Icon name="plus" size={38} style={styles.navIcon} />    
        <Icon name="cart" size={38} style={styles.navIcon} />   
       <Icon name="user" size={38} style={styles.navIcon} />    
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
    alignItems: 'center',
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
  captionBlock: {
  paddingHorizontal: 15,
  paddingTop: 4,
   
},
likesText: {
  fontWeight: '600',
  color: '#262626',
  marginTop: 5,
},
captionText: {
  color: '#262626',
  marginBottom: 1,
},
commentCountText: {
  color: '#8e8e8e',
  marginBottom: 1,
},
commentText: {
  color: '#262626',
  marginBottom: 1,
},
boldText: {
  fontWeight: 'bold',
},
timeText: {
  color: '#8e8e8e',
  fontSize: 10,
  marginTop: 3,
},
bottomNav: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingVertical: 20,
  borderTopWidth: 0.5,
  borderTopColor: '#dbdbdb',
  backgroundColor: '#ffffff',
},
navIcon: {
  color: '#262626',
},
});