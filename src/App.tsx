import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Correct from './pages/Correct';
import False from './pages/False';
import Menu from './pages/Menu';
import Exercise from './pages/Exercise';
import Gameimagenumber from './pages/Gameimagenumber';
import Matchnumber from './pages/Matchnumber';
import Numbercount from './pages/Numbercount';
import Numbersinvisible from './pages/Numbersinvisible';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/menu">
          <Menu />
          <Redirect to="/menu" />
        </Route>

        <Route exact path='/exercise'>
          <Exercise />
          <Redirect to="/exercise" />
        </Route>
        
        <Route exact path='/Gameimagenumber'>
          <Gameimagenumber />
          <Redirect to="/Gameimagenumber" />
        </Route>

        <Route exact path='/matchnumber'>
          <Matchnumber />
          <Redirect to="/matchnumber" />
        </Route>

        <Route exact path='/Numbercount'>
          <Numbercount />
          <Redirect to="/Numbercount" />
        </Route>

        <Route exact path='/Numbersinvisible'>
          <Numbersinvisible />
          <Redirect to="/Numbersinvisible" />
        </Route>

        <Route exact path='/correct'>
          <Correct />
          <Redirect to="/correct" />
        </Route>

        <Route exact path='/False'>
          <False />
          <Redirect to="/False" />
        </Route>



      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
