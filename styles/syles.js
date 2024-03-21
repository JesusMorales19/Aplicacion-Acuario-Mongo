import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#87CEEB', // Azul claro
  },
  card: {
    width: '85%',
    padding: 40,
    elevation: 0,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#d3eafd',
    marginTop: '30%',
    borderRadius: 10,
  },
  logo: {
    width: 120, // Ajusta el ancho de la imagen
    height: 120, // Ajusta la altura de la imagen
    borderRadius: 100,
    marginBottom: 20,// Espacio entre el logo y los inputs
    marginLeft:45
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 15, // Ajusta el espacio interno horizontal
    backgroundColor: '#f5f5f5',
  },
  loginButton: {
    marginTop: 10,
    width: '100%',
    borderRadius: 5,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default styles;
