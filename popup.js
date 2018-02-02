document.addEventListener('DOMContentLoaded', function() {
var captureButton = document.getElementById('capture');
captureButton.addEventListener('click', function() {
        
            // Things we need to keep track of
        var start = {};
        var end = {};
        var isSelecting = false;
        var selection = document.getElementById('selection');
        //var currentWindow = browser.window.getCurrent()
        console.log("inside click");

        window.onmousedown = function(event) {
            console.log("mousedown");
                // Update our state
                isSelecting = true;
                selection.className = '';
                //selection.removeClass('complete');
                start.x = event.pageX;
                start.y = event.pageY;

                // Add selection to screen
                // selection.css({
                //     left: start.x,
                //     top: start.y
                // });
                selection.style.left = start.x;
                selection.style.top = start.y;
        };
        window.onmousemove = function(event) {
            //Ignore if we're not selecing
            if (!isSelecting) { return; }

            // Update our state
            end.x = event.pageX;
            end.y = event.pageY;

            // Move & resize selection to reflect mouse position
            // selection.css({
            //     left: start.x < end.x ? start.x : end.x,
            //     top: start.y < end.y ? start.y : end.y,
            //     width: Math.abs(start.x - end.x),
            //     height: Math.abs(start.y - end.y)
            // });
            selection.style.left = start.x < end.x ? start.x : end.x;
            selection.style.top = start.y < end.y ? start.y : end.y;
            selection.style.width = Math.abs(start.x - end.x);
            selection.style.height = Math.abs(start.y - end.y);
        };
        window.onmouseup = function() {
        console.log("mouseup");
            // Update our state
            isSelecting = false;
            // selection.addClass('complete');
            selection.style.className = 'complete';
        };
    }, false);
}, false);
//document.addEventListener('DOMContentLoaded', function() {

        // window
        //     // Listen for selection
        //     .on('mousedown', function($event) {
        //         console.log("mousedown");
        //         // Update our state
        //         isSelecting = true;
        //         $('#selection').removeClass('complete');
        //         start.x = $event.pageX;
        //         start.y = $event.pageY;

        //         // Add selection to screen
        //         $('#selection').css({
        //             left: start.x,
        //             top: start.y
        //         });
        //     })
        //     // Listen for movement
        //     .on('mousemove', function($event) {
        //         console.log("mousemove");
        //         // Ignore if we're not selecing
        //         if (!isSelecting) { return; }

        //         // Update our state
        //         end.x = $event.pageX;
        //         end.y = $event.pageY;

        //         // Move & resize selection to reflect mouse position
        //         $('#selection').css({
        //             left: start.x < end.x ? start.x : end.x,
        //             top: start.y < end.y ? start.y : end.y,
        //             width: Math.abs(start.x - end.x),
        //             height: Math.abs(start.y - end.y)
        //         });
        //     })
        //     // listen for end
        //     .on('mouseup', function($event) {
        //         console.log("mouseup");
        //         // Update our state
        //         isSelecting = false;
        //         $('#selection').addClass('complete');
        //     });
    
// }, false);