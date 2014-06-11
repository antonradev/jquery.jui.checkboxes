/*
 * jQuery.jui.checkboxes v0.1
 * Creates accessible custom checkboxes
 * https://github.com/antonradev/jQuery.jui.checkboxes
 *
 * Usage:
 *
 *$("#myCheckboxes").juicheckboxes();
 *Inline checkbox without label:
 *<span class="jui-checkbox" tabindex="0"></span>
 *Block checkbox with clickable label:
 *<div class="jui-checkbox-row">
 *  <span class="jui-checkbox" tabindex="0"></span> <label>Label text</label>
 *</div>
 *Please notice that your span element will need tabindex HTML attribute
 *
 * https://github.com/antonradev/jQuery.jui.checkboxes
 * http://jui.uxpd.net/checkboxes.html
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

        //Enables SPACE key checking
        $(this).find('.jui-checkbox').keyup(function(e) {
            if (e.keyCode === 32) {
                $(this).toggleClass('active');
            }
        });

        //Checking the box with mouse clicks
        $(this).find('.jui-checkbox').click(function() {
            $(this).toggleClass('active');
        });


        // Clicking on the label marks the box as checked
        $(this).find('.jui-checkbox-row label').click(function() {
            $(this).prev().toggleClass('active');
        });


    };


}(jQuery));
