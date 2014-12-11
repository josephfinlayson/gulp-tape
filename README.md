# better-capitalize

Capitalize the first letter of a string, or all words in a string, or all items in an array.

## Synopsis

Capitalize the first letter of a string:

```javascript
var capitalize = require('./') //initializes better-capitalize

var test = require('tape')

test('Capitalize first letter', function (t) {
  t.plan(1)
  t.equal(capitalize("united"), "United")
})
```

Or capitalize each word in a string:

```
test('Capitalize each word', function (t) {
  t.plan(1)
  t.equal(capitalize("united states"), "United States")
})
```

Or capitalize each word in an array:

```
test('Capitalize each element of array', function (t) {
  t.plan(1)
  t.deepEqual(capitalize(['united', 'kingdom']), Array('United','Kingdom'))
})
```
or with spaces
```
test('Capitalize each element of array with spaces', function (t) {
  t.plan(1)
  t.deepEqual(capitalize(['united kingdom', 'kingdom of the best people']), Array('United Kingdom','Kingdom Of The Best People'))
})
```

For everthing else it returns false

```
test('Return false when undefined', function (t) {
  t.plan(1)
  t.equal(capitalize(), false)
})

test('Return false when empty array', function (t) {
  t.plan(1)
  t.equal(capitalize([]), false)
})

test('Return false when object', function (t) {
  t.plan(1)
  t.equal(capitalize({}), false)
})
```

## Install

    npm install better-capitalize

## License

MIT
