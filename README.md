# Corona HTML5 Modal Plugin

A modal window for Corona HTML5 games and apps.

## Usage

### Install

### Require

```lua
local modal = require("modal")
```

## API

### create

Creates a new modal object. Modals are centered horizontally.

You must call the `show` method to display a created modal.

```lua
modal.create(config)
```

__Config Table__

|Key|Description|Default|Required|
|---|-----------|-------|--------|
|`content`|The HTML content to place in the modal.|`''`|__Y__|
|`width`|The modal width in pixels.|728|__N__|
|`height`|The modal height in pixels.|90|__N__|
|`top`|The modal "y" position in pixels.|160|__N__|
|`padding`|Amount of padding in the modal as pixels.|0|__N__|
|`bgColor`|The modal background color as hex or named color value.|`'#ffffff'`|__N__|
|`color`|The modal default text color as hex or named color value.|`'#000000'`|__N__|
|`border`|Enabled borders on the modal.|`false`|__N__|
|`borderSize`|Set the border size in pixels. `border` must be enabled.|none|__N__|
|`borderColor`|Set the border color as hex or named color value. `border` must be enabled.|none|__N__|
|`radius`|The modal corner radius in pixels.|none|__N__|
|`shadow`|Enable a drop shadow for the modal.|`false`|__N__|

__Example__

```lua
local modal = require("modal")

modal.create({
  width = 600,
  height = 50,
  content = [[
    <p>Here is some HTML modal content.</p>
  ]]
})

modal.show()
```

### show

Show the modal.

```lua
modal.show()
```

### hide

Hide the modal.

```lua
modal.hide()
```

### toggle

Toggle the modal from hide/show state.

```lua
modal.toggle()
```

### resize

Resize the modal dynamically.

```lua
modal.resize(width[, height])
```

__Arguments__

|Key|Description|Default|Required|
|---|-----------|-------|--------|
|`content`|The HTML content to place in the modal.|`''`|__Y__|


### setContent

Replace the HTML content in the modal dynamically.

```lua
modal.setContent(html_content)
```

__Arguments__

|Key|Description|Default|Required|
|---|-----------|-------|--------|
|`width`|The modal width in pixels.|728|__N__|

### destroy

Destroy the modal object. You will need to use `create` to start a new modal.

```lua
modal.destroy()
```

## Modal Content

### Closing

To hide the modal window from within the HTML content, use the javascript method `modal.hide()`

__Example__

```html
<button onclick="modal.hide()">Close</button>
```