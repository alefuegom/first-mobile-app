import css from "./AllActivities.module.css";

import {
  IonTitle,
  IonHeader,
  IonPage,
  IonToolbar,
  IonGrid,
  IonContent,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonModal,
  IonIcon,
} from "@ionic/react";
import React, { useContext, useState } from "react";
import ActivitiesContext, { Activity } from "../../data/activities-context";
import CompleteActivityModal from "../../components/CompleteActivityModal";
import { checkmarkOutline } from "ionicons/icons";

const AllActivities: React.FC = () => {
  const [completeModal, setCompleteModal] = useState<Activity>();
  const activitiesCtxt = useContext(ActivitiesContext);
  const closeModal = ()=>{
    setCompleteModal(undefined);
  }
  const openModal = (activity:Activity)=>{
    setCompleteModal(activity);
  }
  return (
    <React.Fragment>
      <IonModal isOpen={!!completeModal} swipeToClose={true}>
        <CompleteActivityModal activity={completeModal as Activity} dismiss={closeModal}/>
      </IonModal>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonMenuButton slot="start" />
            </IonButtons>
            <IonTitle>All activities</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {activitiesCtxt.activities.map((activity) => (
              <IonRow key={activity.id}>
                <IonCol>
                  <IonCol className="ion-text-center">
                    <IonCard>
                      <img src={activity.imageURl} alt="Image" />
                      <IonCardTitle>{activity.title}</IonCardTitle>
                      <IonCardSubtitle>{activity.hour}</IonCardSubtitle>
                      <IonCardContent>
                        <p>{activity.description}</p>
                        <IonItem lines="none">
                          {!activity.isCompleted ?
                          <IonButton className={css.FullWitdth} fill="clear" onClick={()=> openModal(activity)}>
                            Complete Activity
                          </IonButton>
                          :
                          <IonIcon color="success" className={css.FullWitdth} icon={checkmarkOutline}/>
                          }
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};
export default AllActivities;
