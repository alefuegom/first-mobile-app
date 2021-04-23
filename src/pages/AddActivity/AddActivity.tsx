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
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonInput,
  IonDatetime,
  IonButton,
} from "@ionic/react";
import React, { useContext, useRef } from "react";
import ActivitiesContext, { ActivityType } from "../../data/activities-context";
import { useHistory } from "react-router-dom";
const AddActivity: React.FC = () => {
  const titleInput = useRef<HTMLIonInputElement>(null);
  const descriptionInput = useRef<HTMLIonInputElement>(null);
  const hourInput = useRef<HTMLIonDatetimeElement>(null);
  const activityTypeInput = useRef<HTMLIonSegmentElement>(null);

  const context = useContext(ActivitiesContext);
  const history = useHistory();
  const addActivity = () => {
    const title = titleInput.current?.value as string;
    const description = descriptionInput.current?.value as string;
    const date = new Date(hourInput.current?.value as string);
    const activityType = activityTypeInput.current?.value as ActivityType;
    const hour = date.getHours() + ":" + date.getMinutes();

    if (title && description && activityType && hour) {
      context.addActivity(title, description, hour, activityType);
      history.replace('/all-activities');
    }
  };
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
            <IonCol class="ion-text-center">
              <IonSegment ref={activityTypeInput}>
                <IonSegmentButton value="work">
                  <IonLabel>Work</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="sport">
                  <IonLabel>Sport</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="rest">
                  <IonLabel>Rest</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Activity title</IonLabel>
                <IonInput ref={titleInput} type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Activity description</IonLabel>
                <IonInput ref={descriptionInput} type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Starting hour</IonLabel>
                <IonDatetime
                  ref={hourInput}
                  display-format="h:mm A"
                  picker-format="h:mm A"
                  value={new Date().toISOString()}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCol className="ion-text-center ion-margin-top">
                <IonButton onClick={addActivity} expand="block" fill="outline">
                  Add activity
                </IonButton>
              </IonCol>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default AddActivity;
