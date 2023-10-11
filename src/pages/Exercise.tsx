import { IonText,IonCardContent, IonCardHeader, IonHeader, IonPage, IonToolbar, IonButton, IonCardTitle, IonCard, } from '@ionic/react';
import "./Exercise.css"
import girl from '../assets/images/girl.png'
import boy from '../assets/images/boy.png'
import color from '../assets/images/color.png'
import book from '../assets/images/book.png'
const Exercise: React.FC = () => {
    return (
    <div className='container-1'> 
        
        <IonPage>
            <IonHeader>
                <IonHeader>
                    <IonToolbar style={{backgroundColor: '#DDBD69'}}>
                <IonText>
                    <h1>แบบฝึกหัด</h1> 
                    <img src={book} alt="" width={"80"} height={"80"}  />             
                </IonText>
            
                </IonToolbar>
            </IonHeader>

        </IonHeader>

            <IonCard style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                            <IonButton href='/Matchnumber' fill='clear' color="dark">เลขไทยและเลขอารบิก</IonButton>
                            <img src={girl} alt=""  width={"30%"} height={"30%"}/> 
                        </div>
                    </IonCardTitle>
                </IonCardHeader>

            </IonCard>

            <IonCard style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                    <div className='ion-text-center'>

                        <IonButton href='/Numbercount' fill='clear' color="dark">นับจำนวนตัวเลข</IonButton>
                        <img src={boy} alt=""  width={"30%"} height={"30%"}/> 
                    </div>
                    </IonCardTitle>

                </IonCardHeader>

                <IonCardContent>
                    <img src="" alt="" />
                </IonCardContent>
            </IonCard>

            <IonCard style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                            <IonButton href='/Numberscolors' fill='clear' color="dark">ตัวเลขกับสี</IonButton>
                            <img src={color} alt=""  width={"30%"} height={"30%"}/>                             
                        </div>
                    </IonCardTitle>
                </IonCardHeader>
            </IonCard>


        </IonPage>
    </div>
                    
        
    );
};

export default Exercise;