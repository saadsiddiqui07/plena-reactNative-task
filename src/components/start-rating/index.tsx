import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const StarRating = ({rating}: {rating: number}) => {
  // Calculate the number of full and half stars based on the rating
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  // Create an array to render the stars dynamically
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FontAwesome key={i} name="star" size={20} color="#FFD700" />);
    } else if (i === fullStars + 1 && halfStar) {
      stars.push(
        <FontAwesome key={i} name="star-half-full" size={20} color="#FFD700" />,
      );
    } else {
      stars.push(
        <FontAwesome key={i} name="star-o" size={20} color="#FFD700" />,
      );
    }
  }

  return (
    <View style={styles.main}>
      {stars.map((star, index) => (
        <View key={index} style={styles.starView}>
          {star}
        </View>
      ))}
      <Text style={styles.rating}>{rating}</Text>
    </View>
  );
};

export default StarRating;
