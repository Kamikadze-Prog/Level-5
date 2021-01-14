// @ts-ignore
import moment = require("moment");

export function sayHello(name: string) {
    return `${name} ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
}