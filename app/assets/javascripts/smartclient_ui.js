isc.ListGrid.create({
    "ID": "suppyItem",
    "width": 700,
    "height": 224, 
    "alternateRecordStyles": true,
    "dataSource": suppyItem,
    "showFilterEditor": true,
    "autoFetchData": true,
    "dataPageSize": 20,
    "canEdit":true,
    "canRemoveRecords":true
});

isc.IButton.create({
    "top": 250,
    "title": "Edit New",
    "click": "suppyItem.startEditingNew()"
});