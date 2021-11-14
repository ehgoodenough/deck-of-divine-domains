import Preact from "preact"

import State from "logic/State.js"
import Render from "logic/Render.js"
import Random from "logic/Random.js"

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
        return (
            <div class="DiceScreen">
                <D6/>
                <RerollButton/>
            </div>
        )
    }
}

class RerollButton {
    render() {
        return (
            <div class="RerollButton" onClick={this.onClick}>
                Reroll
            </div>
        )
    }
    onClick() {
        State.number = Random.integer(1, 6)
        Render()
    }
}

class D6 {
    render() {
        return (
            <div class={"Dice roll-to-" + State.number}>
                <div class="Side one">
                    <div class="Text">1</div>
                </div>
                <div class="Side two">
                    <div class="Text">2</div>
                </div>
                <div class="Side three">
                    <div class="Text">3</div>
                </div>
                <div class="Side four">
                    <div class="Text">4</div>
                </div>
                <div class="Side five">
                    <div class="Text">5</div>
                </div>
                <div class="Side six">
                    <div class="Text">6</div>
                </div>
            </div>
        )
    }
}

class DottedD6 {
    render() {
        return (
            <div class={"Dice roll-to-" + State.number}>
                <div class="Side one">
                    <div class="Dot one-1"></div>
                </div>
                <div class="Side two">
                    <div class="Dot two-1"></div>
                    <div class="Dot two-2"></div>
                </div>
                <div class="Side three">
                    <div class="Dot three-1"></div>
                    <div class="Dot three-2"></div>
                    <div class="Dot three-3"></div>
                </div>
                <div class="Side four">
                    <div class="Dot four-1"></div>
                    <div class="Dot four-2"></div>
                    <div class="Dot four-3"></div>
                    <div class="Dot four-4"></div>
                </div>
                <div class="Side five">
                    <div class="Dot five-1"></div>
                    <div class="Dot five-2"></div>
                    <div class="Dot five-3"></div>
                    <div class="Dot five-4"></div>
                    <div class="Dot five-5"></div>
                </div>
                <div class="Side six">
                    <div class="Dot six-1"></div>
                    <div class="Dot six-2"></div>
                    <div class="Dot six-3"></div>
                    <div class="Dot six-4"></div>
                    <div class="Dot six-5"></div>
                    <div class="Dot six-6"></div>
                </div>
            </div>
        )
    }
}
