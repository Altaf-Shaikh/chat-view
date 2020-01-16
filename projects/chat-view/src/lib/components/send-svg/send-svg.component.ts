import { Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'send-svg',
    templateUrl: 'send-svg.component.html',
    styleUrls: ['./send-svg.component.scss']
})

/**
 * SVG Image component for send icon image.
 * Color of this SVG component can be set dynamically using 'color' input property
 * @export
 * @class SendSVGImage
 * @implements {OnInit}
 */
export class SendSVGImage implements OnInit {


    /**
     * Set color of SVG image component
     * @memberof SendSVGImage
     */
    @Input('color') color;

    constructor() {
      this.color=""
    }

    ngOnInit() {
    }

}