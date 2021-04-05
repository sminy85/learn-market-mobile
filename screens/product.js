import React, { useEffect } from "react";
import {Text, View, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { API_URL } from "../config/constants";
import {useState} from "react";

export default function ProductScreen(props){
    const {id} = props.route.params;
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        axios.get(`${API_URL}/products/${id}`)
            .then((result)=>{
                console.log('product result ; ', result.data);
                setProduct(result.data.product);
            }).catch((error)=>{
                console.error(error);
        })
    }, []);

    if(!product) {
        return <ActivityIndicator />
    }

    return (
        <ScrollView>
        <Text>상품 상세 화면</Text>
        <Text>{product.name}</Text>
        </ScrollView>
    )
}