class MyVolumioPayingModalController {
  constructor($uibModalInstance, dataObj) {
    'ngInject';
    this.$uibModalInstance = $uibModalInstance;
    this.dataObj = dataObj;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }
}

export default MyVolumioPayingModalController;