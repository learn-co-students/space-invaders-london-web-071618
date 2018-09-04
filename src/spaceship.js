class Spaceship {
  constructor(name, crewArray, phaserNumber, shieldsNumber) {
    this.crew = crewArray
    this.name = name
    this.phasers = phaserNumber
    this.shields = shieldsNumber
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"

    if (this.crew.length > 0) {
      this.docked = false
      for (let i=0; i<this.crew.length; i++) {
        this.crew[i].currentShip = this
      }
      } else {
      this.docked = true
    }

  }

}
