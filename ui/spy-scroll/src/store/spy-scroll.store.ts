import { EventEmitter } from 'events'

export class SpyScrollStore extends EventEmitter {
  private step: string

  private traps: Array<string> = []

  private passedTraps: Array<string> = []

  registerTrap(id: string) {
    this.traps.push(id)
    this.emit('register-trap', this.traps)
  }

  updateStep(newState: string) {
    const index = this.passedTraps.indexOf(newState)
    if (index !== -1 && index !== this.passedTraps.length - 1) this.passedTraps.pop()
    else if (index === -1) this.passedTraps.push(newState)
    this.step = newState
    this.emit('update-step', newState)
    this.emit('update-passed-traps', this.passedTraps)
  }
}
