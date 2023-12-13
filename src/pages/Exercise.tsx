import { IonText, IonCardContent, IonCardHeader, IonHeader, IonPage, IonToolbar, IonButton, IonCardTitle, IonCard, } from '@ionic/react';
import "./Exercise.css"
import girl from '../assets/images/girl.png'
import boy from '../assets/images/boy.png'
import bee2 from '../assets/images/bee2.png'
import book from '../assets/images/book.png'
const Exercise: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonHeader>
                    <IonToolbar style={{ backgroundColor: '#DDBD69' }}>
                        <IonText>
                            <h1 style={{ color: "white", padding: "10px" }}>แบบฝึกหัด</h1>
                            <img src={book} alt="" width={"80"} height={"80"} />
                        </IonText>

                    </IonToolbar>
                </IonHeader>

            </IonHeader>

            <IonCard style={{ backgroundColor: '#DDBD69' }}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                            <IonButton href='/Matchnumber' fill='clear' color="dark">เลขไทยและเลขอารบิก</IonButton>
                            <img src={girl} alt="" width={"30%"} height={"30%"} />
                        </div>
                    </IonCardTitle>
                </IonCardHeader>

            </IonCard>

            <IonCard style={{ backgroundColor: '#DDBD69' }}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>

                            <IonButton href='/Numbercount' fill='clear' color="dark">นับจำนวนตัวเลข</IonButton>
                            <img src={boy} alt="" width={"30%"} height={"30%"} />
                        </div>
                    </IonCardTitle>

                </IonCardHeader>

                <IonCardContent>
                    <img src="" alt="" />
                </IonCardContent>
            </IonCard>

            <IonCard style={{ backgroundColor: '#DDBD69' }}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                            <IonButton href='/Numbersinvisible' fill='clear' color="dark">ตัวเลขที่หายไป</IonButton>
                            <img src={bee2} alt="" width={"30%"} height={"30%"} />
                        </div>
                    </IonCardTitle>
                </IonCardHeader>
            </IonCard>


            <IonButton style={{ color: "white", padding: "8px" }} fill='clear' href='/menu'>กลับหน้าเมนู</IonButton>


        </IonPage>






    );
};

export default Exercise;