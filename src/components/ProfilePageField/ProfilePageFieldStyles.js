import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../styles/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 25,
    },
    fieldColumn: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    emailIcon: {
        color: THEME_COLOR,
        fontSize: 30,
    },
    emailNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    emailNameText: {
        color: THEME_COLOR,
        fontSize: 14,
        fontWeight: '200',
    },
    fieldRow: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    emailText: {
        fontSize: 16,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
    fieldElement: { color: THEME_COLOR, padding: 0, margin: 0 },
    typeOfField: { color: THEME_COLOR, marginVertical: 5 },
    inputContainerStyle: { height: '5%', padding: 0, margin: 0 },
    fieldColumnForText: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5, flexDirection: 'column'
    },
    action: { flexDirection: 'row', flex: 2 },
});

export default styles;