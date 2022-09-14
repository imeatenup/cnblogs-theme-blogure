/**
 * 博客标题导航等
 * @namespace header
 */

/**
 * header数据加载
 * @memberof header
 * @param {Element} originBody
 */
function GetHeader(originBody) {
    // def
    const header = (vm.header = {})
    const headerdom = originBody.querySelector('#header')
    // h1h2
    const h1dom = headerdom.querySelector('h1 a')
    header.url = h1dom.href.trim()
    header.title = h1dom.innerText.trim()
    const h2dom = headerdom.querySelector('h2')
    header.subtitle = h2dom.innerText.trim()
    // nav
    const navdom = headerdom.querySelector('#navList')
    const lidoms = navdom.querySelectorAll('li a')
    header.navs = []
    for (let index = 0; index < lidoms.length; index++) {
        const lidom = lidoms[index]
        const nav = {}
        nav.url = lidom.href.trim()
        nav.desc = lidom.innerText.trim()
        header.navs.push(nav)
    }
    console.log(header)
    return header
}