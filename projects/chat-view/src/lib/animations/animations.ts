import { animate, animation, style } from '@angular/animations';

  export const messagePushAnimation = animation([
    style({
      opacity: '{{ opacity }}',
      transform: 'translateY({{translateY}}%)'
    }),
    animate('{{ time }}')
  ]);