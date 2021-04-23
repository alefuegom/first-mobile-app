import React, {useState} from 'react';
import ActivitiesContext, {ActivitiesContextModel, Activity, ActivityType} from './activities-context'
const ActivitiesContextProvider: React.FC = (props) =>{

    const [activities, setActivities] = useState<Activity[]>(
        [{
            id: Math.random().toString(),
            title: 'My daily rest',
            description:'Rest Time',
            hour:'23:00',
            activityType:'rest',
            imageURl:'/assets/images/rest.jpg',
            isCompleted:false
        },
        {
            id: Math.random().toString(),
            title: 'Routine',
            description:'Work Hard',
            hour:'09:00',
            activityType:'work',
            imageURl:'/assets/images/work.jpg',
            isCompleted:true
        },
        {
            id: Math.random().toString(),
            title: 'Burn calories',
            description:'Do some sport',
            hour:'17:00',
            activityType:'sport',
            imageURl:'/assets/images/sport.jpg',
            isCompleted:false
        },
    ]
    );

    const addActivity = (title:string, description:string, hour:string, activityType:ActivityType) => {
        let imageURl = '';
        switch(activityType){
            case 'rest':
                imageURl = '/assets/images/rest.jpg'
                break;
            case 'sport':
                imageURl = '/assets/images/sport.jpg'
                break;
            case 'work':
                imageURl = '/assets/images/work.jpg'
                break;
            default:
                imageURl = '/assets/images/rest.jpg'
                break;
        }
        const newActivity:Activity = {
            id: Math.random().toString(),
            title,
            description,
            hour,
            activityType,
            imageURl,
            isCompleted:false,
        };
        setActivities(currActivities =>{
            return [...currActivities, newActivity]
        });
    };

    const completeActivity = (activityId:string) =>{
        setActivities(currActivities=>{
            const updatedActivities =[...currActivities];
            const selectedActivityIndex = activities.findIndex(act =>act.id === activityId);
            const updatedActivity = {...updatedActivities[selectedActivityIndex], isCompleted:true};
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
    };

    const activitiesContext: ActivitiesContextModel = {
        activities,
        addActivity,
        completeActivity
    };
    return(
        <ActivitiesContext.Provider value={activitiesContext} >
            {props.children} 
        </ActivitiesContext.Provider>
    );
};
export default ActivitiesContextProvider;