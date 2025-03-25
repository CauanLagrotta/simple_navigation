import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { StyleSheet, Text, View } from "react-native"

export const CustomDrawer = (props: DrawerContentComponentProps) => {


    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.headerArea}>
                <Text style={styles.textHeader}>Drawer</Text>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    headerArea: {
        backgroundColor: "green",
        height: 100,
        marginBottom: 60,
        justifyContent: "center"
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
})