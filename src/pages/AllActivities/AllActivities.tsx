import css from './AllActivities.module.css'

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
} from "@ionic/react";
import React, {useContext} from "react";
import ActivitiesContext from "../../data/activities-context";

const AllActivities: React.FC = () => {
  const activitiesCtxt = useContext(ActivitiesContext)
  return (
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
          { activitiesCtxt.activities.map(activity=>(
          <IonRow key={activity.id}>
            <IonCol>
              <IonCol className="ion-text-center">
                <IonCard>
                  <img src={activity.imageURl} alt="Image"/>
                  <IonCardTitle>{activity.title}</IonCardTitle>
                  <IonCardSubtitle>{activity.hour}</IonCardSubtitle>
                  <IonCardContent>
                    <p>{activity.description}</p>
                    <IonItem lines="none">
                      <IonButton className = {css.FullWitdth} fill="clear">Complete Activity</IonButton>
                    </IonItem>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonCol>
          </IonRow>
          ))
          
          }
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default AllActivities;
