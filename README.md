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

```lua
modal.create(config)
```

__Config Table__

|Key|Description|Default|Required|
|---|-----------|-------|--------|
|content|desc|`''`|__Y__|
|width|desc|728|__N__|
|height|desc|90|__N__|
|top|desc|160|__N__|
|padding|desc|0|__N__|
|bgColor|desc|`'white'`|__N__|
|color|desc|`'black'`|__N__|
|border|desc|`false`|__N__|
|borderSize|desc|none|__N__|
|borderColor|desc|none|__N__|
|radius|desc|none|__N__|
|shadow|desc|`false`|__N__|


### show

```lua
modal.show()
```

### hide

```lua
modal.hide()
```

### toggle

```lua
modal.toggle()
```

### resize

```lua
modal.resize(width[, height])
```

### setContent

```lua
modal.setContent(html_content)
```

### destroy

```lua
modal.destroy()
```

## Content

### Closing

```html
<button onclick="modal.hide()">Close</button>
```