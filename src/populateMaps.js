const sketch = require("sketch");
const { DataSupplier, UI } = sketch;
const util = require("util");

export function onStartup() {
  DataSupplier.registerDataSupplier(
    "public.text",
    "Populate map(s)",
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
    let maps = [
      "Getting started with Plectica",
      "Flickery UI feedback map",
      "2019Q2 Sprint 4",
      "2018Q3 Sprint 6 Demonstration",
      "Ducks of the World",
      "AllHands 14May19 (Q2S4W1)",
      "Plectica VMCL v2.0",
      "Sandy Systems Thinker",
      "Resizing cards punchlist / 2019Q2 Sprint 3",
      "Certification landing pages",
      "Plectica Certification Structure (as of April 2019)",
      "3 Easy Pieces: Systems Thinking, Systems Leadership and Systems Mapping",
      "Team workspace brainstorming",
      "Tools language updates",
      "Rich text story start / 2019Q2 Sprint 4",
      "Design review - 5/16"
    ];
    let number = Math.floor(Math.random() * maps.length);
    let data = maps[number];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
    UI.message("✅ Done");
  });
}
