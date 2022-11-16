import { FlatList, StyleSheet } from "react-native";

const ListItem = (data, renderItem, keyExtractor) => {
    return (
        <FlatList
            style={styles.listContainer}
            data={data}
            renderItem = {renderItem}
            keyExtractor={keyExtractor}
        />
    )
}
const styles = StyleSheet.create({ 
    listContainer: {
        marginHorizontal:20,
    },
})
export default ListItem;