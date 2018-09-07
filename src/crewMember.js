const crewMembers = []
let crewMemberId = 0

class CrewMember {

  constructor(position, currentShip) {
    this.id = ++crewMemberId
    this.position = position
    this.currentShip = currentShip ? currentShip : 'Looking for a Rig'
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.currentShip === 'Looking for a Rig') {
        return "had no effect"
    } else if (this.position !== 'Pilot' ) {
        return "had no effect"
    } else if (this.position === 'Pilot' && this.currentShip.warpDrive === 'engaged') {
        return this.currentShip.warpDrive = 'disengaged'
    } else if (this.position === 'Pilot' && this.currentShip.warpDrive === 'disengaged') {
        return this.currentShip.warpDrive = 'engaged'
    }
  }


  setsInvisibility() {
    if (this.position === 'Defender' && this.currentShip === 'Looking for a Rig') {
        return "had no effect"
    } else if (this.position !== 'Defender' ) {
        return "had no effect"
    } else if (this.position === 'Defender' && this.currentShip.cloaked === true) {
        return this.currentShip.cloaked = false
    } else if (this.position === 'Defender' && this.currentShip.cloaked === false) {
        return this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.currentShip === 'Looking for a Rig') {
        return "had no effect"
    } else if (this.position !== 'Gunner' ) {
        return "had no effect"
    } else if (this.position === 'Gunner' && this.currentShip.pashersCharged === 'charged') {
        return this.currentShip.pashersCharged = 'uncharged'
    } else if (this.position === 'Gunner' && this.currentShip.pashersCharged === 'uncharged') {
        return this.currentShip.pashersCharged = 'charged'
    }
  }

}
