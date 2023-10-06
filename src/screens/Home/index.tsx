import { styles } from "./styles";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Gustavo",
    "Rodrigo",
    "Diego",
    "Gustavo",
    "Rodrigo",
    "Diego",
    "Gustavo",
    "Rodrigo",
    "Diego",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Gustavo")) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome!"
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro 2023</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />

      {/*       <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
