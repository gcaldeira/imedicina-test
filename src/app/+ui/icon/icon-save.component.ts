import { Component } from '@angular/core';

@Component({
  selector: 'icon-save',
  host: { class: 'icon' },
  template:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 448 448">' +
    '  <path fill="currentColor" d="M404,116l-71.9-71.9A41.15,41.15,0,0,0,303,32H73.14A41.14,41.14,0,0,0,32,73.14V374.86A41.14,41.14,0,0,0,73.14,416H374.86A41.14,41.14,0,0,0,416,374.86V145A41.15,41.15,0,0,0,404,116ZM278.86,59.43v82.28H114.29V59.43ZM388.57,374.86a13.71,13.71,0,0,1-13.71,13.71H73.14a13.71,13.71,0,0,1-13.71-13.71V73.14A13.71,13.71,0,0,1,73.14,59.43H86.86v89.14a20.57,20.57,0,0,0,20.57,20.57H285.71a20.57,20.57,0,0,0,20.58-20.57V59.85a13.59,13.59,0,0,1,6.36,3.6l71.9,71.9a13.6,13.6,0,0,1,4,9.69ZM224,203.43a75.43,75.43,0,1,0,75.43,75.43A75.43,75.43,0,0,0,224,203.43Zm0,123.43a48,48,0,1,1,48-48A48,48,0,0,1,224,326.86Z" />' +
    '</svg>',
  styleUrls: ['./icon.scss']
})
export class IconSaveComponent {
}
