function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

function update_quality() {
  // make sure quality doesn't go out of range
  function updateQuality(quality, n) {
    const q = quality + n;
    switch (true) {
      case q < 0:
        return 0;
      case q > 50:
        return 50;
      default:
        return q;
    }
  }

  items.map(item => {
    switch (item.name) {
      case "Aged Brie":
        item.quality = updateQuality(item.quality, 1);
        item.sell_in--;
        break;

      case "Sulfuras, Hand of Ragnaros":
        // nothing to do here
        break;

      case "Backstage passes to a TAFKAL80ETC concert":
        switch (true) {
          case item.sell_in > 10:
            item.quality = updateQuality(item.quality, 1);
            break;
          case item.sell_in > 5:
            item.quality = updateQuality(item.quality, 2);
            break;
          case item.sell_in > 0:
            item.quality = updateQuality(item.quality, 3);
            break;
          default:
            item.quality = item.quality = 0;
            break;
        }
        item.sell_in--;
        break;

      case "Conjured Mana Cake":
        item.quality =
        item.sell_in > 0
          ? updateQuality(item.quality, -2)
          : updateQuality(item.quality, -4);
        item.sell_in--;
        break;

      // normal item
      default:
        item.quality =
          item.sell_in > 0
            ? updateQuality(item.quality, -1)
            : updateQuality(item.quality, -2);
        item.sell_in--;
        break;
    }
  });
}
