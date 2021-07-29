import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mango Bakes Cakes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className="centerImage">
    <div>
      <img src="./assets/img/logo.png"alt="logo"/></div>
  </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
