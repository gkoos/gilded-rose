# Refactoring notes

## 1. Adding tests
The tests I added for the existing function are based on the specification, not the implementation. However looking at the code some things stand out:
- From the implementation it turns out that Aged Brie quality increases by 2 after expiration. This is not mentioned in the specs, so I decided to discard this behavior. In production code this would need more clarification/investigation.
- Sulfuras with quality other than 80 can be added, however the specs explicitly says its quality always has to be 80. As we cannot change `Items`, this can't be fixed, we just go ahead with not changing the quality of Sulfuras over time.

## 2. Rewrite function
The code was too messy to bother refactoring so I rewrote it from scratch, based on the specs and the previously set up test suite.  
Normally some kind of Strategy pattern would apply here, but as we're not allowed to change Items we don't have this option.  
Instead of nested if's I used switch statement, this may be a bit more readable.

## 3. Adding the new feature
"Conjured" items degrade in Quality twice as fast as normal items - meaning quality drops by 2 until expiration, by 4 thereafter.  
Test cases are added and the new feature could be implemented with 4 lines of code.

## TODO
- Some hardcoded values like min and max quality could be configurable.
- Item names are hardcoded as well.
