import { IonCardContent, IonCardHeader, IonPage,  IonButton, IonCardTitle, IonCard,  } from '@ionic/react';
import "./False.css"
import wrong from '../assets/images/false1.png'
const False: React.FC = () => {
    return (

        <IonPage>
            <IonCard style={{ backgroundColor: '#DDBD69' }} className='card'>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className="icon-text-center">
                            <img src={wrong} alt="" />
                        </div>

                    </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>

                </IonCardContent>
            </IonCard>
            
            <IonButton className='button'>Test</IonButton>

        </IonPage>
    );
};

export default False;