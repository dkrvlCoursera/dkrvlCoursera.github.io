(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
      $scope.OrderItems = "";
      $scope.msg = "";
      $scope.alertType = "";
      $scope.checkLunchItems = function(){
           if($scope.OrderItems == ""){
             $scope.alertType = "danger";
             $scope.msg = "Please enter data first";
           }else{
             var OrderItemsList = $scope.OrderItems.split(",")
             // console.log(OrderItemsList);
             // console.log(OrderItemsList.length);

             if(OrderItemsList.length <= 3 ){
               $scope.alertType = "success";
               $scope.msg = "Enjoy!"
             }else{
               $scope.alertType = "warning";
               $scope.msg="Too much!";
             }

           }
      }
  }
})();
