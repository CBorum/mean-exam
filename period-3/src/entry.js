require('bootstrap/dist/css/bootstrap.css')
const angular = require('angular')

angular.module('app', [])
    .controller('mCtrl', function ($scope, mService) {
        $scope.people = []
        getPeople()

        $scope.addPerson = function () {
            if ($scope.name || $scope.age) {
                mService.postPerson({
                    'name': $scope.name,
                    'age': $scope.age
                }, function () {
                    getPeople()
                })
            }
        }

        function getPeople() {
            mService.getPeople(data => {
                console.log(data)
                $scope.people = data
            })
        }
    })
    .service('mService', function ($http) {
        this.getPeople = function (callback) {
            $http.get('/people')
                .then(body => {
                    callback(body.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        this.postPerson = function (data, callback) {
            $http.post('/people', data)
                .then(() => {
                    callback()
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })
