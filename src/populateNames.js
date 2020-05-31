const sketch = require("sketch");
const { DataSupplier, UI } = sketch;
const util = require("util");

export function onStartup() {
  DataSupplier.registerDataSupplier(
    "public.text",
    "Populate name(s)",
    "SupplyData"
  );
}

export function onShutdown() {
  DataSupplier.deregisterDataSuppliers();
}

export function onSupplyData(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let names = [
      "Abhi Bassi",
      "Adam Riggs",
      "Agustin Diaz",
      "Chris Becker",
      "Daniel Dyssegaard Kallick",
      "Danielle Mearis Harrell",
      "David Chester",
      "Derek Cabrera",
      "Doug Brunton",
      "Jessica Sokolow",
      "Laura Cabrera",
      "Logan Bell",
      "Mallika Simone",
      "Mark Sherrill",
      "Pablo Scasso",
      "Scott Campbell",
      "V Greene"
    ];
    let number = Math.floor(Math.random() * names.length);
    let data = names[number];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
    UI.message("✅ Done");
  });
}
