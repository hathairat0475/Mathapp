import { IonCardHeader, IonHeader, IonPage, IonText, IonToolbar, IonCardTitle, IonCard, IonImg } from '@ionic/react';
import "./Menu.css"
import notebook from '../assets/images/notebook.png'
import game from '../assets/images/game.png'
import burger from '../assets/images/burger.png'
const Menu: React.FC = () => {
    return (
   
        <IonPage style={{paddingBottom: "5cm"}}>
            <IonHeader>
                <IonToolbar style={{backgroundColor: '#DDBD69'}}>
                    
                <IonText>
                    <h1 style={{color: "white" , padding: "10px"}}>MENU</h1> 
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
                        <h3 color="warning" style={{marginRight: "120px"}}>แบบฝึกหัด</h3> 
                      <img src={notebook} alt="notebook" style={{marginRight: "30px"}} width={"50"} height={"50"}  />              
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
                        <h2 color="warning" style={{marginRight: "150px"}}>เกมภาพกับตัวเลข</h2> 
                      <img src={game} alt="game" style={{marginRight: "30px"}}  width={"50"} height={"50"}   />             
                    </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>
            
        </IonPage>
   
    );
};

export default Menu;

