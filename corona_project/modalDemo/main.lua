--#############################################################################
--# Corona HTML5 Modal Plugin
--# (c)2018 C. Byerley (develephant)
--#############################################################################
local widget = require("widget")
local modal = require("modal")

local html = [[
  <h1>Modal Time!</h1>
  <div>
    <button onclick="modal.hide()">Close</button>
  </div>
]]

modal.create({
  width = 600,
  height = 130,
  padding = 6,
  borderRadius = 4,
  content = html
})

modal.addEventListener(function(e)
  print(e.type)
end)

modal.show()

local function newContent()
  local html = [[
    <div>
      <h3>Hello</h3>
      <p>I'm all up in here!</p>
    </div>
    <div>
      <button onclick="modal.hide()">Close</button>
    </div>
  ]]

  modal.setContent(html)
end

local changeContentBtn = widget.newButton({
  label = "Content",
  x = display.contentCenterX,
  y = display.contentCenterY + 40,
  onRelease = newContent
})

local function toggleModal()
  modal.toggle()
end

local toggleBtn = widget.newButton({
  label = "Toggle",
  x = display.contentCenterX,
  y = display.contentCenterY + 80,
  onRelease = toggleModal
})

local function doResize()
  modal.resize(800, 400)
end

local resizeBtn = widget.newButton({
  label = "Resize",
  x = display.contentCenterX,
  y = display.contentCenterY + 120,
  onRelease = doResize
})

