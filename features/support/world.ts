import { serenity } from 'serenity-js';
import { Actors } from 'C:/Users/tanigral/Documents/SerenityJs/actors';

export = function () {

    this.setDefaultTimeout(60 * 1000);

    this.World = function () {
        this.stage = serenity.callToStageFor(new Actors());
    };
};