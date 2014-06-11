/*
* jQuery.jui.checkboxes v0.1
* Creates accessible custom checkboxes
* https://github.com/antonradev/jQuery.jui.checkboxes
*
* Usage:
*
*$("#myCheckboxes").juicheckboxes();
*
* https://github.com/antonradev/jQuery.jui.checkboxes
* http://jui.uxpd.net/tabs.html
*
* Copyright (c) 2014 Anton Radev anton.radev@gmail.com http://www.antonradev.com
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/


(function($) {

    $.fn.juicheckboxes = function() {


        if (this.length) {



            $(this).find('.jui-checkbox').keyup(function(e) {
                if (e.keyCode === 32) {
                    $(this).toggleClass('active');
                }
            });


            $(this).find('.jui-checkbox').click(function() {
                $(this).toggleClass('active');
            });


            // Clicking on the label marks the box as checked
            $(this).find('.jui-checkbox-row label').click(function() {
                $(this).prev().toggleClass('active');
            });


//            $(this).addClass('active');
//            $(this).siblings().removeClass('active');


        }
        else {
            console.log("There is no selector in the Markup code");
            return;
        }
    };


}(jQuery));
