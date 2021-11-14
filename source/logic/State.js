import Fetchquest from "fetchquest"
import Urrl from "urrl"

const CHARACTER_URRL = new Urrl("https://character-service.dndbeyond.com/character/v3/character/{id}")

const characters = [
    {"id": 57872770}, // cauli
    {"id": 57883387}, // charles
    {"id": 57754180}, // orlock
    {"id": 56663495}, // zz
]

export default new class State {
    fetchCharacters() {
        return this.fetchCharacter({
            "id": characters[0].id
        })
    }
    fetchCharacter({id}) {
        return Fetchquest({
            "method": "GET",
            "url": CHARACTER_URRL({"id": id})
        }).then((response) => {
            console.log(response)
            return response
        })
    }
}
