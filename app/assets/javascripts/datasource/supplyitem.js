isc.RestDataSource.create({
    "ID": "suppyItem",
    "fields":[
        {"name":"itemID", "type":"sequence", "hidden":"true", "primaryKey":"true"},
        {"name":"itemName", "type":"text", "title":"Item", "length":"128", "required":"true"},
        {"name":"SKU", "type":"text", "title":"SKU", "length":"10", "required":"true"},
        {"name":"description", "type":"text", "title":"Description", "length":"2000"},
        {"name":"category", "type":"text", "title":"Category", "length":"128", "required":"true" },
        {"name":"units", "type":"enum", "title":"Units", "length":"5",
            "valueMap":["Roll", "Ea", "Pkt", "Set", "Tube", "Pad", "Ream", "Tin", "Bag", "Ctn", "Box"]
        },
        {"name":"unitCost", "type":"float", "title":"Unit Cost",
            "validators":[
                {"type":"floatRange", "min":"0", "errorMessage":"Please enter a valid (positive) cost"},
                {"type":"floatPrecision", "precision":"2", "errorMessage":"The maximum allowed precision is 2"}
            ]
        },
 
        {"name":"inStock", "type":"boolean", "title":"In Stock"},
        {"name":"nextShipment", "type":"date", "title":"Next Shipment"}
    ],
    "criteriaPolicy":"dropOnChange",
    "dataFormat":"json",
    "operationBindings": [
                { "operationType": "fetch", "dataProtocol": "postMessage", "dataURL": "/smartclient/data" },                
                { "operationType": "add", "dataProtocol": "postMessage", "dataURL": "/smartclient/data" },
                { "operationType": "update", "dataProtocol": "postMessage", "dataURL": "/smartclient/data" },
                { "operationType": "remove", "dataProtocol": "postMessage", "dataURL": "/smartclient/data" }
            ] 
});