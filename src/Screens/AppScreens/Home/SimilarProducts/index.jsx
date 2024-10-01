import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SimilarProductsData } from '../../../../../Data';
import Video from 'react-native-video';
import { RightArrow } from '../../../../Assets/Svg';

const { height: screenHeight } = Dimensions.get('window');

const ProductList = () => {
  const imageHeights = [200, 230, 230, 240 , 250];

  const columnOne = [];
  const columnTwo = [];

  let globalIndex = 0;

  SimilarProductsData.forEach((item, index) => {
    const [videoDuration, setVideoDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const handleLoad = (data) => {
      setVideoDuration(data.duration);
    };

    const handleProgress = (data) => {
      setCurrentTime(data.currentTime);
    };

    const timeLeft = Math.max(0, videoDuration - currentTime);

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const formattedTimeLeft = formatTime(timeLeft);

    const imageHeight = imageHeights[globalIndex % imageHeights.length];
    
    const productItem = (
      <View style={styles.productContainer} key={item.id}>
        <View style={styles.mediaContainer}>
          {item.type === 'image' ? (
            <View>
              <Image
                source={item.media}
                style={{
                  width: '100%',
                  height: imageHeight,
                  borderRadius: 16,
                }}
                resizeMode="cover"
              />
            </View>
          ) : (
            <View
              style={{
                height: screenHeight * 0.36,
                borderRadius: 16,
                overflow: 'hidden',
              }}>
              <Video
                source={item.media}
                style={{ height: '100%' }}
                resizeMode="cover"
                repeat={true}
                controls={false}
                onLoad={handleLoad}
                onProgress={handleProgress}
              />
              <Text style={styles.timeLeft}>
                {formattedTimeLeft}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.prize}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>{item.price}</Text>
          <Text numberOfLines={2} style={styles.name}>{item.des}</Text>
        </View>
      </View>
    );

    if (index % 2 === 0) {
      columnOne.push(productItem);
    } else {
      columnTwo.push(productItem);
    }

    globalIndex++;
  });

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <View style={styles.heading}>
        <Text style={styles.title}>Similar Products</Text>
        <RightArrow fill={'black'} />
      </View>
      <View style={styles.columnContainer}>
        <View style={styles.column}>{columnOne}</View>
        <View style={styles.column}>{columnTwo}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    gap: 20,
  },
  column: {
    flex: 1,
  },
  productContainer: {
    marginBottom: 10,
  },
  prize: {
    paddingVertical: 7,
    paddingHorizontal: 3,
  },
  mediaContainer: {
    position: 'relative',
  },
  name: {
    color: '#777',
    paddingBottom: 10,
  },
  timeLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 15,
  },
});

export default ProductList;
