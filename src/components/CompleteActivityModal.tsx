import {
  IonContent,
  IonGrid,
  IonCol,
  IonModal,
  IonText,
  IonRow,
  IonImg,
  IonButton,
} from "@ionic/react";
import React, { useContext } from "react";
import ActivitiesContext, { Activity } from "../data/activities-context";

interface CompleteActivityModalProps {
  activity: Activity,
  dismiss: () => void,
}

const CompleteActivityModal: React.FC<CompleteActivityModalProps> = (props) => {
  const activitiesCtxt = useContext(ActivitiesContext);

  const completeActivity = (activityId: string) => {
    activitiesCtxt.completeActivity(activityId);
    props.dismiss();
  };

  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-no-padding">
            <IonImg src={props.activity.imageURl} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonText>
              <h2>{props.activity.title}</h2>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center ion-no-padding">
            <IonText color="info">
              <h2>Are you sure you want to mark this activity as completed?</h2>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton color="danger" fill="clear" onClick={props.dismiss}>
              Cancel
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-center">
            <IonButton
              color="success"
              fill="clear"
              onClick={() => completeActivity(props.activity.id)}>
              Complete
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};
export default CompleteActivityModal;
