import React, { useState, useEffect, ChangeEvent } from 'react';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

interface SelectItem {
    label: string;
    value: string;
}

const Home = () => {
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    const navigation = useNavigation();

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufinitials = response.data.map(uf => uf.sigla);
            setUfs(ufinitials);
        });
    }, []);

    useEffect(() => {
        if (selectedUf === '0') {
            return;
        }

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
            const cityNames = response.data.map(city => city.nome);
            setCities(cityNames);
        });
    }, [selectedUf]);

    function handleNavigateToPoints() {
        navigation.navigate('Points', {
            city: selectedCity,
            uf: selectedUf
        });
    }

    function handleSelectUF(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;
        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;
        setSelectedCity(city);
    }

    function handleIcon() {
        return (
            <FontAwesome name="angle-down" color="gray" size={25} />
        )
    }

    return (
        <ImageBackground
            source={require('../../assets/home-background.png')}
            style={styles.container}
            imageStyle={{ width: 274, height: 368 }}
        >
            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </View>
            <View style={styles.footer}>
                <RNPickerSelect
                    value={selectedUf}
                    onValueChange={(value) => {
                        setSelectedUf(value);
                    }}
                    placeholder={{
                        label: 'Selecione o estado',
                        value: null,
                    }}
                    style={{
                        inputIOS: {
                            fontSize: 16,
                            color: "black",
                            height: 56,
                            backgroundColor: "#FFF",
                            borderRadius: 10,
                            marginBottom: 8,
                            paddingHorizontal: 24,
                        },
                        iconContainer: {
                            top: 15,
                            right: 15,
                        },
                    }}
                    Icon={handleIcon}
                    items={ufs.map(uf => {
                        return {
                            label: uf,
                            value: uf
                        }
                    })}
                />

                <RNPickerSelect
                    value={selectedCity}
                    onValueChange={(value) => {
                        setSelectedCity(value)
                    }}
                    placeholder={{
                        label: 'Selecione a cidade',
                        value: null,
                    }}
                    style={{
                        inputIOS: {
                            fontSize: 16,
                            color: "black",
                            height: 56,
                            backgroundColor: "#FFF",
                            borderRadius: 10,
                            marginBottom: 8,
                            paddingHorizontal: 24,
                        },
                        iconContainer: {
                            top: 15,
                            right: 15,
                        },
                    }}
                    Icon={handleIcon}
                    items={cities.map(city => {
                        return {
                            label: city,
                            value: city
                        }
                    })}
                />


                <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="arrow-right" color="#FFF" size={24} />
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {},

    select: {

    },

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});

export default Home;