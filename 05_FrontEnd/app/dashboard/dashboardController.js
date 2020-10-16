// angular.module('primeiraApp').controller('DashboardCtrl', [
//     '$http',
//     DashboardController
// ])

// // function DashboardController($scope, $http){

// //     $scope.getSummary = function(){
// //         const url = `http://localhost:3003/api/billingSummary`
// //         $http.get(url).success(function({credit = 0, debt = 0}){
// //             $scope.credit = credit
// //             $scope.debt = debt
// //             $scope.total = credit - debt
// //         })
// //     }

// //     $scope.getSummary()
// // }


// function DashboardController($http){
//     const vm = this
//     vm.getSummary = function(){
//         const url = `http://localhost:3003/api/billingSummary`
//         $http.get(url).then(function(response){
//             const {credit = 0, debt = 0 } = response.data
//             vm.credit = credit
//             vm.debt = debt
//             vm.total = credit - debt
//         })
//     }

//     vm.getSummary()
// }

(function(){
    angular.module('primeiraApp').controller('DashboardCtrl', [
        '$http',
        DashboardController
    ])

    function DashboardController($http){
        const vm = this
        vm.getSummary = function(){
            const url = `http://localhost:3003/api/billingSummary`
            $http.get(url).then(function(response){
                const {credit = 0, debt = 0 } = response.data
                vm.credit = credit
                vm.debt = debt
                vm.total = credit - debt
            })
        }
    
        vm.getSummary()
    }

})()
