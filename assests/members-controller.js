/**
 * Created by ArunPras on 5/18/2017.
 */
myApp.controller('mainController', function ($scope, MemberService, $log) {
    $scope.members = {};
    $scope.members.selected = '';
    $scope.value = 'UX Society Members';

    MemberService.loadMembers().then(function (res) {

        $scope.members.acutual = res;
        $scope.members.result = angular.copy($scope.members.acutual);
        $scope.members.selected = !($scope.members.selected )?  $scope.members.result[0]:$scope.members.selected;

    });

        $scope.selectedRow = function (id) {
                $scope.members.selected = id;
        };



});