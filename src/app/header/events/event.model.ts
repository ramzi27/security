export type EventTypes =
    'LOGIN' | 'LOGOUT' | 'UNKNOWN' | 'WHITELIST' | 'BLACKLIST';

export class Event {
    eventType: EventTypes;
    event: string;
    date: string;


    constructor(eventType: EventTypes, event: string, date: string) {
        this.eventType = eventType;
        this.event = event;
        this.date = date;
    }
}
