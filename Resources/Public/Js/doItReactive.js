$(document).ready(function() {
    var geoPosition;
    body = $("body");
    navigator.getBattery().then(function(battery) {
        if (battery.charging) {
            console.log("charging for " + battery.chargingTime + " seconds");
        }
        if (battery.discharging) {
            console.log("battery will be discharged in " + battery.dischargingTime + " seconds");
        }

        if (!battery.charging && (battery.level < 0.3)) {
            $("body").addClass("lowBattery");
        }


        battery.addEventListener('chargingchange', function() {
            if (battery.charging) {
                console.log("battery is now charging");
                $("body").removeClass("lowBattery");
            }
            if (battery.discharging) {
                console.log("battery is now discharging");
                if (battery.level < 0.3) {
                    $("body").addClass("lowBattery");
                }
            }

        });
    });

    window.addEventListener("offline", function(e) {
        body.addClass("offline");
        body.removeClass("online");
        alert("Sie sind Offline! Alle Links wurden deaktiviert");
        $("a").click(function(event) {
            event.preventDefault();

        });
    });

    window.addEventListener("online", function(e) {
        body.addClass("online");
        body.removeClass("offline");
        alert("Sie sind wieder Online! Alle Links sind wieder funktionstüchtig");
        $("a").click(function(event) {
            return true;
        });
    });


});


navigator.geolocation.getCurrentPosition(successCallback,
    errorCallback,
    {maximumAge: 600000, timeout: 0});

function successCallback(position) {
    console.log("position acquired. data follows");
    console.log("lat: " + position.coords.latitude);
    console.log("lon: " + position.coords.longitude);
    console.log("accuracy: " + position.coords.accuracy);
    console.log("tstamp: " + position.timestamp);
    geoPosition = position;

}

function errorCallback(error) {
    switch (error.code) {
        case error.TIMEOUT:
            doFallback();
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            break;
    }
}

function doFallback() {

}





