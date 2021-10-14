import Preact from "preact"

import Mount from "views/Mount.view.js"

let mount = undefined
export default function render() {
    mount = Preact.render(<Mount/>, document.body, mount)
}
