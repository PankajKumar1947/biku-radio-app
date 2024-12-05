import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Dimensions, Linking } from 'react-native';

const Dialog = ({ updateApp }: { updateApp: boolean }) => {
    const { height, width } = Dimensions.get('window');

    return (
        <Modal
            visible={updateApp}
            transparent
            animationType="slide"
        >
            <View style={[styles.modalContainer, { height, width }]}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Update Available</Text>
                    <Text style={styles.description}>
                        A new version of the app is available. Please update to enjoy the latest features and improvements.
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={() => Linking.openURL('https://example.com/download')} // Replace with your app's download link
                        >
                            <Text style={styles.buttonText}>Update Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default Dialog;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'grey',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#D7007D',
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    updateButton: {
        flex: 1,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginRight: 10,
    },
    dismissButton: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    dismissText: {
        color: '#555',
        fontWeight: 'bold',
    },
});
