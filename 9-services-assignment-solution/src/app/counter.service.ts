export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  totalActive = 2;
  totalInactive = 2;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    this.totalActive--;
    this.totalInactive++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter + '\nActive Users: '+this.totalActive+'\nInactive Users: '+this.totalInactive);
    
  }

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    this.totalActive++;
    this.totalInactive--;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter+ '\nActive Users: '+this.totalActive+'\nInactive Users: '+this.totalInactive );
   
  }


}
