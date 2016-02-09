'use strict';

/**
 * @ngdoc function
 * @name taskCalendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taskCalendarApp
 */
angular.module('taskCalendarApp')
  .controller('MainCtrl', ['$scope', '$compile','uiCalendarConfig',function ($scope, $compile,uiCalendarConfig) {
     /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'Task Calendar',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

  $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
  }]);
