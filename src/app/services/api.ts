import {User} from './user';

const APIS = (baseUrl: string, user: User) => {
    return {
        users: {
            add: baseUrl + user.dbType + '/add_user',
            remove: baseUrl + user.dbType + '/remove_user/' + user.id,
            get: baseUrl + user.dbType + '/users'
        },
        image: {
            upload: baseUrl + 'images/' + user.dbType + '/' + user.id,
            names: baseUrl + 'images/' + user.dbType + '/' + user.id,
            get: baseUrl + 'images/' + user.dbType + '/' + user.id + '/'
        }
    };
};
export const stream = (baseUrl: string) => {
    return {
        live: baseUrl + 'video_feed',
        stop: '',
        start: '',
        reload_model: ''
    };
};

export default APIS;