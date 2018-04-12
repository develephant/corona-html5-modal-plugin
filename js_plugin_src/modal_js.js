//-----------------------------------------------------------------------------
// Corona HTML5 Modal Plugin
// (c)2018 C. Byerley
//-----------------------------------------------------------------------------
class ModalPlugin {
  init(modal_config) {

    let config = modal_config || {}

    let top = config.top ? config.top : 160
    let width = config.width ? config.width : 728
    let height = config.height ? config.height : 90
    let padding = config.padding ? config.padding : 4
    let bgColor = config.bgColor ? config.bgColor : 'white'
    let color = config.color ? config.color : 'black'
    let html = config.html ? config.html : ''

    let marginLeft = -(width * .5)

    let ele = document.createElement("div")

    ele.style.display = "block"
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
    ele.innerHTML = `${html}`

    document.body.appendChild(ele)

    this.modal = ele

    return true
  }

  setContent(html_content) {
    this.modal.innerHTML = html_content
    return true
  }

  show() {
    this.modal.style.display = 'block'
    return true
  }

  hide() {
    this.modal.style.display = 'none'
    return true
  }
}

window.modal_js = new ModalPlugin()
