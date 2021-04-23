import {
  IonTitle,
  IonHeader,
  IonPage,
  IonToolbar,
  IonGrid,
  IonContent,
  IonRow,
  IonCol,
  IonMenuButton,
  IonButtons,
} from "@ionic/react";
import React from "react";

const AddActivity: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton slot="start" />
          </IonButtons>
          <IonTitle>Add Activity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Add activity work !</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default AddActivity;
