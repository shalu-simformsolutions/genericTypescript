import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  optionsContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 200,
  },
  optionButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  selectedOptionButton: {
    backgroundColor: 'lightblue',
  },
  appContainer: {
    flex: 1,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
