/**
 * Created by ArunPras on 5/18/2017.
 */
myApp.service('MemberService', function ($http, $q) {
    var members;
    return {
        loadMembers: function () {
            var defer = $q.defer();
            $http.get('https://private-a73e-aquentuxsociety.apiary-mock.com/members').then(function (res) {
                if (res.data)
                    members = res.data;
                defer.resolve(members);
            }, function (error) {
                members.erromessage = error;
                defer.reject(members);
            });
            return defer.promise
        }
    }
});
