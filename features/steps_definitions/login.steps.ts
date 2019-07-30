import { Stage } from "@serenity-js/core/lib/stage";
import { Navigate } from "../../src/navigate/navigate";
import { IngresoFacebook } from "../../src/login/task/IngresoFacebook";
import { WebDriver, browser } from "protractor";
import { Actor } from "serenity-js/lib/screenplay";
import { BeforeAll, After, Status, AfterAll } from "cucumber";
 
export = function loginSteps() {

    BeforeAll({timeout: 100 * 1000}, async () => {
        await browser.get('https://www.facebook.com');
    });
    
    After(async function(scenario) {
        if (scenario.result.status === Status.FAILED) {
            // screenShot is a base-64 encoded PNG
             const screenShot = await browser.takeScreenshot();
             this.attach(screenShot, "image/png");
        }
    });
    
    AfterAll({timeout: 100 * 1000}, async () => {
        await browser.quit();
    });
    this.Given(/^that James opens the Login page$/, function (callback) {
        return this.stage.TheActorCalled('Kames').attemptsTo(Navigate.toFaceboook())
        });
   
    this.When(/^he enters a wrong credentials$/, function (callback) { 
        return this.Stage.theActorInTheSpotLight().attemptsTo(IngresoFacebook.as('james','123'))
     });
   
   this.Then(/^he should be warned about the invalid credentials$/, function (callback) {
   })
}