import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Divider,
  FAB,
  List,
  Modal,
  Provider as PaperProvider,
  Paragraph,
  Portal,
  TextInput,
  Title,
} from "react-native-paper";

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [items, setItems] = useState([
    { id: 1, title: "Tarea 1", description: "Descripción de la primera tarea" },
    { id: 2, title: "Tarea 2", description: "Descripción de la segunda tarea" },
  ]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const addItem = () => {
    if (text.trim()) {
      const newItem = {
        id: items.length + 1,
        title: text,
        description: "Nueva tarea agregada",
      };
      setItems([...items, newItem]);
      setText("");
      hideModal();
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Card style={styles.card}>
            <Card.Content>
              <Title>App en react native</Title>
              <Paragraph>
               Se uso Material UI con expo para lograr descargarla en movil
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Title>Lista de Tareas</Title>
              {items.map((item, index) => (
                <View key={item.id}>
                  <List.Item
                    title={item.title}
                    description={item.description}
                    left={(props) => (
                      <List.Icon {...props} icon="check-circle" />
                    )}
                    right={(props) => (
                      <Button
                        mode="text"
                        onPress={() => {
                          setItems(items.filter((i) => i.id !== item.id));
                        }}
                      >
                        Eliminar
                      </Button>
                    )}
                  />
                  {index < items.length - 1 && <Divider />}
                </View>
              ))}
            </Card.Content>
          </Card>
        </ScrollView>

        <FAB style={styles.fab} icon="plus" onPress={showModal} />

        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modal}
          >
            <Card>
              <Card.Content>
                <Title>Agregar Nueva Tarea</Title>
                <TextInput
                  label="Título de la tarea"
                  value={text}
                  onChangeText={setText}
                  style={styles.input}
                />
                <View style={styles.buttonContainer}>
                  <Button
                    mode="outlined"
                    onPress={hideModal}
                    style={styles.button}
                  >
                    Cancelar
                  </Button>
                  <Button
                    mode="contained"
                    onPress={addItem}
                    style={styles.button}
                  >
                    Agregar
                  </Button>
                </View>
              </Card.Content>
            </Card>
          </Modal>
        </Portal>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  input: {
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});
