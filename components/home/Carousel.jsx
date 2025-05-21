import React, { useState, useRef, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const Carousel = () => {
  const slides = [
    "https://avatars.mds.yandex.net/get-altay/11124269/2a00000191782af6414353ca2623d56913c4/XXXL",
    "https://avatars.mds.yandex.net/get-altay/4079181/2a00000176e1122d66e4504bc9ddbade6aa0/XXL_height",
    "https://avatars.mds.yandex.net/i?id=f09f90d1bc1f92b8468ffae5a8ed8cce09b1231d-10071204-images-thumbs&n=13"
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef();
  const slideWidth = screenWidth * 0.93;

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / slideWidth);
    setActiveIndex(index);
  };

  // AutoPlay Effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % slides.length;
      scrollRef.current?.scrollTo({ x: nextIndex * slideWidth, animated: true });
      setActiveIndex(nextIndex);
    }, 4000); // 4 saniyede bir geçiş

    return () => clearInterval(interval); // bileşen unmount olunca temizle
  }, [activeIndex]);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 10,
  },
  image: {
    width: screenWidth * 0.93,
    height: 200,
    borderRadius: 20,
    marginTop: 5,
    marginRight: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -18,
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
    width: 10,
    height: 10,
  },
});
