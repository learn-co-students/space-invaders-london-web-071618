const spaceships = []
let spaceshipId = 0

class Spaceship {

  constructor(name, crewMembers, phasers, shields) {
    this.id = ++spaceshipId
    this.name = name
    this.phasers = phasers
    this.phasersCharge = 'uncharged'
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.crew = crewMembers
    crewMembers.forEach((crewmember) => {
      crewmember.currentShip = this
    })
    this.docked = this.crew.length === 0 ? true : false
  }


  }
