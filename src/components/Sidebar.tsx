import {
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import {
  homeOutline,
  speedometerOutline,
  logInOutline,
  personAddOutline,
} from "ionicons/icons";
import "./assets/styles/Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <IonMenu contentId="main" className="custom-menu">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList className="menu-list">

          <IonItem routerLink="/home" lines="none">
            <IonIcon icon={homeOutline} slot="start" />
            <IonLabel>Home</IonLabel>
          </IonItem>

          <IonItem routerLink="/dashboard" lines="none">
            <IonIcon icon={speedometerOutline} slot="start" />
            <IonLabel>Dashboard</IonLabel>
          </IonItem>

          <IonItem routerLink="/login" lines="none">
            <IonIcon icon={logInOutline} slot="start" />
            <IonLabel>Login</IonLabel>
          </IonItem>

          <IonItem routerLink="/register" lines="none">
            <IonIcon icon={personAddOutline} slot="start" />
            <IonLabel>Register</IonLabel>
          </IonItem>

        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Sidebar;
