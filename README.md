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
create(config)
```

__Config Table__

|Key|Description|Default|Required|
|---|-----------|-------|--------|


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