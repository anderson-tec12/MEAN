(function(){

    angular.module('primeiraApp').controller('BillingCycleCtrl',[
        '$http',
        'msgs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs){
        const vm = this;
        const url = 'http://localhost:3003/api/billingCycles'
        
        vm.reflesh = function(){
            const page = parseInt($location.search().page) || 1
            $http.get(`${url}?skip=${(page - 1) * 10}&limit=10`).then(function(response){
                vm.billingCycle = {credits: [{}], debts:[{}]}
                vm.billingCycles = response.data
                //vm.calculateValues()
            })
        }

        vm.create = function(){
            
            // $http.post(url, vm.billingCycle).success(function(response){
            //     vm.billingCycle = {}
            //     console.log('Sucesso')
            // })

            $http.post(url, vm.billingCycle).then(function(response){
                vm.reflesh()
                msgs.addSuccess('Operação realizda com sucesso')
                
            }).catch(function(response){
                msgs.addError(response.data.errors)
            })
        }

        //vm.reflesh()
    }
})()