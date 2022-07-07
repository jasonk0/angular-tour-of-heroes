import { animate, state, style, transition, trigger } from '@angular/animations';
export const flyInOut = trigger('flyInOut', [
      // ...
      state('true', style( {transform: 'translateX(0)'})),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100vw)' }))
      
      ]),
 ])
