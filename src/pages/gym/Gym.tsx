import { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Gym.css";
import Exercises from "./exercises";

// Segment Types
const ExercisesStr = "exercises";
const StretchesStr = "stretches";

const Gym: React.FC = () => {
    const [currentSegment, setCurrentSegment] = useState(ExercisesStr);

  const onIonChange = (e: any) => {
    const newSegment = e.detail.value;
    if (newSegment === "stretches") {
        setCurrentSegment(StretchesStr);
    } else {
        setCurrentSegment(ExercisesStr);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gym</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSegment onIonChange={onIonChange}>
          <IonSegmentButton value="exercises">
            <IonLabel>Exercises</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="stretches">
            <IonLabel>Stretches</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {currentSegment === StretchesStr ? (
          <div>Stretches Page</div>
        ) : (
          <Exercises />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Gym;
