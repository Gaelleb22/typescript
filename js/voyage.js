"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [new Sejour("Kyoto", 3000), new Sejour("Sapporo", 2250), new Sejour("Osaka", 2700)];
    }
    SejourService.prototype.findByName = function (name) {
        this._sejours.forEach(function (element) {
            if (element.getNom() === name) {
                console.log(element.getNom() + " - " + element.getPrix() + "\u20AC");
            }
        });
        if (this._sejours.some(function (element) { return element.getNom() === name; }) === false) {
            console.log("No trip with name " + name);
        }
    };
    return SejourService;
}());
var sejourService = new SejourService();
sejourService.findByName('Kyoto');
sejourService.findByName('Tokyo');
