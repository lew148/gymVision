import {
    IonButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

interface HeaderParams {
    title: string
}

const Header: any = (params: HeaderParams) => (
    <IonHeader>
        <IonToolbar color="primary">
            <IonButtons slot="primary">
                <IonButton>
                    <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
                </IonButton>
            </IonButtons>
            <IonTitle>{params.title}</IonTitle>
        </IonToolbar>
    </IonHeader>
);

export default Header;