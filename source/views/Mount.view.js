import Preact from "preact"
import shuffle from "array-shuffle"
import rerender from "logic/Render.js"

import "views/Mount.view.less"

let DIVINE_DOMAINS = [
    {"symbol": "❤️", "name": "Love", "number": 1},
    {"symbol": "⚔️", "name": "War", "number": 2},
    {"symbol": "😊", "name": "Life", "number": 3},
    {"symbol": "💀", "name": "Death", "number": 4},
    {"symbol": "🔥", "name": "Fire", "number": 5},
    {"symbol": "🌊", "name": "Water", "number": 6},
    {"symbol": "⛰️", "name": "Earth", "number": 7},
    {"symbol": "⛈️", "name": "Storms", "number": 8},
    {"symbol": "🐺", "name": "Beasts", "number": 9},
    {"symbol": "🌿", "name": "Plants", "number": 10},
    {"symbol": "☀️", "name": "Light", "number": 11},
    {"symbol": "🌑", "name": "Dark", "number": 12},
    {"symbol": "🎭", "name": "Art", "number": 13},
    {"symbol": "🔨", "name": "Forge", "number": 14},
    {"symbol": "🎲", "name": "Luck", "number": 15},
    {"symbol": "👁️", "name": "Fate", "number": 16},
    {"symbol": "🤏", "name": "Trickery", "number": 17},
    {"symbol": "⚖️", "name": "Justice", "number": 18},
    {"symbol": "📚", "name": "Knowledge", "number": 19},
    {"symbol": "👑", "name": "Wealth", "number": 20},
    {"symbol": "⏳", "name": "Time", "number": 21},
    {"symbol": "🔮", "name": "Magic", "number": 22},
    {"symbol": "😃", "name": "Joy", "number": 23},
    {"symbol": "😩", "name": "Tragedy", "number": 24},
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
    },
    shuffle: function() {
        const DEALT_CARDS = 5
        state.interaction = {"type": "dealt"}
        state.dealt.domains = shuffle(DIVINE_DOMAINS).slice(0, 6)
        console.log("sfx: shuffle")
        state.selected.domains = []
    }
}

export default class Mount {
    render() {
        return (
            <div className="Mount">
                <title>Deck of Divine Domains</title>
                <DivineDomainScreen/>
            </div>
        )
    }
}

class DivineDomainScreen {
    render() {
        return (
            <div class="DivineDomainScreen">
                {this.sections}
            </div>
        )
    }
    get sections() {
        if(state.interaction == undefined) {
            return [
                <PromptSection/>,
                <section class="YourDeck">
                    <Deck/>
                </section>
            ]
        }

        if(state.interaction != undefined) {
            return [
                <PromptSection/>,
                <section class="SelectedCardsSection">
                    <section class="ReshuffleSection">
                        <ReshuffleButton/>
                    </section>
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
                    <section class="CopyButtonSection">
                        <CopyButton/>
                    </section>
                </section>,
                <section class="DealtCardsSection">
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

class PromptSection {
    render() {
        return (
            <section class="PromptSection">
                Your next character
                <br/>will worship a god of:
            </section>
        )
    }
}

class ReshuffleButton {
    render() {
        return (
            <div class="ReshuffleButton" onClick={this.onClick}>
                <div class="Icon"><i class="fa-solid fa-shuffle"></i></div>
            </div>
        )
    }
    onClick() {
        state.shuffle()
        rerender()
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
        state.shuffle()
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
