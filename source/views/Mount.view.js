import Preact from "preact"
import state from "state.js"

import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount">
                <Content/>
            </div>
        )
    }
}

class Content {
    render() {
        if(state.isLoaded == false) {
            return "Hello World"
        }
        return "!!"
    }
}
