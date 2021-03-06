"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//import {ProductsService} from 'products.service/products.service';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'testtask';
        this.filtertagsright = '';
        this.filtertagsleft = '';
        this.filtertagsright1 = '';
        this.filtertagsleft1 = '';
        this.db = [
            {
                "id": 1024,
                "name": "Test NYC Freestyle",
                "sku": "NC-F1",
                "price": 200,
                "validValue": 2,
                "customerType": "ADULT",
                "type": "PASS_LIMITED",
                "includes": [
                    {
                        "id": 1057,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1026,
                            "name": "Space trips Attraction",
                            "sku": "NC-A1",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1058,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1027,
                            "name": "Bus trips Attraction",
                            "sku": "NC-A2",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1059,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1028,
                            "name": "Forest walks Attraction",
                            "sku": "NC-A3",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1060,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1029,
                            "name": "Sea breeze Attraction",
                            "sku": "NC-A4",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1061,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1030,
                            "name": "NYC sightseeing Attraction",
                            "sku": "NC-A5",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1062,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1032,
                            "name": "Guggenheim Museum",
                            "sku": "NC-B1",
                            "price": 125,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1023,
                    "name": "Blu Line",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1189,
                "name": "Test NYC Unlimited",
                "sku": "TNYCU",
                "price": 440,
                "validValue": 1,
                "customerType": "ADULT",
                "type": "PASS_UNLIMITED",
                "includes": [],
                "vendor": {
                    "id": 1023,
                    "name": "Blu Line",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1205,
                "name": "Test NYC Unlimited",
                "sku": "TNYCU2",
                "price": 640,
                "validValue": 1,
                "customerType": "ADULT",
                "type": "PASS_UNLIMITED",
                "includes": [
                    {
                        "id": 1206,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1026,
                            "name": "Space trips Attraction",
                            "sku": "NC-A1",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1207,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1027,
                            "name": "Bus trips Attraction",
                            "sku": "NC-A2",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1208,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1028,
                            "name": "Forest walks Attraction",
                            "sku": "NC-A3",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1209,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 1029,
                            "name": "Sea breeze Attraction",
                            "sku": "NC-A4",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1210,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 1030,
                            "name": "NYC sightseeing Attraction",
                            "sku": "NC-A5",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1211,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 1032,
                            "name": "Guggenheim Museum",
                            "sku": "NC-B1",
                            "price": 125,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1023,
                    "name": "Blu Line",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1381,
                "name": "Mars tour for our parents",
                "sku": "MT-1-S",
                "price": 10000,
                "validValue": 200,
                "customerType": "SENIOR",
                "type": "BASIC_VALID_HOURS",
                "includes": [],
                "vendor": {
                    "id": 1271,
                    "name": "Space trips",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1026,
                "name": "Space trips Attraction",
                "sku": "NC-A1",
                "price": 25,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1271,
                    "name": "Space trips",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1028,
                "name": "Forest walks Attraction",
                "sku": "NC-A3",
                "price": 25,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1272,
                    "name": "Forest walks",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1029,
                "name": "Sea breeze Attraction",
                "sku": "NC-A4",
                "price": 25,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1273,
                    "name": "Sea breeze",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1030,
                "name": "NYC sightseeing Attraction",
                "sku": "NC-A5",
                "price": 25,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1634,
                    "name": "NYC sightseeing",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1032,
                "name": "Guggenheim Museum",
                "sku": "NC-B1",
                "price": 125,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1643,
                    "name": "City museums",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1027,
                "name": "Bus trips Attraction",
                "sku": "NC-A2",
                "price": 25,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1654,
                    "name": "Bus trips",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1718,
                "name": "FreeStyle NYC Limited",
                "sku": "FNYCL2",
                "price": 640,
                "validValue": 2,
                "customerType": "ADULT",
                "type": "PASS_LIMITED",
                "includes": [
                    {
                        "id": 1719,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1026,
                            "name": "Space trips Attraction",
                            "sku": "NC-A1",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1720,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1027,
                            "name": "Bus trips Attraction",
                            "sku": "NC-A2",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1721,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1028,
                            "name": "Forest walks Attraction",
                            "sku": "NC-A3",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1722,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 1029,
                            "name": "Sea breeze Attraction",
                            "sku": "NC-A4",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1723,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 1030,
                            "name": "NYC sightseeing Attraction",
                            "sku": "NC-A5",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1724,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 1032,
                            "name": "Guggenheim Museum",
                            "sku": "NC-B1",
                            "price": 125,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1023,
                    "name": "Blu Line",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1340,
                "name": "Mars tour",
                "sku": "MT_Adult",
                "price": 10000,
                "validValue": 200,
                "customerType": "ADULT",
                "type": "BASIC_VALID_HOURS",
                "includes": [],
                "vendor": {
                    "id": 1271,
                    "name": "Space trips",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1380,
                "name": "Mars tour for children",
                "sku": "MT_Child",
                "price": 10000,
                "validValue": 200,
                "customerType": "CHILD",
                "type": "BASIC_VALID_HOURS",
                "includes": [],
                "vendor": {
                    "id": 1271,
                    "name": "Space trips",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1958,
                "name": "Madame Tussaud's",
                "sku": "MTUS_Adult",
                "price": 33,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1947,
                    "name": "Madame Tussaud's",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1959,
                "name": "Ripley's Believe It or Not",
                "sku": "RBIN_Adult",
                "price": 33,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1948,
                    "name": "Ripley's Believe It or Not",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1961,
                "name": "One World Observatory",
                "sku": "OWO_Adult",
                "price": 33,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1950,
                    "name": "One World Observatory",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1962,
                "name": "Guggenheim Museum",
                "sku": "GM_Adult",
                "price": 33,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1952,
                    "name": "Guggenheim Museum",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1963,
                "name": "Metropolitan Museum of Art",
                "sku": "MMA_Adult",
                "price": 25,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1953,
                    "name": "Metropolitan Museum of Art",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1964,
                "name": "Intrepid Sea-Air-Space Museum",
                "sku": "INTREPID_Adult",
                "price": 31,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1954,
                    "name": "Intrepid Sea-Air-Space Museum",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1966,
                "name": "All-Around Town Bus Tour",
                "sku": "ATBT_Adult",
                "price": 84,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1968,
                "name": "FreeStyle Pass New York",
                "sku": "FSNBC_Adult",
                "price": 104,
                "validValue": 3,
                "customerType": "ADULT",
                "type": "PASS_LIMITED",
                "includes": [
                    {
                        "id": 1969,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1956,
                            "name": "Empire State Building Observatory",
                            "sku": "ESBO_Adult",
                            "price": 32,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 25
                        }
                    },
                    {
                        "id": 1970,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1958,
                            "name": "Madame Tussaud's",
                            "sku": "MTUS_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1971,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1959,
                            "name": "Ripley's Believe It or Not",
                            "sku": "RBIN_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1972,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1960,
                            "name": "Top of the Rock Observation Deck",
                            "sku": "TROD_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 30
                        }
                    },
                    {
                        "id": 1973,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1961,
                            "name": "One World Observatory",
                            "sku": "OWO_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1974,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1962,
                            "name": "Guggenheim Museum",
                            "sku": "GM_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1975,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1963,
                            "name": "Metropolitan Museum of Art",
                            "sku": "MMA_Adult",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1976,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1964,
                            "name": "Intrepid Sea-Air-Space Museum",
                            "sku": "INTREPID_Adult",
                            "price": 31,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 1977,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 1966,
                            "name": "All-Around Town Bus Tour",
                            "sku": "ATBT_Adult",
                            "price": 84,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2106,
                "name": "FreeStyle Pass New York",
                "sku": "FSN5BC_Adult",
                "price": 129,
                "validValue": 5,
                "customerType": "ADULT",
                "type": "PASS_LIMITED",
                "includes": [
                    {
                        "id": 2112,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1962,
                            "name": "Guggenheim Museum",
                            "sku": "GM_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2113,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1963,
                            "name": "Metropolitan Museum of Art",
                            "sku": "MMA_Adult",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2114,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1964,
                            "name": "Intrepid Sea-Air-Space Museum",
                            "sku": "INTREPID_Adult",
                            "price": 31,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2115,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 1966,
                            "name": "All-Around Town Bus Tour",
                            "sku": "ATBT_Adult",
                            "price": 84,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2107,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1956,
                            "name": "Empire State Building Observatory",
                            "sku": "ESBO_Adult",
                            "price": 32,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 25
                        }
                    },
                    {
                        "id": 2108,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1958,
                            "name": "Madame Tussaud's",
                            "sku": "MTUS_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2109,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1959,
                            "name": "Ripley's Believe It or Not",
                            "sku": "RBIN_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2110,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1960,
                            "name": "Top of the Rock Observation Deck",
                            "sku": "TROD_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 30
                        }
                    },
                    {
                        "id": 2111,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1961,
                            "name": "One World Observatory",
                            "sku": "OWO_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2171,
                "name": "Ripley's Believe It or Not",
                "sku": "RBIN_Child",
                "price": 33,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1948,
                    "name": "Ripley's Believe It or Not",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2173,
                "name": "One World Observatory",
                "sku": "OWO_Child",
                "price": 33,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1950,
                    "name": "One World Observatory",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2174,
                "name": "Guggenheim Museum",
                "sku": "GM_Child",
                "price": 33,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1952,
                    "name": "Guggenheim Museum",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2175,
                "name": "Metropolitan Museum of Art",
                "sku": "MMA_Child",
                "price": 25,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1953,
                    "name": "Metropolitan Museum of Art",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2176,
                "name": "Intrepid Sea-Air-Space Museum",
                "sku": "INTREPID_Child",
                "price": 31,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1954,
                    "name": "Intrepid Sea-Air-Space Museum",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1960,
                "name": "Top of the Rock Observation Deck",
                "sku": "TROD_Adult",
                "price": 33,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1949,
                    "name": "Top of the Rock Observation Deck",
                    "allowManual": false
                },
                "allowRecharge": true,
                "rechargePrice": 30
            },
            {
                "id": 2170,
                "name": "Empire State Building Observatory",
                "sku": "ESBO_Child",
                "price": 32,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1946,
                    "name": "Empire State Building Observatory",
                    "allowManual": true
                },
                "allowRecharge": true,
                "rechargePrice": 25
            },
            {
                "id": 2172,
                "name": "Top of the Rock Observation Deck",
                "sku": "TROD_Child",
                "price": 33,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1949,
                    "name": "Top of the Rock Observation Deck",
                    "allowManual": false
                },
                "allowRecharge": true,
                "rechargePrice": 30
            },
            {
                "id": 2177,
                "name": "All-Around Town Bus Tour",
                "sku": "ATBT_Child",
                "price": 84,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2179,
                "name": "Madame Tussaud's",
                "sku": "MTUS_Child",
                "price": 33,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1947,
                    "name": "Madame Tussaud's",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2182,
                "name": "FreeStyle Pass New York",
                "sku": "FSNBC_Child",
                "price": 84,
                "validValue": 3,
                "customerType": "CHILD",
                "type": "PASS_LIMITED",
                "includes": [
                    {
                        "id": 2183,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2170,
                            "name": "Empire State Building Observatory",
                            "sku": "ESBO_Child",
                            "price": 32,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 25
                        }
                    },
                    {
                        "id": 2184,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2179,
                            "name": "Madame Tussaud's",
                            "sku": "MTUS_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2185,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2171,
                            "name": "Ripley's Believe It or Not",
                            "sku": "RBIN_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2186,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2172,
                            "name": "Top of the Rock Observation Deck",
                            "sku": "TROD_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 30
                        }
                    },
                    {
                        "id": 2187,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2173,
                            "name": "One World Observatory",
                            "sku": "OWO_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2188,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2174,
                            "name": "Guggenheim Museum",
                            "sku": "GM_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2189,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2175,
                            "name": "Metropolitan Museum of Art",
                            "sku": "MMA_Child",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2190,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2176,
                            "name": "Intrepid Sea-Air-Space Museum",
                            "sku": "INTREPID_Child",
                            "price": 31,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2191,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 2177,
                            "name": "All-Around Town Bus Tour",
                            "sku": "ATBT_Child",
                            "price": 84,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2194,
                "name": "FreeStyle Pass New York",
                "sku": "FSN5BC_Child",
                "price": 109,
                "validValue": 5,
                "customerType": "CHILD",
                "type": "PASS_LIMITED",
                "includes": [
                    {
                        "id": 2195,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2170,
                            "name": "Empire State Building Observatory",
                            "sku": "ESBO_Child",
                            "price": 32,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 25
                        }
                    },
                    {
                        "id": 2196,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2179,
                            "name": "Madame Tussaud's",
                            "sku": "MTUS_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2197,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2171,
                            "name": "Ripley's Believe It or Not",
                            "sku": "RBIN_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2198,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2172,
                            "name": "Top of the Rock Observation Deck",
                            "sku": "TROD_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 30
                        }
                    },
                    {
                        "id": 2199,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2173,
                            "name": "One World Observatory",
                            "sku": "OWO_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2200,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2174,
                            "name": "Guggenheim Museum",
                            "sku": "GM_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2201,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2175,
                            "name": "Metropolitan Museum of Art",
                            "sku": "MMA_Child",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2202,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2176,
                            "name": "Intrepid Sea-Air-Space Museum",
                            "sku": "INTREPID_Child",
                            "price": 31,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2203,
                        "type": "INCLUDE",
                        "connectedProduct": {
                            "id": 2177,
                            "name": "All-Around Town Bus Tour",
                            "sku": "ATBT_Child",
                            "price": 84,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 3003,
                "name": "Test Pass",
                "sku": "TP500_Adult",
                "price": 120,
                "validValue": 500,
                "customerType": "ADULT",
                "type": "PASS_UNLIMITED",
                "includes": [
                    {
                        "id": 3004,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1340,
                            "name": "Mars tour",
                            "sku": "MT_Adult",
                            "price": 10000,
                            "validValue": 200,
                            "customerType": "ADULT",
                            "type": "BASIC_VALID_HOURS",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3005,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1026,
                            "name": "Space trips Attraction",
                            "sku": "NC-A1",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1271,
                    "name": "Space trips",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 3011,
                "name": "Test Pass",
                "sku": "TP500_2_Adult",
                "price": 120,
                "validValue": 500,
                "customerType": "ADULT",
                "type": "PASS_UNLIMITED",
                "includes": [
                    {
                        "id": 3012,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1340,
                            "name": "Mars tour",
                            "sku": "MT_Adult",
                            "price": 10000,
                            "validValue": 200,
                            "customerType": "ADULT",
                            "type": "BASIC_VALID_HOURS",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3013,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1026,
                            "name": "Space trips Attraction",
                            "sku": "NC-A1",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1271,
                    "name": "Space trips",
                    "allowManual": false
                },
                "allowRecharge": null,
                "rechargePrice": null
            },
            {
                "id": 3014,
                "name": "Test Pass",
                "sku": "TP500_3_Adult",
                "price": 120,
                "validValue": 500,
                "customerType": "ADULT",
                "type": "PASS_UNLIMITED",
                "includes": [
                    {
                        "id": 3015,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1340,
                            "name": "Mars tour",
                            "sku": "MT_Adult",
                            "price": 10000,
                            "validValue": 200,
                            "customerType": "ADULT",
                            "type": "BASIC_VALID_HOURS",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3016,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1026,
                            "name": "Space trips Attraction",
                            "sku": "NC-A1",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1271,
                    "name": "Space trips",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 3114,
                "name": "Demo Tour",
                "sku": "TT_Adult",
                "price": 120,
                "validValue": 5000,
                "customerType": "ADULT",
                "type": "BASIC_VALID_HOURS",
                "includes": [],
                "vendor": {
                    "id": 3103,
                    "name": "demovendor",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 2300,
                "name": "City Sights Pass",
                "sku": "CSP1_Adult",
                "price": 120,
                "validValue": 1,
                "customerType": "ADULT",
                "type": "PASS_CALENDAR",
                "includes": [
                    {
                        "id": 2304,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1960,
                            "name": "Top of the Rock Observation Deck",
                            "sku": "TROD_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 30
                        }
                    },
                    {
                        "id": 2305,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1961,
                            "name": "One World Observatory",
                            "sku": "OWO_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2306,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1962,
                            "name": "Guggenheim Museum",
                            "sku": "GM_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2307,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1963,
                            "name": "Metropolitan Museum of Art",
                            "sku": "MMA_Adult",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2308,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1964,
                            "name": "Intrepid Sea-Air-Space Museum",
                            "sku": "INTREPID_Adult",
                            "price": 31,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2301,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1956,
                            "name": "Empire State Building Observatory",
                            "sku": "ESBO_Adult",
                            "price": 32,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 25
                        }
                    },
                    {
                        "id": 2302,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1958,
                            "name": "Madame Tussaud's",
                            "sku": "MTUS_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 2303,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1959,
                            "name": "Ripley's Believe It or Not",
                            "sku": "RBIN_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 1956,
                "name": "Empire State Building Observatory",
                "sku": "ESBO_Adult",
                "price": 32,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1946,
                    "name": "Empire State Building Observatory",
                    "allowManual": true
                },
                "allowRecharge": true,
                "rechargePrice": 25
            },
            {
                "id": 4363,
                "name": "All Bus Loops",
                "sku": "ABL_Adult",
                "price": 64,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 4364,
                "name": "All Bus Loops",
                "sku": "ABL_Child",
                "price": 54,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 4365,
                "name": "Hop on Hop off Boat",
                "sku": "HOPB_Adult",
                "price": 35,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 4366,
                "name": "Hop on Hop off Boat",
                "sku": "HOPB_Child",
                "price": 21,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 4367,
                "name": "Sunset Cruise",
                "sku": "SUNCRS_Adult",
                "price": 29,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 4368,
                "name": "Sunset Cruise",
                "sku": "SUNCRS_Child",
                "price": 18,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 4369,
                "name": "Twilight Cruise",
                "sku": "TWILCRS_Adult",
                "price": 29,
                "validValue": 0,
                "customerType": "ADULT",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 4370,
                "name": "Twilight Cruise",
                "sku": "TWILCRS_Child",
                "price": 18,
                "validValue": 0,
                "customerType": "CHILD",
                "type": "BASIC_SINGLE",
                "includes": [],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 3431,
                "name": "City Sights Pass",
                "sku": "PASS1_Adult",
                "price": 120,
                "validValue": 1,
                "customerType": "ADULT",
                "type": "PASS_CALENDAR",
                "includes": [
                    {
                        "id": 3432,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1956,
                            "name": "Empire State Building Observatory",
                            "sku": "ESBO_Adult",
                            "price": 32,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 25
                        }
                    },
                    {
                        "id": 3433,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1958,
                            "name": "Madame Tussaud's",
                            "sku": "MTUS_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3434,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1959,
                            "name": "Ripley's Believe It or Not",
                            "sku": "RBIN_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3435,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1960,
                            "name": "Top of the Rock Observation Deck",
                            "sku": "TROD_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 30
                        }
                    },
                    {
                        "id": 3436,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1961,
                            "name": "One World Observatory",
                            "sku": "OWO_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3437,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1962,
                            "name": "Guggenheim Museum",
                            "sku": "GM_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3438,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1963,
                            "name": "Metropolitan Museum of Art",
                            "sku": "MMA_Adult",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3439,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1964,
                            "name": "Intrepid Sea-Air-Space Museum",
                            "sku": "INTREPID_Adult",
                            "price": 31,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 3442,
                "name": "City Sights Pass",
                "sku": "PASS1_Child",
                "price": 84,
                "validValue": 1,
                "customerType": "CHILD",
                "type": "PASS_CALENDAR",
                "includes": [
                    {
                        "id": 3443,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2170,
                            "name": "Empire State Building Observatory",
                            "sku": "ESBO_Child",
                            "price": 32,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 25
                        }
                    },
                    {
                        "id": 3444,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2179,
                            "name": "Madame Tussaud's",
                            "sku": "MTUS_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3445,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2171,
                            "name": "Ripley's Believe It or Not",
                            "sku": "RBIN_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3446,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2172,
                            "name": "Top of the Rock Observation Deck",
                            "sku": "TROD_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 30
                        }
                    },
                    {
                        "id": 3447,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2173,
                            "name": "One World Observatory",
                            "sku": "OWO_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3448,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2174,
                            "name": "Guggenheim Museum",
                            "sku": "GM_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3449,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2175,
                            "name": "Metropolitan Museum of Art",
                            "sku": "MMA_Child",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 3450,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2176,
                            "name": "Intrepid Sea-Air-Space Museum",
                            "sku": "INTREPID_Child",
                            "price": 31,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 4382,
                "name": "3 Day Pass",
                "sku": "PASS3_Adult",
                "price": 145,
                "validValue": 3,
                "customerType": "ADULT",
                "type": "PASS_CALENDAR",
                "includes": [
                    {
                        "id": 4384,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1956,
                            "name": "Empire State Building Observatory",
                            "sku": "ESBO_Adult",
                            "price": 32,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 25
                        }
                    },
                    {
                        "id": 4385,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1958,
                            "name": "Madame Tussaud's",
                            "sku": "MTUS_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4386,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1959,
                            "name": "Ripley's Believe It or Not",
                            "sku": "RBIN_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4387,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1960,
                            "name": "Top of the Rock Observation Deck",
                            "sku": "TROD_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 30
                        }
                    },
                    {
                        "id": 4388,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1961,
                            "name": "One World Observatory",
                            "sku": "OWO_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4389,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1962,
                            "name": "Guggenheim Museum",
                            "sku": "GM_Adult",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4390,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1963,
                            "name": "Metropolitan Museum of Art",
                            "sku": "MMA_Adult",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4391,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 4369,
                            "name": "Twilight Cruise",
                            "sku": "TWILCRS_Adult",
                            "price": 29,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4392,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 1964,
                            "name": "Intrepid Sea-Air-Space Museum",
                            "sku": "INTREPID_Adult",
                            "price": 31,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4393,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 4363,
                            "name": "All Bus Loops",
                            "sku": "ABL_Adult",
                            "price": 64,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4394,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 4367,
                            "name": "Sunset Cruise",
                            "sku": "SUNCRS_Adult",
                            "price": 29,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4383,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 4365,
                            "name": "Hop on Hop off Boat",
                            "sku": "HOPB_Adult",
                            "price": 35,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    }
                ],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            },
            {
                "id": 4395,
                "name": "3 Day Pass",
                "sku": "PASS3_Child",
                "price": 100,
                "validValue": 3,
                "customerType": "CHILD",
                "type": "PASS_CALENDAR",
                "includes": [
                    {
                        "id": 4400,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 4370,
                            "name": "Twilight Cruise",
                            "sku": "TWILCRS_Child",
                            "price": 18,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4401,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2173,
                            "name": "One World Observatory",
                            "sku": "OWO_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4402,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2174,
                            "name": "Guggenheim Museum",
                            "sku": "GM_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4403,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2175,
                            "name": "Metropolitan Museum of Art",
                            "sku": "MMA_Child",
                            "price": 25,
                            "validValue": 0,
                            "customerType": "ADULT",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4404,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2176,
                            "name": "Intrepid Sea-Air-Space Museum",
                            "sku": "INTREPID_Child",
                            "price": 31,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4405,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 4364,
                            "name": "All Bus Loops",
                            "sku": "ABL_Child",
                            "price": 54,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4406,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 4366,
                            "name": "Hop on Hop off Boat",
                            "sku": "HOPB_Child",
                            "price": 21,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4407,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 4368,
                            "name": "Sunset Cruise",
                            "sku": "SUNCRS_Child",
                            "price": 18,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4396,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2170,
                            "name": "Empire State Building Observatory",
                            "sku": "ESBO_Child",
                            "price": 32,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 25
                        }
                    },
                    {
                        "id": 4397,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2179,
                            "name": "Madame Tussaud's",
                            "sku": "MTUS_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4398,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2171,
                            "name": "Ripley's Believe It or Not",
                            "sku": "RBIN_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": false,
                            "rechargePrice": 0
                        }
                    },
                    {
                        "id": 4399,
                        "type": "PASS",
                        "connectedProduct": {
                            "id": 2172,
                            "name": "Top of the Rock Observation Deck",
                            "sku": "TROD_Child",
                            "price": 33,
                            "validValue": 0,
                            "customerType": "CHILD",
                            "type": "BASIC_SINGLE",
                            "includes": [],
                            "allowRecharge": true,
                            "rechargePrice": 30
                        }
                    }
                ],
                "vendor": {
                    "id": 1955,
                    "name": "City Sightseeing NY",
                    "allowManual": false
                },
                "allowRecharge": false,
                "rechargePrice": 0
            }
        ];
        this.typeValues = {
            'BASIC_SINGLE': 'Basic single',
            'BASIC_VALID_HOURS': 'Basic valid hours',
            'PASS_LIMITED': 'Pass limited',
            'PASS_UNLIMITED': 'Pass unlimited'
        };
        this.customerTypeValues = {
            'ADULT': 'Adult',
            'CHILD': 'Child'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map