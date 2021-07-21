import React, { useEffect, useState } from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [ForecastInfo, setForecastInto] = useState({
        main: '-',
        description: '-',
        temp: 0
    }) 

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=6859d7f26aa4913deafa1c2e66f66a06`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInto({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
            console.warn(error);
            });
        }
    }, [props.zipCode])
       
    
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style = {styles.BBlack}>
                <Text style = {styles.BText}>Zip Code</Text>
                <Text style = {styles.BText}>{props.zipCode}</Text>
                <Forecast {...ForecastInfo} />
            </View>
        </ImageBackground>
    )
}

/*const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
        },
       
})*/

const styles = StyleSheet.create({    //กำหนด backdrop style 
    backdrop: {
        flexDirection: 'column',
        width: '100%',
        height:'100%'
    },
    BText: {
        fontSize: 40 //กำหนดขนาดตัวอักษร
    },
    BBlack:{
        justifyContent: 'center', //center แนวแกนตั้ง
        alignItems: 'center', //center แนวแกนนอน
        backgroundColor: 'rgba(0,0,0,0.3)',
        height:'50%',
        width:'100%'
    }
})