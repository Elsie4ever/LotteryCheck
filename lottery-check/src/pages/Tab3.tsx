import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LotteryInput from '../components/lotteryInput';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LotteryInput lotteryBrand='TBD' inputNumber={3} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
