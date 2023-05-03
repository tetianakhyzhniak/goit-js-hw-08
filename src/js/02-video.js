import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const KEY_TIME = 'videoplayer-current-time'
const player = new Player('handstick', {
    id: 19231868,
    width: 640
});
const onPlay = function (data) {
    localStorage.setItem(KEY_TIME, JSON.stringify(data.seconds));
    };
player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = Number(localStorage.getItem(KEY_TIME));
   
player.setCurrentTime(currentTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
    
            default:
                break;
        }
    });
   
