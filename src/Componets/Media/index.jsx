import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const MediaViewer = ({ media, type, imageHeight, imageWidth, videoHeight, videoWidth, shouldPlay,}) => {
  return (
    <View style={styles.container}>
      {type === 'image' ? (
        <Image
          source={media}
          style={[styles.media, { height: imageHeight, width: imageWidth }]}
          resizeMode="cover"
        />
      ) : (
        <Video
          source={media}
          style={[styles.media, { height: videoHeight, width: videoWidth }]}
          resizeMode="cover"
          repeat={true}
          controls={false}
          shouldPlay={shouldPlay}
          // onLoaded={onLoaded} // Callback for when the video loads successfully
          // onError={onError} // Callback for when an error occurs
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MediaViewer;