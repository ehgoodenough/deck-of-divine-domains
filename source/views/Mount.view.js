import Preact from "preact"
import shuffle from "array-shuffle"
import rerender from "logic/Render.js"

import "views/Mount.view.less"

let DIVINE_DOMAINS = [
    {"symbol": "⚔️", "name": "War", "number": 1},
    {"symbol": "❤️", "name": "Love", "number": 2},
    {"symbol": "💀", "name": "Death", "number": 3},
    {"symbol": "🔨", "name": "Forge", "number": 4},
    {"symbol": "⛈️", "name": "Storms", "number": 5},
    {"symbol": "🌊", "name": "Water", "number": 6},
    {"symbol": "🔥", "name": "Fire", "number": 7},
    {"symbol": "🌿", "name": "Flora", "number": 8},
    {"symbol": "⛰️", "name": "Earth", "number": 9},
    {"symbol": "🌌", "name": "Sky", "number": 10},
    {"symbol": "☀️", "name": "Light", "number": 11},
    {"symbol": "🌑", "name": "Dark", "number": 12},
    {"symbol": "✨", "name": "Beauty", "number": 13},
    {"symbol": "💤", "name": "Dreams", "number": 14},
    {"symbol": "👁️", "name": "Fate", "number": 15},
    {"symbol": "🔮", "name": "Magic", "number": 16},
    {"symbol": "📚", "name": "Knowledge", "number": 17},
    {"symbol": "🤏", "name": "Trickery", "number": 18},
    {"symbol": "😊", "name": "Joy", "number": 19},
    {"symbol": "⚖️", "name": "Justice", "number": 20},
    {"symbol": "🎭", "name": "Art", "number": 21},
    {"symbol": "⏳", "name": "Time", "number": 22},
    {"symbol": "🎲", "name": "Luck", "number": 23},
    {"symbol": "👑", "name": "Wealth", "number": 24},
]

const state = {
    "dealt": {
        "domains": []
    },
    "selected": {
        "domains": []
    },
    "interaction": undefined,
    getLastInteraction: function() {
        return state.interaction && state.interaction.type || "none"
    }
}

export default class Mount {
    render() {
        return (
            <div className="Mount">
                <DivineDomainScreen/>
            </div>
        )
    }
}

class DivineDomainScreen {
    render() {
        return (
            <div class="DivineDomainScreen">
                <div class="Prompt">
                    For your next player character,
                    <br/>you'll worship a god of:
                </div>
                {this.cards}
            </div>
        )
    }
    get cards() {
        if(state.interaction == undefined) {
            return (
                <section class="YourDeck">
                    <Deck/>
                </section>
            )
        }

        if(state.interaction != undefined) {
            return [
                <section class="YourSelectedCards">
                    <Deck/>
                    <section class="SelectedCards">
                        <div class="Slot">
                            <EmptyCard/>
                            <Card domain={state.selected.domains[0]}/>
                        </div>
                        <div class="Divider">
                            <div class="Ampersand">&</div>
                        </div>
                        <div class="Slot">
                            <EmptyCard/>
                            <Card domain={state.selected.domains[1]}/>
                        </div>
                    </section>
                    <CopyButton/>
                </section>,
                <section class="YourDealtCards">
                    {state.dealt.domains.map((domain) => (
                        <Card domain={domain}/>
                    ))}
                </section>
            ]
        }
    }
    get hasJustDealt() {
        return state.interaction != undefined
            && state.interaction.type == "dealt"
    }
}

class CopyButton {
    render() {
        return (
            <div class="CopyButton" hasSelectedBoth={this.hasSelectedBoth}
                interaction={state.getLastInteraction()} onClick={this.onClick}>
                <div class="Icon"><i class="fa-solid fa-copy"></i></div>
                <div class="Response">Copied!</div>
            </div>
        )
    }
    get onClick() {
        return (event) => {
            if(this.hasSelectedBoth == false) return
            navigator.clipboard.writeText(state.selected.domains[0].symbol + "" + state.selected.domains[1].symbol)
            state.interaction = {"type": "copy"}
            rerender()
        }
    }
    get hasSelectedBoth() {
        return state.selected.domains[0] != undefined
            && state.selected.domains[1] != undefined
    }
}

class EmptyCard {
    render() {
        return (
            <div class="Empty Card">
                <div class="SelectPrompt">
                    Choose<br/>One
                </div>
            </div>
        )
    }
}

class Deck {
    render() {
        return (
            <div class="Deck" onClick={this.onClick} interaction={state.getLastInteraction()}>
                <div class="BottomCard"/>
                <div class="AlmostTopCard"/>
                <div class="TopCard">
                    <div class="ReshufflePrompt">
                        Reshuffle?
                    </div>
                </div>
            </div>
        )
    }
    onClick() {
        const DEALT_CARDS = 6
        state.interaction = {"type": "dealt"}
        state.dealt.domains = shuffle(DIVINE_DOMAINS).slice(0, 6)
        console.log("sfx: shuffle")
        state.selected.domains = []
        rerender()
    }
}

class Card {
    render() {
        if(this.props.domain == undefined) {
            return
        }
        return (
            <div class="Faceup Card" isSelected={this.isSelected} onClick={this.onClick}
                interaction={state.getLastInteraction()}>
                <div class="Content1">
                    <div class="Content2">
                        <div class="Name">
                            {this.props.domain.name}
                        </div>
                        <div class="Symbol">
                            {this.props.domain.symbol}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    get isSelected() {
        return state.selected.domains.includes(this.props.domain)
    }
    get onClick() {
        return (event) => {
            state.interaction = {"type": "select"}

            if(state.selected.domains.includes(this.props.domain)) {
                state.selected.domains[state.selected.domains.indexOf(this.props.domain)] = undefined
                console.log("sfx: removed")
                rerender()
                return
            }

            if(state.selected.domains.length >= 2) {
                console.log("sfx: can't do it")
            }

            if(state.selected.domains[0] == undefined) {
                state.selected.domains[0] = this.props.domain
                console.log("sfx: added")
            } else if(state.selected.domains[1] == undefined) {
                state.selected.domains[1] = this.props.domain
                console.log("sfx: added")
            }

            rerender()
        }
    }
}
