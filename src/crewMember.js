class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = "looking for a Rig"
  }

  engageWarpDrive() {
    if (this.currentShip === "looking for a Rig") {
    return "had no effect"
    }
  }

  setsInvisibility() {
    if (this.currentShip !== "looking for a Rig" && this.position === 'Defender') {
      this.currentShip.cloaked = true
    } else
      return "had no effect"
  }

  chargePhasers() {
    if (this.currentShip === "looking for a Rig") {
    return "had no effect"
    }
  }

}
