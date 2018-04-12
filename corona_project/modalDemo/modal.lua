--#############################################################################
--# Corona HTML5 Plugin Lib
--#############################################################################
local lib

local platform = system.getInfo("platform")

if platform == 'html5' then
  lib = require("modal_js")
else
	-- wrapper for non web platforms
	local CoronaLibrary = require "CoronaLibrary"
	-- Create stub library for simulator
	lib = CoronaLibrary:new{ name='modal', publisherId='com.develephant' }
  -- Alert for non-HTML5 platforms
	local function defaultFunction()
		print( "WARNING: The '" .. lib.name .. "' library is not available on this platform." )
  end

end

return lib
