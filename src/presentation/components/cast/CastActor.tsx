/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, View } from "react-native";
import { Cast } from "../../../core/entities/cast.entity";

interface Props {
    actor: Cast;
}

export const CastActor = ({ actor }: Props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.actorImage} source={{ uri: actor.avatar }} />
            <View>
                <Text style={styles.actorInfo}>{actor.name}</Text>
                <Text style={{ ...styles.actorInfo, fontSize: 12, opacity: 0.7 }}>{actor.character}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },
    actorImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
        fontSize: 15,
    },
});
