import * as React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LotteryInput from '../components/lotteryInput';
import { LotteryCheckContext } from '../context';
import { useLotteryCheck } from '../hooks/useLotteryCheck';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [lotteryCheckState, lotteryCheckInterface] = useLotteryCheck();

  React.useEffect(() => {
    if (lotteryCheckState.sectionMode === 'unitialized') {
      //TODO: once change to user based, update this
      lotteryCheckInterface.initialize([]);
    }
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LotteryCheckContext.Provider value={[lotteryCheckState, lotteryCheckInterface]}>
          <LotteryInput lotteryBrand='Powerball' inputNumber={6} />
        </LotteryCheckContext.Provider>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
