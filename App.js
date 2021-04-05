import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import MainScreen from './screens/main';
import ProductScreen from "./screens/product";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Main"
                                  component={MainScreen}
                    options={{
                        title: "홈 화면"
                    }}/>
                    <Stack.Screen name="Product"
                                  component={ProductScreen}
                    options={{
                        title: "상품 화면"
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});
