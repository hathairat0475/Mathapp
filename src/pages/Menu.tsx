import { IonCardHeader, IonHeader, IonPage, IonText, IonToolbar, IonCardTitle, IonCard, IonImg } from '@ionic/react';
import "./Menu.css"
import notebook from '../assets/images/notebook.png'
import game from '../assets/images/game.png'
import burger from '../assets/images/burger.png'
const Menu: React.FC = () => {
    return (
        
        <IonPage>
            <IonHeader>
                <IonToolbar style={{backgroundColor: '#DDBD69'}}>
                    
                <IonText>
                    <h1>MENU</h1> 
                    <img src={burger} alt="" width={"80"} height={"80"}  />             
                 </IonText>
            
                </IonToolbar>
            </IonHeader>
            
            
            {/* item1 */}
            <IonCard href='/exercise' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h3 color="warning">แบบฝึกหัด</h3> 
                      <img src={notebook} alt="" width={"80"} height={"80"}  />              
                    </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>

            {/* item2 */}
            <IonCard href='/Gameimagenumber' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h2 color="warning">เกม</h2> 
                      <img src={game} alt="" width={"80"} height={"80"}   />             
                    </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>
            
        </IonPage>
    );
};

export default Menu;

