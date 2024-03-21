function AlertDialog() {
    rows = 16;
    $('<div id = dialog align =center> ' +
        '<span> Default Tower Size is 16. </span>' + '<br><br>' +
        '<span> To Customize Tower Size press the </span>' +
        '<i class="fa-solid fa-plus"></i>' +
        '<span> Button </span>' +
        '</div>'
    ).dialog({
        title: ' Alert',
        autoOpen: true,
        modal: true,
        width: $(window).width() > 400 ? 400 : 'auto',
        resizable: false,
        draggable: false,
        buttons: {
            'Ok': {
                text: 'Confirm',
                'class': 'dialogButton alert-dialogButton',
                'id': 'confim',
                click: function () {
                    createTable(rows);
                    $(this).dialog('destroy');
                }
            }
        },
        classes: {
            'ui-dialog-titlebar': 'alert-dialog-titlebar',
            'ui-dialog-title': 'alert-dialog-title',
            'ui-dialog-title::before': 'alert-dialog-title::before',
            'ui-dialog-title-close': 'alert-dialog-title-close'
        }
    });
}

function StackUpDialog() {
    $('<div id = dialog align =center> ' +
        '<h3> Please select the number of rows for the tower</h3>' +
        '<select id="rows-Dropdown">' +
        '<option value="7">7</option><option value="8">8</option><option value="9">9</option>' +
        '<option value="10">10</option><option value="11">11</option><option value="12">12</option>' +
        '<option value="13">13</option><option value="14">14</option><option value="15">15</option>' +
        '<option value="16">16</option>' +
        '</div>'
    ).dialog({
        title: 'Build Tower',
        autoOpen: true,
        modal: true,
        width: $(window).width() > 300 ? 300 : 'auto',
        resizable: false,
        draggable: false,
        buttons: {
            'Ok': {
                text: 'Build Tower',
                'class': 'dialogButton stackup-dialogButton',
                'id': 'confim',
                click: function () {
                    rows = $("#rows-Dropdown").val();
                    $(this).dialog('destroy');
                    getFreshArrays();
                    clearTable();
                    // createTable(rows)
                }
            }
        }
    });
}

function LegendDialog() {
    if (rows == 16) {
        rotateText = ': Rebuild Tower';
    } else {
        rotateText = ': Select Rebuild Option';
    }
    $('<div id = dialog align =center> <h3> Current Tower Size: ' + rows + ' </h3>' +
        '<h4> Questions</h4>' +
        '<span class= green > Went Well: ' + wentWellStart + ' - ' + wentWellEnd + '</span>' + '<br><br>' +
        "<span class= black> Didn't Go Well: " + notWellStart + " - " + notWellEnd + "</span>" + '<br><br>' +
        '<span class= blue> Learned: ' + learnStart + ' - ' + learnEnd + '</span>' + '<br><br>' +
        '<span class= orange> Improvements: ' + improveStart + ' - ' + improveEnd + '</span>' + '<br><br>' +
        '<span class= purple> Fun Questions: ' + funStart + ' - ' + funEnd + '</span>' + '<br><br>' +
        '<h4> Navigation</h4>' +
        '<i class="fa-solid fa-map"><span class= legendText> : Legend </span>' + '<br><br>' +
        '<i class="fa-solid fa-plus"><span class= legendText> : Choose Tower Height </span>' + '<br><br>' +
        '<i class="fa-solid fa-rotate"><span class= legendText> ' + rotateText + ' </span>' + '<br><br>' +
        ' </div>'
    ).dialog({
        title: 'Jumbling Tower  Legend',
        autoOpen: true,
        modal: true,
        width: $(window).width() > 350 ? 350 : 'auto',
        resizable: false,
        draggable: false,
        buttons: {
            'Ok': {
                text: 'Close',
                'class': 'dialogButton legend-dialogButton',
                'id': 'confim',
                click: function () {
                    $(this).dialog('destroy');
                }
            }
        }
    });
}

function wentWellTowerCard(towerQuestions) {
    $('<div id = went-well-dialog align =center class= greenCard> ' + '<br><br>' +
        towerQuestions + '<br><br>' +
        ' </div>'
    ).dialog({
        title: 'What Went Well',
        autoOpen: true,
        modal: true,
        width: $(window).width() > 400 ? 400 : 'auto',
        resizable: false,
        draggable: false,
        buttons: {
            'Ok': {
                text: 'Close',
                'class': 'dialogButton',
                'id': 'confim',
                click: function () {
                    $(this).dialog('destroy');
                }
            }
        },
        classes: {
            "ui-dialog": "went-well-dialog",
            "ui-dialog-titlebar": "went-well-dialog-titlebar",
            "ui-dialog-buttonpane": "went-well-dialog-buttonpane",
            "ui-button": "went-well-dialog-button",
            "ui-dialog-content": "went-well-dialog-content",
            "ui-dialog-buttonset": "went-well-dialog-buttonset",
            "ui-widget-content": "went-well-widget-content"
        }
    });
}

function notWellTowerCard(towerQuestions) {
    $('<div id = went-well-dialog align =center class= blackCard> ' + '<br><br>' +
        towerQuestions + '<br><br>' +
        ' </div>'
    ).dialog({
        title: "What Didn't Go Went Well",
        autoOpen: true,
        modal: true,
        width: $(window).width() > 400 ? 400 : 'auto',
        resizable: false,
        draggable: false,
        buttons: {
            'Ok': {
                text: 'Close',
                'class': 'dialogButton',
                'id': 'confim',
                click: function () {
                    $(this).dialog('destroy');
                }
            }
        },
        classes: {
            "ui-dialog": "not-well-dialog",
            "ui-dialog-titlebar": "not-well-dialog-titlebar",
            "ui-dialog-buttonpane": "not-well-dialog-buttonpane",
            "ui-button": "not-well-dialog-button",
            "ui-dialog-content": "not-well-dialog-content",
            "ui-dialog-buttonset": "not-well-dialog-buttonset",
            "ui-widget-content": "not-well-widget-content"
        }
    });
}

function learnedTowerCard(towerQuestions, key) {
    $('<div id = went-well-dialog align =center class= blueCard> ' + '<br><br>' +
        towerQuestions + '<br><br>' +
        ' </div>'
    ).dialog({
        title: 'What Did We Learn',
        autoOpen: true,
        modal: true,
        width: $(window).width() > 400 ? 400 : 'auto',
        resizable: false,
        draggable: false,
        buttons: {
            'Ok': {
                text: 'Close',
                'class': 'dialogButton',
                'id': 'confim',
                click: function () {
                    $(this).dialog('destroy');
                }
            }
        },
        classes: {
            "ui-dialog": "learned-dialog",
            "ui-dialog-titlebar": "learned-dialog-titlebar",
            "ui-dialog-buttonpane": "learned-dialog-buttonpane",
            "ui-button": "learned-dialog-button",
            "ui-dialog-content": "learned-dialog-content",
            "ui-dialog-buttonset": "learned-dialog-buttonset",
            "ui-widget-content": "learned-widget-content"
        }
    });
}

function improvedTowerCard(towerQuestions, key) {
    $('<div id = went-well-dialog align =center class= orangeCard> ' + '<br><br>' +
        towerQuestions + '<br><br>' +
        ' </div>'
    ).dialog({
        title: 'What Can We Improve',
        autoOpen: true,
        modal: true,
        width: $(window).width() > 400 ? 400 : 'auto',
        resizable: false,
        draggable: false,
        buttons: {
            'Ok': {
                text: 'Close',
                'class': 'dialogButton',
                'id': 'confim',
                click: function () {
                    $(this).dialog('destroy');
                }
            }
        },
        classes: {
            "ui-dialog": "improved-dialog",
            "ui-dialog-titlebar": "improved-dialog-titlebar",
            "ui-dialog-buttonpane": "improved-dialog-buttonpane",
            "ui-button": "improved-dialog-button",
            "ui-dialog-content": "improved-dialog-content",
            "ui-dialog-buttonset": "improved-dialog-buttonset",
            "ui-widget-content": "improved-widget-content"
        }
    });
}

function funTowerCard(towerQuestions, key) {
    $('<div id = went-well-dialog align =center class= purpleCard> ' + '<br><br>' +
        towerQuestions + '<br><br>' +
        ' </div>'
    ).dialog({
        title: 'Fun Question',
        autoOpen: true,
        modal: true,
        width: $(window).width() > 400 ? 400 : 'auto',
        resizable: false,
        draggable: false,
        buttons: {
            'Ok': {
                text: 'Close',
                'class': 'dialogButton',
                'id': 'confim',
                click: function () {
                    $(this).dialog('destroy');
                }
            }
        },
        classes: {
            "ui-dialog": "fun-dialog",
            "ui-dialog-titlebar": "fun-dialog-titlebar",
            "ui-dialog-buttonpane": "fun-dialog-buttonpane",
            "ui-button": "fun-dialog-button",
            "ui-dialog-content": "fun-dialog-content",
            "ui-dialog-buttonset": "fun-dialog-buttonset",
            "ui-widget-content": "fun-widget-content"
        }
    });
}

function RebuildOptionDialog() {
    let rebuild = 'Current Size: ' + rows;
    if (rows != 16) {
        $('<div id = dialog align =center> ' +
            '<span> Select Tower Rebuild Option </span>' +
            '</div>'
        ).dialog({
            title: 'Alert',
            autoOpen: true,
            modal: true,
            width: $(window).width() > 400 ? 400 : 'auto',
            resizable: false,
            draggable: false,
            buttons: {
                'Ok': {
                    text: rebuild,
                    'class': 'dialogButton',
                    'id': 'confim',
                    click: function () {
                        getFreshArrays();
                        clearTable();
                        $(this).dialog('destroy');
                    }
                },
                'Cancel': {
                    text: 'Default Size: 16',
                    'class': 'dialogButton',
                    'id': 'confim',
                    click: function () {
                        rows = 16
                        getFreshArrays();
                        clearTable();
                        $(this).dialog('destroy');
                    }
                }
            },
            classes: {
                "ui-dialog-titlebar-close ": "rebuild-dialog-titlebar-close "
            }
        });
    } else {
        getFreshArrays();
        clearTable();
    }
}