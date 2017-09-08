import { NavController } from '../../../../../..';
export declare class SessionList {
    navCtrl: NavController;
    data: ({
        'time': string;
        'talks': {
            'name': string;
            'location': string;
            'description': string;
            'speaker': string;
            'timestart': string;
            'timeend': string;
            'category': string;
        }[];
    } | {
        'time': string;
        'talks': {
            'name': string;
            'timestart': string;
            'timeend': string;
            'location': string;
            'description': string;
            'category': string;
        }[];
    } | {
        'time': string;
        'talks': {
            'name': string;
            'timestart': string;
            'timeend': string;
            'location': string;
            'category': string;
        }[];
    })[];
    constructor(navCtrl: NavController);
    addFavorite(timeSlot: any, session: any, slidingItem: any): void;
    openSession(session: any): void;
    reload(): void;
}
