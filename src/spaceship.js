class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.docked = this.isDocked()
    this.assignCrew()
  }

  isDocked() {
    if (this.crew.length === 0){
      return true
    }
    return false
  }

  assignCrew() {
    this.crew.forEach(crewMan => crewMan.currentShip = this)
  }

}
