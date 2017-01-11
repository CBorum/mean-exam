require('bootstrap/dist/css/bootstrap.css')
const angular = require('angular')

angular.module('app', [])
    .controller('mCtrl', function ($scope, mService) {
        $scope.people = []
        $scope.loggedin = false
        getPeople()

        $scope.addPerson = function () {
            if ($scope.name || $scope.age) {
                mService.postPerson({
                    'name': $scope.name,
                    'age': $scope.age
                }, function () {
                    $scope.name = ""
                    $scope.age = ""
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

        $scope.login = function () {
            mService.login({
                'username': $scope.username,
                'password': $scope.password
            }, function () {

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
        this.login = function (data, callback) {
            $http.post('/login', data)
                .then(() => {
                    console.log(data.body)
                    callback()
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })
