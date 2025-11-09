import React from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from "@ionic/react";
import "./assets/styles/StatsCard.css";

interface Props { title: string; value: string; color?: string; }

const StatsCard: React.FC<Props> = ({ title, value, color }) => {
  return (
    <IonCard className="stats-card">
      <IonCardHeader>
        <IonCardSubtitle>{title}</IonCardSubtitle>
        <IonCardTitle style={{ color: color || "var(--ion-color-primary)" }}>{value}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default StatsCard;
