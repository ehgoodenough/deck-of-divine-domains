import Preact from "preact"

import State from "logic/State.js"
import Render from "logic/Render.js"
import Random from "logic/Random.js"

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
            <div class="CardScreen">
                <Card domain={domains[0]}/>
                <Card domain={domains[1]}/>
                <Card domain={domains[2]}/>
                <Card domain={domains[3]}/>
                <Card domain={domains[4]}/>
            </div>
        )
    }
}

class Card {
    render() {
        if(this.props.domain == undefined) return
        return (
            <div class="Card">
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
}
