import {
    IonHeader,
    IonTitle,
    IonToolbar,
} from "@ionic/react";

interface HeaderParams {
    title: string
}

const Header: React.FC<HeaderParams> = (params: HeaderParams) => (
    <IonHeader>
        <IonToolbar color="primary">
            <IonTitle>{params.title}</IonTitle>
        </IonToolbar>
    </IonHeader>
);

export default Header;