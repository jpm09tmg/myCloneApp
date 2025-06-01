import React from "react";
import { StatusBar } from 'expo-status-bar';
import {View, Text, Image, StyleSheet, Pressable, Alert} from 'react-native';

interface ProfileProps {
    image: string;
    profile: string;
    viaText: string;
}

const Profile: React.FC<ProfileProps> =  ({image, profile, viaText}) =>{
     const buttonMessage = () => {
    Alert.alert('Assignment 1 Completed');
  };

    
    return (
        
        
                <View style={styles.profileHeader}>
                  <Image
                    source={{
                      uri: image,
                    }}
                    style={styles.profileImage}
                  />
                  <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>{profile}</Text>
                    <Text style={styles.viaText}>via {viaText}</Text>
                  </View>
                  <Pressable onPress={buttonMessage}>
                    <Text style={styles.moreText}>⋯</Text>
                  </Pressable>
                  
                </View>      
              
    );
};



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
});
export default Profile;