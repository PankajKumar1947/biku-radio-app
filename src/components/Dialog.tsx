import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Dimensions, Linking } from 'react-native';

const Dialog = ({ updateApp }: any) => {
    const { height, width } = Dimensions.get('window');

    return (
        <Modal
            visible={updateApp?.updateApp}
            transparent
            animationType="slide"
        >
            <View style={[styles.modalContainer, { height, width }]}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Update Available</Text>
                    <Text style={{ fontSize: 20, marginBottom: 10, color: '#D7007D' }}>Version {updateApp?.version}</Text>
                    <Text style={styles.description}>
                        {updateApp?.message}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={() => Linking.openURL(updateApp?.url)} // Replace with your app's download link
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
        backgroundColor: '#0B192C',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#D7007D',
    },
    description: {
        fontSize: 17,
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
