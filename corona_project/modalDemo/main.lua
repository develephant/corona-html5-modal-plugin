--#############################################################################
--# Corona HTML5 Modal Plugin
--# (c)2018 C. Byerley (develephant)
--#############################################################################
local widget = require("widget")
local modal = require("modal")

local html = [[
  <div>
    <img src="side-logo.png" />
  </div>
  <div>
    <button onclick="modal.hide()">Close</button>
  </div>
]]

modal.create({
  width = 600,
  height = 200,
  borderRadius = 4,
  content = html
})

modal.addEventListener('modal', function(e)
  print(e.type)
end)

modal.show()

local function newContent()
  local html = [[
    <div>
      <h3>Hello</h3>
      <p>I'm all up in here!</p>
    </div>
  ]]

  modal.setContent(html)
end

local toggleBtn = widget.newButton({
  label = "Toggle",
  x = display.contentCenterX,
  y = display.contentCenterY + 100,
  onRelease = modal.destroy
})

local changeContentBtn = widget.newButton({
  label = "Content",
  x = display.contentCenterX,
  y = display.contentCenterY + 60,
  onRelease = newContent
})


local function doResize()
  modal.resize(800, 400)
end

local resizeBtn = widget.newButton({
  label = "Resize",
  x = display.contentCenterX,
  y = display.contentCenterY + 20,
  onRelease = doResize
})

