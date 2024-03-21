import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/syles.js';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Validar campos antes de intentar iniciar sesión
    if (email.trim() === '' || password.trim() === '') {
      // Mostrar mensaje de error
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    // Validar credenciales
    if (email.trim() === 'jesus@gmail.com' && password.trim() === '1234') {
      // Lógica de inicio de sesión

      // Después de iniciar sesión con éxito, navegar a la pantalla de inicio
      navigation.navigate('Main');
    } else {
      // Mostrar mensaje de error si las credenciales no son válidas
      setErrorMessage('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        {/* Fondo azul claro */}
      </View>

      <Card style={styles.card}>
        {/* Logo centrado en la card */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        {/* Etiquetas dentro de los campos de texto y mostrando lo que se escribe */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrorMessage('');
          }}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrorMessage('');
          }}
        />

        {/* Mostrar mensaje de error */}
        {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}

        {/* Botón de inicio de sesión más grande */}
        <Button mode="contained" style={styles.loginButton} onPress={handleLogin}>
          Iniciar sesión
        </Button>
      </Card>

      {/* Iconos de redes sociales */}
      <View style={styles.socialIcons}>
        <Icon name="facebook" size={30} color="#3b5998" />
        <Icon name="whatsapp" size={30} color="#25D366" />
        <Icon name="twitter" size={30} color="#1DA1F2" />
      </View>
    </View>
  );
};

export default LoginScreen;
