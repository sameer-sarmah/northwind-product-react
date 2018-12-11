export class CoreException {
    status;
    textStatus;
    errorThrown;
    constructor( status,  textStatus,  errorThrown) {
      this.status=status;
      this.textStatus=textStatus;
      this.errorThrown=errorThrown;
    }
    getTextStatus() {
      return this.textStatus;
    }
    getError() {
      return this.errorThrown;
    }

    getStatusCode() {
      return this.status;
    }
}
