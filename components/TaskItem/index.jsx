import { Pressable, Text, View, StyleSheet } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../Icons";

const TaskItem = ({ completed, text, onToggleComplete, onPressEdit, onPressDelete }) => {

    const cardStyles = [styles.card]

    return (
        <View style={cardStyles}>
            <Pressable onPress={onToggleComplete}>
                <IconCheck checked={completed} />
            </Pressable>
            <Text style={styles.text}>
                {text}
            </Text>
            <Pressable onPress={onPressEdit}>
                <IconPencil />  
            </Pressable>
            <Pressable onPress={onPressDelete}>
                <IconTrash />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: "#98A0AB",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 18,
        borderRadius: 8,
        gap: 8
    },
    cardCompleted: {
        backgroundColor: '#0F725C'
    },
    text: {
        flex: 1,
        color: '#021123',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default TaskItem;