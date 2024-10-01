import React, { useState, useRef } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FilterSvg } from '../../Assets/Svg';
import BottomSheetModalView from '../BottomSheetModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const Filter = ({ title = '', options = [], selectedOption = '', onPress = () => {} }) => {
  const [selected, setSelected] = useState(selectedOption);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleOptionPress = (option) => {
    setSelected(option);
    onPress(option);
    bottomSheetModalRef.current?.present();
  };

  return (
    <View style={styles.filter}>
      <Pressable style={styles.icon}>
        <FilterSvg />
      </Pressable>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {options.map((option, index) => (
          <Pressable
            key={index}
            onPress={() => handleOptionPress(option)}
            style={[styles.filterOption, option === selected && styles.selectedOption]}
          >
            <Text style={[styles.filterOptionText, option === selected && styles.selectedOptionText]}>
              {option}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* <BottomSheetModalView bottomSheetModalRef={bottomSheetModalRef}>
        <Text style={styles.bottomSheetText}>This is the content of the BottomSheetModal.</Text>
      </BottomSheetModalView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 15,
    marginRight: 6,
  },
  scrollView: {
    flexGrow: 0,
  },
  filterOption: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  selectedOption: {
    backgroundColor: '#DDDDDD',
  },
  selectedOptionText: {
    color: 'black',
  },
  filterOptionText: {
    fontSize: 13,
    color: 'black',
  },
  bottomSheetText: {
    padding: 20,
  },
});

export default React.memo(Filter);
