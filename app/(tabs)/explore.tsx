import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { 
  Card, 
  Title, 
  Paragraph, 
  Button,
  List,
  Divider
} from 'react-native-paper';

export default function ExploreScreen() {
  const features = [
    { icon: 'star', title: 'Material Design', description: 'Interfaz moderna y elegante' },
    { icon: 'speedometer', title: 'Rápido', description: 'Optimizado para rendimiento' },
    { icon: 'palette', title: 'Personalizable', description: 'Temas y colores adaptables' },
    { icon: 'mobile-phone', title: 'Responsive', description: 'Se adapta a cualquier pantalla' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Características de la App</Title>
            <Paragraph>
              Esta aplicación demuestra el uso de Material UI en React Native
              con una interfaz minimalista y funcional.
            </Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Funcionalidades</Title>
            {features.map((feature, index) => (
              <View key={feature.title}>
                <List.Item
                  title={feature.title}
                  description={feature.description}
                  left={props => <List.Icon {...props} icon={feature.icon} />}
                />
                {index < features.length - 1 && <Divider />}
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Información</Title>
            <Paragraph>
              Esta es una aplicación de demostración creada para mostrar
              las capacidades de Material UI en React Native.
            </Paragraph>
            <Button 
              mode="contained" 
              style={styles.button}
              onPress={() => alert('¡Gracias por usar la app!')}
            >
              Más Información
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  button: {
    marginTop: 16,
  },
});