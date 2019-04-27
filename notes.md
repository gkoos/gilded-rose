# Refactoring notes

## 1. Adding tests
The tests I added for the existing function are based on the specification, not the implementation. However looking at the code some things stand out:
- From the implementation it turns out that Aged Brie quality increases by 2 after expiration. This is not mentioned in the specs, so I decided to discard this behavior. In production code this would need more clarification/investigation.
- Sulfuras with quality other than 80 can be added, however the specs explicitly says its quality always has to be 80. As we cannot change `Items`, this can't be fixed, we just go ahead with not changing the quality of Sulfuras over time.
