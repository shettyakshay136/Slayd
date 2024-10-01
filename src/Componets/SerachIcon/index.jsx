import React, { useState, useRef } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  TextInput,
  Text,
  Keyboard,
  StatusBar,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { SearchSvg } from '../../Assets/Svg';


const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const SearchModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const inputRef = useRef(null);
  const openModal = () => {
    setModalVisible(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });
  };

  const closeModal = () => {
    Keyboard.dismiss();
    Animated.timing(animation, {
      toValue: 0,
      duration: 600,
      useNativeDriver: false,
    }).start(() => setModalVisible(false));
  };

  const animatedWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [44, width - 87.5],
  });

  return (
    <View style={styles.container}>
      {/* <StatusBar 
        barStyle={modalVisible ? 'light-content' : 'dark-content'} 
        backgroundColor={modalVisible ? 'transparent' : 'white'}  
        translucent={true} 
      /> */}
      
      <TouchableOpacity style={styles.circle} onPress={openModal}>
        <SearchSvg />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <BlurView
            style={styles.blurView}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="rgba(0, 0, 0, 1)"
          />

          <TouchableOpacity onPress={closeModal} style={styles.modalTouchable}>
          </TouchableOpacity>

          <View style={styles.modalContent}>
            <Animated.View style={[styles.animatedCircle, { width: animatedWidth }]}>
              <SearchSvg />
              <TextInput
                ref={inputRef}
                placeholder="Search..."
                placeholderTextColor={'black'}
                style={styles.searchInput}
              />
            </Animated.View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  circle: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  modalTouchable: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalContent: {
    backgroundColor: 'transparent',
    flex: 1,
    top: height * 0.090,
    right: width - 349,
  },
  animatedCircle: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    overflow: 'hidden',
    position: 'absolute',
    right: 0, 
  },
  searchInput: {
    flex: 1,
    padding: 8.2,
    color: 'black',
  },
});

export default SearchModal;
