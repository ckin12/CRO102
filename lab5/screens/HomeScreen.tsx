import React from "react";
import { View, Button, StyleSheet, ImageBackground } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={{ uri: "https://vcdn1-thethao.vnecdn.net/2025/03/20/New-Project-2025-03-20T164821-6993-4668-1742464287.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=Qhtxl36rlZ9xD3cKMKANKA" }}
            style={styles.background}
        >
            <View style={styles.container}>
                <Button title="Bài 1: Redux Toolkit" onPress={() => navigation.navigate("ReduxToolkit")} />
                <View style={styles.spacing} />
                <Button title="Bài 2: Redux Persist & Chọn Ảnh" onPress={() => navigation.navigate("ReduxPersist")} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "80%",
        alignItems: "center",
    },
    spacing: {
        height: 20, // Khoảng cách giữa các nút
    },
});
