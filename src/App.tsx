import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { barbellOutline, addCircleOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AllActivities from "./pages/AllActivities/AllActivities";
import AddActivity from "./pages/AddActivity/AddActivity";
import React from "react";
import ActivitiesContextProvider from "./data/ActivitiesContextProvider";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="alefuegom-first-mobile-app-menu">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Principal Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem
                routerLink="/all-activities"
                routerDirection="none"
                lines="none"
              >
                <IonIcon color="medium" slot="start" icon={barbellOutline} />
                <IonLabel>All activities </IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                routerLink="/add-activity"
                routerDirection="none"
                lines="none"
              >
                <IonIcon color="medium" slot="start" icon={addCircleOutline} />
                <IonLabel>Add activity </IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <ActivitiesContextProvider>

      <IonRouterOutlet id="alefuegom-first-mobile-app-menu">
        <Route path="/all-activities" component={AllActivities} />
        <Route path="/add-activity" component={AddActivity} />
        <Redirect to="/all-activities" />
      </IonRouterOutlet>
      </ActivitiesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
