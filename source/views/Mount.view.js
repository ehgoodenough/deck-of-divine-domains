import Preact from "preact"

import render from "logic/Render.js"

import "views/Mount.view.less"

const domains = [
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
    {"symbol": "�️", "name": "Fate", "number": 15},
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
        "domains": [
            domains[0],
            domains[4],
            domains[7],
            domains[10],
            domains[12],
            domains[16],
        ]
    },
    "selected": {
        "domains": []
    }
}

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
            <div class="DivineDomainScreen">
                <div class="Prompt">
                    For your next player character,
                    <br/>you'll worship a god of:
                </div>
                <div class="YourSelectedCards">
                    <div class="Cards">
                        <Card domain={state.selected.domains[0]}/>
                        <div class="Divider">
                            <div class="Ampersand">&</div>
                        </div>
                        <Card domain={state.selected.domains[1]}/>
                    </div>
                </div>
                <div class="YourDealtCards">
                    <div class="Cards">
                        {state.dealt.domains.map((domain) => (
                            <Card domain={domain}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

class Card {
    render() {
        if(this.props.domain == undefined) {
            return (
                <div class="Empty Card">
                    <div class="CallToAction">
                        Choose<br/>One!!
                    </div>
                </div>
            )
        }
        return (
            <div class="Card" isSelected={this.isSelected} onClick={this.onClick}>
                <div class="Content">
                    <div class="Name">
                        {this.props.domain.name}
                    </div>
                    <div class="Symbol">
                        {this.props.domain.symbol}
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
            if(state.selected.domains.includes(this.props.domain)) {
                state.selected.domains[state.selected.domains.indexOf(this.props.domain)] = undefined
                console.log("sfx: removed")
                return render()
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

            return render()
        }
    }
}
