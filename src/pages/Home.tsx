import React, { useState, useEffect } from "react";
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonItem, IonInput, IonButton,
  IonList, IonCheckbox, IonLabel
} from "@ionic/react";
import { Storage } from "@capacitor/storage";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  // Load todos from storage
  useEffect(() => {
    const load = async () => {
      const { value } = await Storage.get({ key: "todos" });
      if (value) setTodos(JSON.parse(value));
    };
    load();
  }, []);

  // Save todos to storage
  const saveTodos = async (updated: Todo[]) => {
    setTodos(updated);
    await Storage.set({ key: "todos", value: JSON.stringify(updated) });
  };

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    const updated = [...todos, { id: Date.now(), text: newTodo, done: false }];
    await saveTodos(updated);
    setNewTodo("");
  };

  const toggleTodo = async (id: number) => {
    const updated = todos.map(t => t.id === id ? { ...t, done: !t.done } : t);
    await saveTodos(updated);
  };

  const deleteTodo = async (id: number) => {
    const updated = todos.filter(t => t.id !== id);
    await saveTodos(updated);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>My To-Do List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            placeholder="Add new task..."
            value={newTodo}
            onIonChange={e => setNewTodo(e.detail.value!)}
          />
          <IonButton onClick={addTodo}>Add</IonButton>
        </IonItem>

        <IonList>
          {todos.map(todo => (
            <IonItem key={todo.id}>
              <IonCheckbox
                checked={todo.done}
                onIonChange={() => toggleTodo(todo.id)}
              />
              <IonLabel style={{ textDecoration: todo.done ? "line-through" : "" }}>
                {todo.text}
              </IonLabel>
              <IonButton color="danger" fill="clear" onClick={() => deleteTodo(todo.id)}>
                Delete
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
