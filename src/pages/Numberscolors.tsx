import { IonPage, IonButton, IonCardContent, IonCard, IonCardHeader, IonCardTitle,  } from '@ionic/react';
import back from '../assets/images/back.png'
import next from '../assets/images/next.png'
import wrong from '../assets/images/false1.png'
import correct from '../assets/images/correct1.png'
import "./Numberscolors.css"
import React, { useState } from 'react';
import { Redirect, Route, Link, useHistory } from 'react-router-dom';
import datas from './exercise3';
datas.sort(() => .5 - Math.random())
const Numberscolors: React.FC = () => {
    const [page, setPage] = useState(0);
    const [score, setScore] = useState(0);
    const [data, setData] = useState(datas);
    const [checkanswer, setCheckanswer] = useState(true);
    const [answer, setAnswer] = useState(false);
    const history = useHistory();
    const selectChoice = async (answer) => {
        setCheckanswer(false)
        if (answer) {
            console.log("correct")
            setAnswer(true)
            setScore(c => c + 1)
            if (page + 1 < data.length) {
                // setPage(n => n + 1)
            } else {
                console.log("End")
                window.history.go(-1)
            }
        } else {
            setAnswer(false)
            console.log("not correct")
        }
    }
    const nextPage = () => {
        setCheckanswer(true)
        if (page + 1 < data.length) {
            setPage(n => n + 1)
        }
    }
    const backPage = () => {
        if (page >= 1) {
            setPage(n => n - 1)
        }
    }
    const reloadpage = () =>{
        setCheckanswer(true)
    }
    return (
        <IonPage>
            {checkanswer ? <div><IonCard style={{ backgroundColor: '#DDBD69' }}>
                <div className='content'>
                    <div className='ion-text-center'>
                        <p className='quiz'>{page + 1}.{data[page].title}</p>
                    </div>

                    <div className='ion-text-center'>
                        <img className='img-quiz' src={data[page].number} alt="" />
                    </div>

                    <div className='ion-text-center'>
                        <p className='quiz select-answer'>เลือกคำตอบ</p>
                    </div>

                    <div className='wrap'>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={() => selectChoice(data[page].choice[0].answer)} id="5" src={data[page].choice[0].title} alt="" />
                        </div>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={() => selectChoice(data[page].choice[1].answer)} id="3" src={data[page].choice[1].title} alt="" />
                        </div>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={() => selectChoice(data[page].choice[2].answer)} id="2" src={data[page].choice[2].title} alt="" />
                        </div>

                    </div>
                </div>
            </IonCard>
                <h1 className='ion-text-center'>{score}</h1>
                <IonCard className='card-footer' style={{ backgroundColor: '#DDBD69' }}>
                    <IonCardHeader>
                        <IonCardTitle class='bottom'>
                            {/* <IonButton href='Exercise' fill='clear' color="dark"> */}
                            <IonButton onClick={backPage} fill='clear' color="dark">
                                <img className='btn-back' src={back} alt="" height={"80%"} width={"80%"} />
                            </IonButton>

                            {/* <IonButton href='Number2' fill='clear' color="dark"> */}
                            <IonButton onClick={nextPage} fill='clear' color="dark">
                                <img className='btn-next' src={next} alt="" height={"80%"} width={"80%"} />
                            </IonButton>
                        </IonCardTitle>
                    </IonCardHeader>
                </IonCard>
            </div> : <div>{answer ? <IonPage>

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
                <IonButton onClick={nextPage} fill='clear' color="dark">
                    <img className='btn-next' src={next} alt="" style={{ width: '40px' }} />
                </IonButton>
                {/* <IonButton className='button'>Test</IonButton> */}

            </IonPage> : <IonPage>

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
                <IonButton onClick={reloadpage} fill='clear' color="dark">
                    <img className='btn-next' src={back} alt="" style={{ width: '40px' }} />
                </IonButton>
                {/* <IonButton className='button'>Test</IonButton> */}

            </IonPage>}</div>}


        </IonPage >
    );
};

export default Numberscolors;
