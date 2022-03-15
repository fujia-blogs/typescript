var Person = /** @class */ (function () {
    function Person(run) {
        console.log('constructor');
        run();
    }
    Person.prototype.then = function () {
        var self = this;
        return new Person(function () {
            // @ts-ignore
            console.log('then', self === this);
        });
    };
    return Person;
}());
var p = new Person(function () {
    console.log('method');
});
p.then();
