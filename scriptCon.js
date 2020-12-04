
function big(element) {
    element.style.fontSize="30px";
}
function small(element) {
    element.style.fontSize="25px";

}
$(function() {
    $('div h1').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
});
const modal = document.getElementById('id01');

// когда юзер кликает в другую сторону он закрывает окно
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat:  43.238949, lng:76.889709},
        zoom: 12,
    });
       let icon = {
       url: "https://e7.pngegg.com/pngimages/84/418/png-clipart-spider-man-j-jonah-jameson-daily-bugle-betty-brant-ben-urich-spider-man-emblem-heroes.png",
       scaledSize: new google.maps.Size(30, 30),
       origin: new google.maps.Point(0,0),
       anchor: new google.maps.Point(0, 0),
   };
    let marker = new google.maps.Marker({
        position: {lat:43.241441895963575, lng:76.90276988841023},
        map:map,
        icon:icon

    });
    let marker2 = new google.maps.Marker({
        position: {lat:43.23868497239187, lng:76.95708858918486},
        map:map,
        icon:icon

    });
    let marker3 = new google.maps.Marker({
        position: {lat:43.22800392275463, lng:76.95913095021953},
        map:map,
        icon:icon

    });
    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        markerOptions: {
            icon:
                "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
        circleOptions: {
            fillColor: "#6495ED",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });
    drawingManager.setMap(map);
}


