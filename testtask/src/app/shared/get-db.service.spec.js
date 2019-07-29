"use strict";
var testing_1 = require('@angular/core/testing');
var get_db_service_ts_1 = require('./get-db.service.ts');
describe('GetDbService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(get_db_service_ts_1.GetDbService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=get-db.service.spec.js.map