/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false, createTag:false*/
'use strict';

function toTitleCase(input) {
    return input.replace(/\w\S*/g, function(str){
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
}

togglbutton.render('#channel_name:not(.toggl)', {observe: true}, function () {
  var link,
    placeholder = $('.channel_title_info'),
    project = toTitleCase($("#channel_name").textContent.trim().replace(/^#/, '').replace(/[-_]/g, ' '));

  link = togglbutton.createTimerLink({
    className: 'slack',
    projectName: project,
    buttonType: 'minimal'
  });

  placeholder.parentNode.insertBefore(link, placeholder);
});

function toTitleCase(input) {
    return input.replace(/\w\S*/g, function(str){
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
}

togglbutton.render('.c-message--hover:not(.toggl)', {observe: true}, function (elem) {
  var link,
    placeholder = $('.c-message_actions__button--last-child'),
    description = $('.c-message__body', elem).textContent,
    project = toTitleCase($("#channel_name").textContent.trim().replace(/^#/, '').replace(/[-_]/g, ' '));

  link = togglbutton.createTimerLink({
    className: 'slack-message',
    projectName: project,
    description: description,
    buttonType: 'minimal'
  });

  placeholder.parentNode.insertBefore(link, placeholder);
});