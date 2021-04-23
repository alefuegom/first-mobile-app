import React from "react";
import AddActivity from "../pages/AddActivity/AddActivity";

export type ActivityType = 'rest' | 'work' | 'sport';

export interface Activity{
    id:string;
    title:string;
    description:string;
    hour:string;
    activityType: ActivityType;
    imageURl:string;
    isCompleted:boolean;

}
export interface ActivitiesContextModel{
    activities:Activity[];
    addActivity: (title:string, description:string, hour:string, activityType:ActivityType) => void;
    completeActivity:(activityId:string)=>void;
}
const ActivitiesContext = React.createContext<ActivitiesContextModel>({
    activities : [],
    addActivity:() => {},
    completeActivity:() => {},


})
export default ActivitiesContext;