import React, { useState, useRef } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet, Dimensions, Text, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

import { BackSvg, SearchSvg, LikeThumb, RightArrow, BooksmarkSvg , DisLikeThumb } from '../../../../Assets/Svg';
import { products } from '../../../../../Data';
import MediaList from '../../../../Componets/Media';
import SerachIcon from '../../../../Componets/SerachIcon';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const Productswipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLikeIcon, setShowLikeIcon] = useState(false);
  const [showDislikeIcon, setShowDislikeIcon] = useState(false);
  const translateXAnim = useRef(new Animated.Value(0)).current;

  const handleSwipeLeft = () => {
    animateSwipe(-500);
    setShowDislikeIcon(true);
    setTimeout(() => setShowDislikeIcon(false), 1000);
    console.log('Dislike');
  };

  const handleSwipeRight = () => {
    animateSwipe(500);
    setShowLikeIcon(true);
    setTimeout(() => setShowLikeIcon(false), 1000);
    console.log('Like');
  };

  const animateSwipe = (direction) => {
    Animated.timing(translateXAnim, {
      toValue: direction,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      nextProduct(direction);
      translateXAnim.setValue(0);
    });
  };

  const nextProduct = (direction) => {
    setCurrentIndex((prevIndex) => {
      return direction === -500
        ? (prevIndex + 1) % products.length
        : (prevIndex + 1 + products.length) % products.length;
    });
  };
  const handleBackButtonPress = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <GestureRecognizer
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      style={styles.container}
    >
      <View style={styles.mediaContainer}>
        <Animated.View
          style={[
            styles.media,
            { transform: [{ translateX: translateXAnim }] }
          ]}
        >
          <MediaList imageHeight={'100%'} imageWidth={'100%'} videoHeight={'100%'} videoWidth={'100%'} media={products[currentIndex].media} type={products[currentIndex].type}/>
        </Animated.View>

        <LinearGradient
          colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0)']}
          style={styles.gradient}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        />
        <View style={{justifyContent:'space-between' , display:'flex' , width:'100%' , flexDirection:'row' , bottom: height * 0.79,paddingHorizontal:20}}>
        <TouchableOpacity style={styles.iconLeft} onPress={handleBackButtonPress}>
          <BackSvg />
        </TouchableOpacity>
        <TouchableOpacity>
          <SerachIcon />
        </TouchableOpacity>
        </View>

        {showLikeIcon && (
          <View style={styles.overlayIconContainer}>
            <LikeThumb fill={'green'} />
          </View>
        )}
        {showDislikeIcon && (
          <View style={styles.overlayIconContainer}>
            <DisLikeThumb style={styles.dislikeText} />
          </View>
        )}
      </View>

      <View style={styles.carouselIndicatorContainer}>
        <View style={styles.size}>
          <AnimatedDotsCarousel
            length={products.length}
            currentIndex={currentIndex}
            maxIndicators={3}
            interpolateOpacityAndColor={true}
            activeIndicatorConfig={{
              color: 'black',
              opacity: 1,
              size: 6,
              margin: 3,
            }}
            inactiveIndicatorConfig={{
              color: 'gray',
              opacity: 0.5,
              size: 4,
              margin: 3,
            }}
            decreasingDots={[
              {
                config: { color: 'gray', size: 3, margin: 1, opacity: 1 },
                quantity: 0,
              },
              {
                config: { color: 'gray', size: 2, margin: 2, opacity: 1 },
                quantity: 0,
              },
            ]}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <View>
          <Text style={styles.priceText}>{products[currentIndex].price}</Text>
          <View style={styles.ProductName}>
            <Text style={styles.text}>{products[currentIndex].name}</Text>
            <RightArrow fill={'white'} />
          </View>
        </View>
        <TouchableOpacity style={styles.iconBottom}>
          <BooksmarkSvg />
        </TouchableOpacity>
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    height: height * 0.82,
    borderColor:'white',
    borderWidth:4,
    borderStyle:'solid'
  },
  mediaContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  media: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    overflow: 'hidden'
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    borderRadius: 24,
    bottom: height * 0.00,
    left: width * 0.0,
  },
  iconLeft: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  iconRight: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  iconBottom: {
    backgroundColor: 'white',
    borderRadius: 95,
    padding: 12,
  },
  ProductName: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: height * 0.09,
    width: '100%',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 17,
    color: '#FFFFFF',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  carouselIndicatorContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  size: {
    width: 55,
    height: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  overlayIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -70 }, { translateY: -70 }],
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dislikeText: {
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Productswipe;
