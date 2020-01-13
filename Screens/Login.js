import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Item } from 'native-base';

import { Ionicons, Feather } from '@expo/vector-icons';
var FloatingLabel = require('react-native-floating-labels');

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Visible: false
        };
    }

    async componentDidMount() {

    }

    onBlur() {
        console.log('#####: onBlur');
    }

    render() {

        return (
            <View style={styles.container}>

                <Image
                    style={styles.logo}
                    source={require('../assets/logo.jpg')}
                />

                <Text style={styles.Heading}>Log in</Text>
                {/* <Item style={{ height: 55, marginBottom: 20 }} regular last>
                    <TextInput placeholder="Username" style={{ flex: 1, marginHorizontal: 15, fontSize: 16 }} />
                </Item> */}
                <View style={{ marginBottom: 20, borderWidth: 0.5, borderColor: '#c8c8c8', height: 60 }} />
                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    // value='john@email.com'
                    onBlur={this.onBlur}
                >Username</FloatingLabel>

                <View style={{ marginBottom: 20, borderWidth: 0.5, borderColor: '#c8c8c8', height: 60,marginTop:30 }} />
                <View style={{ flexDirection: 'row' }}>
                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        // value='john@email.com'
                        onBlur={this.onBlur}
                        password={this.state.Visible ? false : true}
                    >Password
                </FloatingLabel>
                    <TouchableOpacity style={{marginTop:-60,marginLeft:-35}} onPress={() => this.setState({ Visible: !this.state.Visible })}>
                        <Feather style={{  }} name={this.state.Visible ? ("eye") : ("eye-off")} size={24} color="#c8c8c8" />
                    </TouchableOpacity>
                </View>
                {/* <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    // value='john@email.com'
                    onBlur={this.onBlur}
                >Username
                </FloatingLabel> */}
                {/* </View> */}
                {/* <Item style={{ height: 55 }} regular last>
                    <TextInput placeholder="Password" style={{ flex: 1, marginHorizontal: 15, fontSize: 16 }} secureTextEntry={this.state.Visible ? false : true} />
                    <TouchableOpacity onPress={() => this.setState({ Visible: !this.state.Visible })}>
                        <Feather style={{ marginRight: 15 }} name={this.state.Visible ? ("eye") : ("eye-off")} size={24} color="#c8c8c8" />
                    </TouchableOpacity>
                </Item> */}

                <TouchableOpacity style={styles.Button}>
                    <Text style={{ color: '#fff', fontWeight: '700' }}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")} style={styles.CreateAccount}>
                    <Text style={{ alignSelf: 'center', fontSize: 16 }}>Create an account</Text>
                </TouchableOpacity>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        alignSelf: 'center',
        height: 190,
        width: 210,
        marginTop: '20%'
    },
    Heading: {
        fontSize: 26,
        fontWeight: '700',
        marginVertical: 20
    },
    labelInput: {
        color: '#c8c8c8',
    },
    formInput: {
        marginTop: -85,
        width: '100%'
        // flex:1
        // borderBottomWidth: 1.5,
        // marginLeft: 20,
        // borderColor: '#c8c8c8',
    },
    input: {
        borderWidth: 0,
        borderColor: '#c8c8c8',
        fontSize: 16,
    },
    Button: {
        borderRadius: 3,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14d39f',
        marginVertical: 30,
    }
});
