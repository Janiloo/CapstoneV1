import  {StyleSheet, Text, View} from 'react-native'

function Register() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>This is Registration Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        fontSize: 28,
        color: 'black',
    },
    heagingStyle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
});
export default Register;