function iss_RegisterCheckboxesEvent(tableId, callback) {
    $(`#${tableId}`).on("change", "input[type='checkbox']", function () {
            let checked = $(this).prop('checked') == true;
            let content = $(this).next().text();
            let index = $(this).data("index");
            callback(index, checked, content);
    });
}

function iss_SetCheckboxState(tableId, index, state) {
    let checkbox = $(`#${tableId} input[type='checkbox'][data-index='${index}']`);
    if (state == -1)
        checkbox.prop("indeterminate", true);
    else if (state == 0)
        checkbox.prop("checked", false);
    else
        checkbox.prop("checked", true);
}

function iss_SetIndeterminateCheckboxes(tableId) {
    $(`#${tableId} input[type='checkbox'][data-name='TOTAL']`).each(function () {
        $(this).prop("indeterminate", true);
        $(this).css("pointer-events", "none");
    });
}
