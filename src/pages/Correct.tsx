import { IonCardContent, IonCardHeader, IonPage, IonButton, IonCardTitle, IonCard,} from '@ionic/react';
import "./Correct.css"
import correct from '../assets/images/correct1.png'
const Correct: React.FC = () => {
    return (

        <IonPage>
            <IonCard style={{ backgroundColor: '#DDBD69' }} className='card'>
                <IonCardHeader>
                    <IonCardTitle>

                        <div className="icon-text-center">
                            <img src={correct} alt="" />
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

export default Correct;