import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Loader = () => {
    // Create an animated value
    const animation = useRef(new Animated.Value(0)).current;

    // Configure the animation
    useEffect(() => {
        const pulse = Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        );
        pulse.start();

        return () => pulse.stop();
    }, [animation]);

    // Interpolate animation value for opacity
    const animatedStyle = {
        opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0.3, 1],
        }),
    };

    return (
        <View style={styles.container}>
            {/* Placeholder card content with animated style */}
            {Array(15)
                .fill(0)
                .map((_, index) => (
                    <Animated.View
                        key={index}
                        style={[styles.placeholder, animatedStyle]}
                    />
                ))}
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    placeholder: {
        height: 50,
        borderRadius: 40,
        overflow: 'hidden',
        borderColor: '#D7007D',
        borderWidth: 1
    },
});
