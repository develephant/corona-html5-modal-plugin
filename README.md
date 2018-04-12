# Corona HTML5 Modal Plugin

___A Modal Window Plugin for Corona HTML5 Games and Apps.___

👷 Built with __[Corona HTML5 Node Kit](https://develephant.github.io/corona-html5-node-kit-docs/)__.

## Usage

### Install

Download the plugin archive by __[clicking here](https://github.com/develephant/corona-html5-modal-plugin/archive/master.zip)__.

Expand teh archive, and move the __output_plugin/modal_js.js__ and __output_plugin/modal.lua__ files to your ___root___ project directory.

Your project tree should look like:

```
project/
  modal_js.js
  modal.lua
  main.lua
  ...
```

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
modal.resize(width, height)
```

__Arguments__

|Key|Description|Default|Required|
|---|-----------|-------|--------|
|`width`|The modal width in pixels.|current width|__Y__|
|`height`|The modal height in pixels.|current height|__Y__|

__Notes__

If you only want to change one of the dimensions, pass `nil` for the other.

### setContent

Replace the HTML content in the modal dynamically.

```lua
modal.setContent(html_content)
```

__Arguments__

|Key|Description|Default|Required|
|---|-----------|-------|--------|
|`content`|The HTML content to place in the modal.|`''`|__Y__|

### destroy

Destroy the modal object. You will need to use `create` to start a new modal.

```lua
modal.destroy()
```

## Modal Content

### Images

You can use images that are stored in your Corona HTML5 output directory in the modal content.

```
html5_output/
  image.png
  ...
```

__Example__

```lua
local html = [[
  <div>
    <img src="image.png" />
  </div>
]]

modal.create({
  content = html
})

modal.show()
```

### Closing

To hide the modal window from within the HTML content, use the javascript method `modal.hide()` within an `onclick` event.

__Example__

```html
<button onclick="modal.hide()">Close</button>
```

## Events

You can set up an event listner to listen for modal events. The following event types are supported:

 - `hide`
 - `show`
 - `resize`
 - `destroy`

__Example__

```lua
local function onModalEvent(e)
  if e.type == 'resize' then
    print('modal was resized')
  end
end

modal.addEventListener('modal', onModalEvent)
```