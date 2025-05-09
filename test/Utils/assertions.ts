import AllureReporter from '@wdio/allure-reporter';
import { expect as expectChai } from 'chai';

class Assertion {
     addLog(log: string) {
        AllureReporter.addStep(`STEP: ${log}`)
        console.log(`STEP: ${log}`)
    }
     toContain(actual: string, expected: string) {
        expectChai(actual).to.contain(expected)
        driver.logUtil("PASS", "assertion ->" + '"' + actual + '"' + " contains " + '"' + expected + '"' + " are matched")
    }
     notEqual(actual: string, expected: string) {
        expectChai(actual).to.not.equal(expected)
        driver.logUtil("PASS", "assertion -> " + '"' + actual + '"' + " is not eqaul to " + '"' + expected + '"')
    }
     toEqual(actual: string, expected: string) {
        expectChai(actual).to.equal(expected)
        driver.logUtil("PASS", "Assertion --> " + '"' + actual + '"' + " and " + '"' + expected + '"' + " are matched")
    }
}
export default new Assertion()
