describe("Gilded Rose", function() {
  // fixing this test case rather than just delete it
  it("should not change name", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

  describe("Normal item", function() {
    it("should lower quality", function() {
      items = [ new Item('+5 Dexterity Vest', 10, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(19);
    });

    it("should lower quality by 2 once sell in date is reached", function() {
      items = [ new Item('+5 Dexterity Vest', 2, 20) ];
      // a bit less code than calling update_quality() in a for loop
      Array(3).fill().map(update_quality);
      expect(items[0].quality).toEqual(16);
    });

    it("should not lower quality below 0", function() {
      items = [ new Item('+5 Dexterity Vest', 10, 5) ];
      Array(6).fill().map(update_quality);
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("Aged Brie", function() {
    it("should increase quality", function() {
      items = [ new Item('Aged Brie', 2, 5) ];
      update_quality();
      expect(items[0].quality).toEqual(6);
    });

    it("should not increase quality above 50", function() {
      items = [ new Item('Aged Brie', 2, 48) ];
      Array(3).fill().map(update_quality);
      expect(items[0].quality).toEqual(50);
    });
  });

  describe("Sulfura", function() {
    it("should not change quality from 80", function() {
      items = [ new Item('Sulfuras, Hand of Ragnaros', 2, 80) ];
      update_quality();
      expect(items[0].quality).toEqual(80);
    });

    it("should not change sell in date", function() {
      items = [ new Item('Sulfuras, Hand of Ragnaros', 2, 80) ];
      update_quality();
      expect(items[0].sell_in).toEqual(2);
    });
  });

  describe("Backstage pass", function() {
    it("should increase quality by 1 10+ days from expiration", function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(21);
    });

    it("should increase quality by 2 6-10 days from expiration", function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(22);
    });

    it("should increase quality by 3 1-5 days from expiration", function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(23);
    });

    it("should drop quality to 0 after expiration", function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 20) ];
      update_quality(); 
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it("should not increase quality above 50", function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 40) ];
      Array(8).fill().map(update_quality);
      expect(items[0].quality).toEqual(50);
    });
  });
});
