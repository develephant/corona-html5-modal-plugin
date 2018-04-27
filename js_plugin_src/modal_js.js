//-----------------------------------------------------------------------------
// Corona HTML5 Modal Plugin
// (c)2018 C. Byerley
//-----------------------------------------------------------------------------
class ModalPlugin {
  constructor() { }

  create(modal_config) {

    if (this.modal) {
      return "Modal already exists!"
    }

    let config = modal_config || {}

    let top = config.top ? config.top : 160
    let width = config.width ? config.width : 728
    let height = config.height ? config.height : 90
    let padding = config.padding ? config.padding : 0
    let bgColor = config.bgColor ? config.bgColor : 'white'
    let color = config.color ? config.color : 'black'
    let html = config.content ? config.content : ''

    let marginLeft = -(width * .5)

    let ele = document.createElement("div")
    ele.id = "modal_plugin"

    ele.style.display = "none"
    ele.style.zIndex = 9999
    ele.style.position = 'absolute'
    ele.style.left = '50%'
    ele.style.top = `${top}px`
    ele.style.marginLeft = `${marginLeft}px`
    ele.style.width = `${width}px`
    ele.style.height = `${height}px`
    ele.style.padding = `${padding}px`
    ele.style.background = `${bgColor}`
    ele.style.color = `${color}`

    //borders
    if (config.border) {
      ele.style.borderStyle = 'solid'
    }

    if (config.borderSize) {
      ele.style.borderWidth = `${config.borderSize}px`
    }

    if (config.borderColor) {
      ele.style.borderColor = config.borderColor
    }

    if (config.radius) {
      ele.style.borderRadius = `${config.borderRadius}px`
      ele.style.webkitBorderRadius = `${config.borderRadius}px`
    }

    //shadow
    if (config.shadow) {
      ele.style.boxShadow = "0 20px 20px 0 rgba(0, 0, 0, 0.3)"
    }

    ele.innerHTML = `${html}`

    document.body.appendChild(ele)

    this.modal = ele

    //add close script
    let script = document.createElement("script")
    script.innerText = "var modal = {hide: function() { window.modal_js.hide(); }};"
    document.head.appendChild(script)

    this.modal_script = script

    this.toggleHidden = true

    return true
  }

  addEventListener(listener) {
    this.dispatcher = LuaCreateFunction(listener)
  }

  removeEventListener() {
    LuaReleaseFunction(this.dispatcher)
  }

  dispatchEvent(event) {
    this.dispatcher(event)
  }

  toggle() {
    if (this.modal) {
      if (this.toggleHidden == true) {
        this.show()
      } else {
        this.hide()
      }
    }
  }

  show() {
    if (this.modal) {
      this.modal.style.display = 'block'
      this.toggleHidden = false
      this.dispatchEvent({name: 'modal', type: 'show'})
    }
  }

  hide() {
    if (this.modal) {
      this.modal.style.display = 'none'
      this.toggleHidden = true
      this.dispatchEvent({name: 'modal', type: 'hide'})
    }
  }

  resize(new_width, new_height) {
    if (this.modal) {

      let width = new_width ? new_width : this.modal.style.width
      let height = new_height ? new_height : this.modal.style.height
      let marginLeft = -(new_width * .5)

      this.modal.style.marginLeft = `${marginLeft}px`
      this.modal.style.width = `${width}px`
      this.modal.style.height = `${height}px`

      this.dispatchEvent({name: 'modal', type: 'resize'})

    }
  }

  setContent(html_content) {
    if (this.modal) {
      this.modal.innerHTML = html_content || ''
    }
  }

  destroy() {
    if (this.modal) {
      document.body.removeChild(this.modal)
      this.modal = null
    }

    if (this.modal_script) {
      document.head.removeChild(this.modal_script)
      this.modal_script = null

      this.dispatchEvent({name: 'modal', type: 'destroy'})
    }
  }
}

window.modal_js = new ModalPlugin()
